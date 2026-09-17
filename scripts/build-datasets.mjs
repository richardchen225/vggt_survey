import fs from "node:fs";
import path from "node:path";
import { surveyRoot, readSource, parseBibtex, cleanLatex, extractCitations } from "../../awesome-vggt/scripts/survey-source.mjs";

const output = path.join(surveyRoot, "vggt-survey-website/data");
const bib = parseBibtex(readSource("survey_refs.bib"));
const groups = [
  { id: "reconstruction", title: "3D reconstruction", marker: "Datasets for 3D Reconstruction" },
  { id: "nvs", title: "NVS", marker: "Datasets for NVS" },
  { id: "downstream", title: "Other downstream tasks", marker: "Datasets for other downstream tasks" },
];
// These ten columns must follow Table 4, including world models BEFORE embodied.
const tasks = [
  ["camera-pose", "Camera pose"], ["depth", "Depth"], ["3d-reconstruction", "3D reconstruction"],
  ["long-stream", "Long stream"], ["dynamic-4d", "Dynamic / 4D"], ["nvs", "NVS"], ["slam", "SLAM"],
  ["semantic-spatial", "Semantic 3D scene understanding"], ["world-models", "World models"], ["embodied-ai", "Embodied action and planning"],
].map(([id, title]) => ({ id, title }));
const datasets = [];
let group;
for (const raw of readSource("tab/benchmark_coverage.tex").split(/\r?\n/)) {
  if (raw.includes("\\multicolumn{14}{l}")) {
    group = groups.find((g) => raw.includes(g.marker)) || group;
    continue;
  }
  if (!raw.includes("\\cite{") || !raw.includes(" & ")) continue;
  const cells = raw.replace(/\\\\\s*$/, "").split(/(?<!\\)&/).map((s) => s.trim());
  if (cells.length !== 14 || !group) throw new Error(`Unparsed dataset row: ${raw}`);
  const nameCell = cells[0].replace(/\\rowcolor\{[^}]*\}\s*/g, "");
  const key = extractCitations(nameCell)[0];
  if (!bib.has(key)) throw new Error(`Unknown dataset citation ${key}`);
  const type = cells[2].includes("\\objtype") ? "Object" : cells[2].includes("\\indoortype") ? "Indoor"
    : cells[2].includes("\\outdoortype") ? "Outdoor" : cells[2].includes("\\mixedtype") ? "Indoor / outdoor" : cleanLatex(cells[2]);
  const flags = cells.slice(4).map((s) => {
    if (!/^\\[cx]mark$/.test(s)) throw new Error(`Unrecognized task support: ${s}`);
    return s === "\\cmark";
  });
  datasets.push({
    name: cleanLatex(nameCell), role: group.id, roleLabel: group.title,
    scale: cleanLatex(cells[1]).replace(/^–/, "-"), type, source: cleanLatex(cells[3]),
    citation: key, url: bib.get(key).url || (bib.get(key).doi ? `https://doi.org/${bib.get(key).doi}` : ""),
    tasks: tasks.filter((_, i) => flags[i]).map((t) => t.id),
  });
}
if (new Set(datasets.map((d) => d.name)).size !== datasets.length) throw new Error("Duplicate dataset names");

const summaryRows = readSource("tab/benchmark_coverage_summary.tex").split(/\r?\n/).filter((l) => l.includes(" & ") && l.includes("\\coveragecell"));
const coverage = groups.map((g, i) => {
  const collection = datasets.filter((d) => d.role === g.id);
  const source = summaryRows[i];
  if (!source) throw new Error(`Missing Table 3 summary for ${g.title}`);
  const expectedCount = Number(source.split("&")[1].trim());
  const expected = [...source.matchAll(/\\coveragecell\{(\d+)\}\{(\d+) \(\d+\\%\)\}/g)];
  if (collection.length !== expectedCount || expected.length !== tasks.length) throw new Error(`Table 3/4 size mismatch: ${g.title}`);
  const cells = tasks.map((task, j) => {
    const count = collection.filter((d) => d.tasks.includes(task.id)).length;
    const percentage = Math.round(count * 100 / collection.length);
    if (count !== Number(expected[j][2]) || percentage !== Number(expected[j][1])) throw new Error(`Table 3/4 support mismatch: ${g.title}, ${task.title}`);
    return { task: task.id, count, percentage };
  });
  return { id: g.id, title: g.title, count: collection.length, cells };
});

