"""Export official logo with transparent background (circular mask only)."""
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).parent.parent
OUT = ROOT / "public" / "logo.png"

# Official logo committed in d87d4c9 — never use hero screenshots or other assets
SOURCE = ROOT / "public" / "logo-official-source.png"


def process(src: Path) -> None:
    im = Image.open(src).convert("RGBA")
    w, h = im.size
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    im = im.crop((left, top, left + side, top + side))

    data = np.array(im, dtype=np.float32)
    r, g, b = data[:, :, 0], data[:, :, 1], data[:, :, 2]

    white = (r > 235) & (g > 235) & (b > 235)
    data[white, 3] = 0

    cx = cy = side / 2
    radius = side / 2 * 0.98
    yy, xx = np.ogrid[:side, :side]
    circle = (xx - cx) ** 2 + (yy - cy) ** 2 <= radius**2
    data[~circle, 3] = 0

    result = Image.fromarray(np.clip(data, 0, 255).astype(np.uint8))
    bbox = result.getbbox()
    if bbox:
        result = result.crop(bbox)

    result.save(OUT, "PNG", optimize=True)
    print(f"Saved {OUT} ({result.size[0]}x{result.size[1]})")


if __name__ == "__main__":
    if not SOURCE.exists():
        raise SystemExit(f"Missing official source: {SOURCE}")
    process(SOURCE)
