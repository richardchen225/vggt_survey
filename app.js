const catalog = window.VGGT_CATALOG || { categories: [], papers: [] };
const datasets = window.VGGT_DATASETS || [];
const survey = window.VGGT_SURVEY;
const coverage = window.VGGT_COVERAGE;
const evaluation = window.VGGT_EVALUATION || [];
const state = {
  branch: "all",
  category: "all",
  query: "",
  limit: 30,
  datasetRole: "all",
  datasetTask: "all",
  datasetQuery: "",
};

const elements = {
  strengthening: document.querySelector("#strengthening-directions"),
  reuse: document.querySelector("#reuse-directions"),
  list: document.querySelector("#paper-list"),
  count: document.querySelector("#paper-count"),
  search: document.querySelector("#paper-search"),
  category: document.querySelector("#category-filter"),
  branchFilters: document.querySelector("#branch-filters"),
  empty: document.querySelector("#empty-state"),
  loadMore: document.querySelector("#load-more"),
  citationButton: document.querySelector("#copy-citation"),
  citationText: document.querySelector("#citation-text"),
  datasetList: document.querySelector("#dataset-table-body"),
  datasetCount: document.querySelector("#dataset-count"),
  datasetSearch: document.querySelector("#dataset-search"),
  datasetRoleFilters: document.querySelector("#dataset-role-filters"),
  datasetTask: document.querySelector("#dataset-task-filter"),
  datasetEmpty: document.querySelector("#dataset-empty-state"),
};

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function uniquePaperCount(papers) {
  return new Set(papers.map((paper) => paper.key)).size;
}

function renderSurvey() {
  const affiliations = [];
  document.querySelector("#survey-authors").innerHTML = survey.authors.map((author) => {
    const affiliation = [author.institution, author.city, author.country].filter(Boolean).join(", ");
    let index = affiliations.indexOf(affiliation);
    if (index < 0) { index = affiliations.length; affiliations.push(affiliation); }
    const url = author.homepage || `mailto:${author.email}`;
    const attributes = author.homepage ? ' target="_blank" rel="noopener noreferrer"' : ` title="${escapeHtml(author.email)}"`;
    return `<span><a href="${escapeHtml(url)}"${attributes}>${escapeHtml(author.name)}</a><sup>${index + 1}${author.corresponding ? ",*" : ""}</sup></span>`;
  }).join(" · ");
  document.querySelector("#survey-affiliations").innerHTML = affiliations.map((text) => `<li>${escapeHtml(text)}</li>`).join("");
  const corresponding = survey.authors.filter((author) => author.corresponding);
  document.querySelector("#corresponding-author").textContent = corresponding.length ? `* Corresponding author: ${corresponding.map((author) => author.name).join(", ")}.` : "";
  document.querySelector("#survey-abstract").textContent = survey.abstract;
  elements.citationText.querySelector("code").textContent = survey.citation;
  document.querySelector("#sync-date").textContent = `Updated ${survey.updated}`;
}

function renderDirectionLists() {
  for (const branch of ["strengthening", "reuse"]) {
    const target = elements[branch];
    const categories = catalog.categories.filter((category) => category.branch === branch);
    target.innerHTML = categories.map((category) => `
      <li>
        <div><a href="#papers" data-category-link="${escapeHtml(category.id)}">${escapeHtml(category.title)}</a>
          <p class="direction-description">${escapeHtml(category.description)}</p>
          <ul class="subgroup-list">${category.subgroups.map((group) => `<li>${escapeHtml(group.title)} <small>(${group.keys.length})</small></li>`).join("")}</ul>
        </div>
        <small>${category.papers.length}</small>
      </li>
    `).join("");
  }

  document.querySelectorAll("[data-category-link]").forEach((link) => {
    link.addEventListener("click", () => {
      const selectedCategory = catalog.categories.find((category) => category.id === link.dataset.categoryLink);
      state.branch = selectedCategory?.branch || "all";
      state.category = link.dataset.categoryLink;
      state.query = "";
      elements.search.value = "";
      state.limit = 30;
      syncBranchButtons();
      populateCategories(state.category);
      renderPapers();
    });
  });
}

function populateCategories(selected = "all") {
  const available = catalog.categories.filter((category) =>
    state.branch === "all" || category.branch === state.branch
  );
  const hasSelected = selected === "all" || available.some((category) => category.id === selected);
  const allLabel = state.branch === "strengthening"
    ? "All strengthening categories"
    : state.branch === "reuse"
      ? "All reuse applications"
      : "All categories";
  elements.category.innerHTML = [
    `<option value="all">${allLabel}</option>`,
    ...available.map((category) =>
      `<option value="${escapeHtml(category.id)}">${escapeHtml(category.title)}</option>`
    ),
  ].join("");
  elements.category.value = hasSelected ? selected : "all";
}