function evaluationTable(filename, number) {
  const source = readSource(`tab/${filename}.tex`);
  const body = source.slice(source.indexOf("\\midrule") + "\\midrule".length, source.indexOf("\\bottomrule"));
  const sections = [];
  let section;
  let previousTask = "";
  for (const raw of body.split(/\\\\\s*(?:\r?\n|$)/)) {
    const header = raw.match(/\\multicolumn\{4\}\{l\}.*\\textbf\{([^}]+)\}/);
    if (header) {
      section = { title: cleanLatex(header[1]), rows: [] };
      sections.push(section);
      previousTask = "";
      continue;
    }
    if (!section) continue;
    const row = raw.replace(/\\addlinespace(?:\[[^\]]*\])?/g, "").trim();
    if (!row) continue;
    const cells = row.split(/(?<!\\)&/);
    if (cells.length !== 4) throw new Error(`Invalid evaluation row in Table ${number}: ${row}`);
    const text = cells.map((cell) => cell.split(/\\(?:par|newline)\b/).map(cleanLatex).filter(Boolean).join("\n"));
    if (text[0]) previousTask = text[0];
    else text[0] = previousTask;
    const citations = extractCitations(row);
    if (citations.some((key) => !datasets.some((d) => d.citation === key))) throw new Error(`Evaluation dataset absent from Table 4: ${citations}`);
    section.rows.push({ task: text[0], datasets: text[1], metrics: text[2], conditions: text[3], citations });
  }
  const common = body.includes("Common geometry metrics") ? cleanLatex(body.slice(body.indexOf("\\textbf{Common geometry"), body.indexOf("\\addlinespace")))
    .replace(/\}\s*$/, "") : "";
  const note = source.match(/\\begin\{minipage\}\{\\textwidth\}([\s\S]*?)\\end\{minipage\}/)?.[1] || "";
  if (sections.length !== 5 || sections.some((s) => !s.rows.length)) throw new Error(`Incomplete evaluation groups in Table ${number}`);
  return { number, title: number === 5 ? "Evaluation for geometric state strengthening" : "Evaluation for downstream geometric-state reuse", common, sections, note: cleanLatex(note) };
}
const evaluation = [evaluationTable("strengthening_eval", 5), evaluationTable("reuse_eval", 6)];
fs.writeFileSync(path.join(output, "datasets.js"), `window.VGGT_DATASETS = ${JSON.stringify(datasets, null, 2)};\nwindow.VGGT_COVERAGE = ${JSON.stringify({ tasks, groups: coverage }, null, 2)};\n`);
fs.writeFileSync(path.join(output, "evaluation.js"), `window.VGGT_EVALUATION = ${JSON.stringify(evaluation, null, 2)};\n`);
console.log(`Generated ${datasets.length} datasets; Table 3/4 agreement checked across ${tasks.length * groups.length} coverage cells; generated Tables 5 and 6.`);

const markdown = [
  "# Datasets and Evaluation", "",
  "This index follows Tables 3–6 of the current ACM manuscript. The 71 datasets are grouped by their primary evaluation use: 3D reconstruction, NVS, and other downstream tasks.", "",
  "A supported task means that the dataset provides observations or annotations that support the corresponding evaluation. Counts reproduce the manuscript's #Scenes column. For Oxford RobotCar, OmniWorld, and SPair-71k, the parenthesized frame or pair count indicates scale because a scene count was not identified in the cited source.", "",
  "[Interactive dataset explorer and evaluation tables](../vggt-survey-website/index.html#benchmarks)", "",
];
for (const group of groups) {
  const collection = datasets.filter((dataset) => dataset.role === group.id);
  markdown.push(`## ${group.title} (${collection.length} datasets)`, "", "| Dataset | #Scenes | Type | Source | Supported evaluation tasks |", "|---|---:|---|---|---|");
  for (const dataset of collection) {
    const label = dataset.url ? `[${dataset.name}](${dataset.url})` : dataset.name;
    markdown.push(`| ${label} | ${dataset.scale} | ${dataset.type} | ${dataset.source} | ${tasks.filter((task) => dataset.tasks.includes(task.id)).map((task) => task.title).join("; ")} |`);
  }
  markdown.push("");
}
markdown.push("## Evaluation targets", "", "Tables 5 and 6 pair each evaluation focus or task with representative datasets, key metrics, and comparison conditions. The website provides both tables as expandable panels.", "");
for (const table of evaluation) {
  markdown.push(`### Table ${table.number}: ${table.title}`, "");
  for (const section of table.sections) markdown.push(`- **${section.title}:** ${[...new Set(section.rows.map((row) => row.task))].join("; ")}.`);
  markdown.push("");
}
markdown.push("This file is regenerated by `npm run sync` in `awesome-vggt`.", "");
fs.writeFileSync(path.join(surveyRoot, "awesome-vggt/DATASETS.md"), markdown.join("\n"));
