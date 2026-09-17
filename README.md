# VGGT Survey Website

Static project page for *VGGT for 3D Reconstruction and Beyond: A Survey of Geometric State Strengthening and Its Applications*, aligned with the current ACM manuscript in the parent directory.

[Website](https://richardchen225.github.io/vggt_survey/) · [Paper](https://richardchen225.github.io/vggt_survey/assets/survey_acmcsur.pdf)

## Preview

Serve this directory locally:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/`. The site also works by opening `index.html` directly. All published assets and data are included in this repository.

## Deployment

GitHub Pages serves the root of the `main` branch at https://richardchen225.github.io/vggt_survey/. Push website changes to `main` to update the site. `.nojekyll` keeps deployment static; no build step or runtime dependencies are required.

## Synchronization

The following maintenance commands require the author's full survey workspace (the manuscript and sibling `awesome-vggt` directory). They are not required to view or deploy this repository. From the sibling literature repository:

```powershell
cd ..\awesome-vggt
npm run sync
npm run check
```

The sync command regenerates:

- `data/survey.js`: title, eight authors and affiliations, abstract, and manuscript citation from `survey_acmcsur.tex`, plus author homepages from `awesome-vggt/data/people.json`. Names link to email when no available homepage is recorded.
- `data/catalog.js`: method categories, subgroups, and references from Tables 1 and 2 and `survey_refs.bib`.
- Search aliases include every representative method name in the manuscript tables, plus verified alternative names in `awesome-vggt/data/aliases.json`. Searches accept differences in case, spacing, hyphens, and superscript digits.
- `data/datasets.js`: all 71 Table 4 datasets and their ten task-support columns, plus coverage verified against every Table 3 cell.
- `../awesome-vggt/DATASETS.md`: a readable index of the same 71 datasets and evaluation groups.
- `data/evaluation.js`: evaluation groups, datasets, metrics, and comparison conditions from Tables 5 and 6.
- `assets/survey_acmcsur.pdf`, the architecture, teaser, and geometric-state trend tree, exported from the current original PDFs. `assets/sources.json` records their source paths and SHA-256 hashes.

Compile the manuscript before synchronization when its PDF needs updating. Node.js and Python with PyMuPDF are required only for maintenance; the website has no runtime package dependencies. Code and project-page links are preserved from `awesome-vggt/data/resources.json`.

For the optional browser check, run the following from `awesome-vggt` (uses locally installed Google Chrome on Windows):

```powershell
npm install --no-save --no-package-lock --ignore-scripts --cache .npm-cache playwright
node scripts/check-browser.mjs
```

The check starts and closes its own local server, tests desktop/tablet/mobile layouts and interactive controls, and saves screenshots to `.screenshots` in the website directory. Older, unused PDF/coverage assets are retained under `_archive` and are not linked from the site.

## Publication details

The page cites the current manuscript and does not claim journal acceptance. A DOI or public manuscript identifier can be added when available. Deployment uses the committed HTML, CSS, JavaScript, and assets without accessing the local manuscript workspace.