function syncBranchButtons() {
  elements.branchFilters.querySelectorAll("[data-branch]").forEach((candidate) => {
    candidate.classList.toggle("active", candidate.dataset.branch === state.branch);
  });
}

function normalizePaperSearch(value) {
  return String(value || "").normalize("NFKC").toLowerCase()
    .replace(/ω/g, "omega").replace(/[\s\p{Dash_Punctuation}_]+/gu, "");
}

function filteredPapers() {
  const query = normalizePaperSearch(state.query);
  return catalog.papers.filter((paper) => {
    if (state.branch !== "all" && paper.branch !== state.branch) return false;
    if (state.category !== "all" && paper.category !== state.category) return false;
    if (!query) return true;
    return [paper.title, ...(paper.aliases || []), paper.venue, paper.key, paper.authors, paper.categoryTitle, paper.subgroup]
      .some((value) => normalizePaperSearch(value).includes(query));
  });
}

function renderPapers() {
  const papers = filteredPapers();
  const visiblePapers = papers.slice(0, state.limit);
  elements.count.textContent = `Showing ${visiblePapers.length} of ${papers.length} records · ${uniquePaperCount(papers)} unique papers`;
  elements.empty.hidden = papers.length > 0;
  elements.loadMore.hidden = visiblePapers.length >= papers.length;
  elements.list.innerHTML = visiblePapers.map((paper) => {
    const title = paper.paper
      ? `<a href="${escapeHtml(paper.paper)}" target="_blank" rel="noopener noreferrer">${escapeHtml(paper.title)}</a>`
      : escapeHtml(paper.title);
    return `
      <article class="paper-item">
        <div class="paper-year">${escapeHtml(paper.year || "—")}</div>
        <div>
          <h3 class="paper-title">${title}</h3>
          <p class="paper-authors" title="${escapeHtml(paper.authors)}">${escapeHtml(paper.authors)}</p>
          <p class="paper-subgroup">${escapeHtml(paper.subgroup)}</p>
          <div class="paper-links">${[["Paper", paper.paper], ["Code", paper.code], ["Project page", paper.project]].filter(([, url]) => url).map(([label, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`).join("")}</div>
        </div>
        <div class="paper-meta">
          <span>${escapeHtml(paper.venue)}</span>
          <span class="paper-tag ${escapeHtml(paper.branch)}">${escapeHtml(paper.categoryTitle)}</span>
        </div>
      </article>
    `;
  }).join("");
}

elements.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.limit = 30;
  renderPapers();
});

elements.category.addEventListener("change", (event) => {
  state.category = event.target.value;
  state.limit = 30;
  renderPapers();
});

elements.branchFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-branch]");
  if (!button) return;
  state.branch = button.dataset.branch;
  state.category = "all";
  state.limit = 30;
  syncBranchButtons();
  populateCategories();
  renderPapers();
});

elements.loadMore.addEventListener("click", () => {
  state.limit += 30;
  renderPapers();
});

elements.citationButton.addEventListener("click", async () => {
  const citation = elements.citationText.textContent.trim();
  const label = elements.citationButton.querySelector(".button-label");
  try {
    await navigator.clipboard.writeText(citation);
    label.textContent = "Copied";
  } catch {
    window.getSelection()?.selectAllChildren(elements.citationText);
    elements.citationText.scrollIntoView({ block: "center" });
    label.textContent = "Selected";
  }
  window.setTimeout(() => { label.textContent = "BibTeX"; }, 1800);
});

function filteredDatasets() {
  const query = state.datasetQuery.trim().toLowerCase();
  return datasets.filter((dataset) => {
    if (state.datasetRole !== "all" && dataset.role !== state.datasetRole) return false;
    if (state.datasetTask !== "all" && !dataset.tasks.includes(state.datasetTask)) return false;
    if (!query) return true;
    return [dataset.name, dataset.roleLabel, dataset.scale, dataset.type, dataset.source]
      .some((value) => String(value || "").toLowerCase().includes(query));
  });
}

const taskLabels = {
  "camera-pose": "Camera pose",
  depth: "Depth",
  "3d-reconstruction": "3D reconstruction",
  "long-stream": "Long stream",
  "dynamic-4d": "Dynamic / 4D",
  nvs: "NVS",
  slam: "SLAM",
  "semantic-spatial": "Semantic 3D scene understanding",
  "world-models": "World models",
  "embodied-ai": "Embodied action and planning",
};

function coverageColor(percent) {
  const stops = [[36, 16, 79], [63, 103, 177], [38, 130, 142], [122, 209, 81], [244, 227, 74]];
  const band = Math.min(3, Math.floor(percent / 25));
  const mix = (percent - band * 25) / 25;
  return `rgb(${stops[band].map((value, i) => Math.round(value + (stops[band + 1][i] - value) * mix)).join(",")})`;
}

function renderCoverage() {
  document.querySelector("#coverage-summary").innerHTML = `<table class="coverage-table">
    <caption class="sr-only">Evaluation-task support within the reviewed dataset collection</caption>
    <thead><tr><th rowspan="2" scope="col">Dataset group</th><th rowspan="2" scope="col">Count</th><th colspan="5" scope="colgroup">State-strengthening tasks</th><th colspan="5" scope="colgroup">Downstream-reuse tasks</th></tr>
    <tr>${coverage.tasks.map((t) => `<th scope="col">${escapeHtml(t.title)}</th>`).join("")}</tr></thead>
    <tbody>${coverage.groups.map((g) => `<tr><th scope="row">${escapeHtml(g.title)}</th><td>${g.count}</td>${g.cells.map((c) => `<td style="background:${coverageColor(c.percentage)};color:${c.percentage > 68 ? "#000" : "#fff"}">${c.count}<br>(${c.percentage}%)</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}

function renderEvaluation() {
  const cellText = (value) => escapeHtml(value).replace(/\n/g, "<br>");
  document.querySelector("#evaluation-tables").innerHTML = evaluation.map((table) => `<details>
    <summary>${escapeHtml(table.title)}</summary>
    ${table.common ? `<p class="evaluation-common">${escapeHtml(table.common)}</p>` : ""}
    <div class="evaluation-table-wrap"><table class="evaluation-table"><thead><tr><th scope="col">${table.number === 5 ? "Evaluation focus" : "Evaluation task"}</th><th scope="col">Representative datasets</th><th scope="col">Key metrics</th><th scope="col">Key comparison conditions</th></tr></thead>
    <tbody>${table.sections.map((section) => `<tr class="evaluation-group"><th colspan="4" scope="colgroup">${escapeHtml(section.title)}</th></tr>${section.rows.map((r) => `<tr><th scope="row">${cellText(r.task)}</th><td>${cellText(r.datasets)}</td><td>${cellText(r.metrics)}</td><td>${cellText(r.conditions)}</td></tr>`).join("")}`).join("")}</tbody></table></div>
    <p class="dataset-note">${escapeHtml(table.note.replace("Geometric metric abbreviations follow Table 5.", "Geometric metric abbreviations are defined in the strengthening evaluation above."))}</p></details>`).join("");
}

function renderDatasets() {
  const visible = filteredDatasets();
  elements.datasetCount.textContent = `Showing ${visible.length} of ${datasets.length} datasets`;
  elements.datasetEmpty.hidden = visible.length > 0;
  elements.datasetList.innerHTML = visible.map((dataset) => {
    const name = dataset.url
      ? `<a href="${escapeHtml(dataset.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(dataset.name)}</a>`
      : escapeHtml(dataset.name);
    const taskTags = dataset.tasks.map((task) =>
      `<span class="dataset-task-tag">${escapeHtml(taskLabels[task] || task)}</span>`
    ).join("");
    return `<tr>
      <th scope="row">${name}</th>
      <td><span class="dataset-role ${escapeHtml(dataset.role)}">${escapeHtml(dataset.roleLabel)}</span></td>
      <td>${escapeHtml(dataset.scale)}</td>
      <td>${escapeHtml(dataset.type)}</td>
      <td>${escapeHtml(dataset.source)}</td>
      <td><div class="dataset-task-tags">${taskTags || "<span class=\"dataset-none\">—</span>"}</div></td>
    </tr>`;
  }).join("");
}

elements.datasetSearch.addEventListener("input", (event) => {
  state.datasetQuery = event.target.value;
  renderDatasets();
});

elements.datasetTask.addEventListener("change", (event) => {
  state.datasetTask = event.target.value;
  renderDatasets();
});

elements.datasetRoleFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-role]");
  if (!button) return;
  state.datasetRole = button.dataset.role;
  elements.datasetRoleFilters.querySelectorAll("[data-role]").forEach((candidate) => {
    candidate.classList.toggle("active", candidate === button);
  });
  renderDatasets();
});

renderSurvey();
renderCoverage();
renderEvaluation();
populateCategories();
renderDirectionLists();
renderPapers();
renderDatasets();
