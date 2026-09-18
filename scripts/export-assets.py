"""Export the current manuscript's original figure PDFs for the static site."""
from pathlib import Path
import hashlib
import json
import shutil
import fitz

site = Path(__file__).resolve().parents[1]
root = site.parent
assets = site / "assets"
manifest = {}
for name, relative in [
    ("architecture", "fig/pipe.pdf"),
    ("timeline", "fig/VGGT_Geometric_State_Trend_Tree.pdf"),
    ("teaser", "fig/teaser.pdf"),
]:
    source = root / relative
    shutil.copy2(source, assets / f"{name}.pdf")
    with fitz.open(source) as doc:
        if len(doc) != 1:
            raise ValueError(f"Expected one-page figure: {source}")
        page = doc[0]
        if name == "teaser":
            page.get_pixmap(matrix=fitz.Matrix(2600 / page.rect.width, 2600 / page.rect.width), alpha=False).save(assets / "teaser.png")
        else:
            (assets / f"{name}.svg").write_text(page.get_svg_image(text_as_path=True), encoding="utf-8")
    manifest[name] = {"source": relative, "sha256": hashlib.sha256(source.read_bytes()).hexdigest()}

paper = root.parent / "survey_arxiv" / "survey_arxiv.pdf"
shutil.copy2(paper, assets / paper.name)
manifest["paper"] = {"source": "../survey_arxiv/survey_arxiv.pdf", "sha256": hashlib.sha256(paper.read_bytes()).hexdigest()}
(assets / "sources.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
print("Updated the arXiv-version manuscript PDF and all three figure assets from the current sources.")
