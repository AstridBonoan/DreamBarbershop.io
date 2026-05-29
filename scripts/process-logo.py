"""Export logo with circular crop and no white square background."""
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw

ASSETS = Path(
    r"C:\Users\astri\.cursor\projects\c-Users-astri-OneDrive-Desktop-DreamBarbershop\assets"
)
OUT = Path(__file__).parent.parent / "public" / "logo.png"

SOURCES = [
    "*image-46c67e61-9215-4b38-8c1f-7fca59d5301b.png",
    "*image-19dc1d15-68a5-4846-a97c-8a141a738216.png",
]

src_path = None
for pattern in SOURCES:
    matches = list(ASSETS.glob(pattern))
    if matches:
        src_path = matches[0]
        break

if not src_path:
    raise SystemExit("Logo source image not found in assets")

im = Image.open(src_path).convert("RGBA")
w, h = im.size

# Square crop centered on logo
side = min(w, h)
left = (w - side) // 2
top = (h - side) // 2
im = im.crop((left, top, left + side, top + side))
w = h = side

data = np.array(im, dtype=np.float32)
r, g, b = data[:, :, 0], data[:, :, 1], data[:, :, 2]

# Remove white / off-white (outside and inside fringe)
white = (r > 235) & (g > 235) & (b > 235)
data[white, 3] = 0

# Hard circular mask — kills the visible square on light backgrounds
cx = cy = side / 2
radius = side / 2 * 0.98
yy, xx = np.ogrid[:side, :side]
circle = (xx - cx) ** 2 + (yy - cy) ** 2 <= radius**2
data[~circle, 3] = 0

result = Image.fromarray(np.clip(data, 0, 255).astype(np.uint8))
bbox = result.getbbox()
if bbox:
    result = result.crop(bbox)

# Scale up for crisp display (min 400px)
min_side = 400
if max(result.size) < min_side:
    scale = min_side / max(result.size)
    new_size = (int(result.width * scale), int(result.height * scale))
    result = result.resize(new_size, Image.Resampling.LANCZOS)

result.save(OUT, "PNG", optimize=True)
print(f"Saved {OUT} ({result.size[0]}x{result.size[1]}) from {src_path.name}")
