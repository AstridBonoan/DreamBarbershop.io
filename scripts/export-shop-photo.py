"""Export storefront photo at native resolution only — no upscale."""
from pathlib import Path

from PIL import Image

SRC = Path(
    r"C:\Users\astri\.cursor\projects\c-Users-astri-OneDrive-Desktop-DreamBarbershop\assets"
    r"\c__Users_astri_AppData_Roaming_Cursor_User_workspaceStorage_699401f8ee7404c803f2abdb449aa7dc_images_image-d7314eba-b372-40fa-becf-0293916b6dc7.png"
)
OUT = Path(__file__).parent.parent / "public"

im = Image.open(SRC).convert("RGB")
w, h = im.size

# Native only — never upscale (upscaling causes blur)
im.save(OUT / "shop-exterior.jpg", quality=98, optimize=False, progressive=True)
im.save(OUT / "shop-exterior.webp", quality=92, method=6)
im.save(OUT / "shop-exterior.png", optimize=True)

# Remove upscaled variants
for f in OUT.glob("shop-exterior@2x.*"):
    f.unlink()

print(f"Exported native {w}x{h}")
