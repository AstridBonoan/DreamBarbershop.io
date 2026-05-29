import json
import re
from pathlib import Path


def parse_file(path: str) -> dict:
    html = Path(path).read_text(encoding="utf-8")
    marker = "window.__BOOTSTRAP_STATE__ = "
    start = html.find(marker)
    if start < 0:
        raise SystemExit("no bootstrap")
    i = start + len(marker)
    depth = 0
    in_str = False
    escape = False
    while i < len(html):
        ch = html[i]
        if in_str:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == '"':
                in_str = False
        else:
            if ch == '"':
                in_str = True
            elif ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    return json.loads(html[start + len(marker) : i + 1])
        i += 1
    raise SystemExit("unterminated bootstrap json")


def walk(obj, hits: list):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k in (
                "name",
                "display_name",
                "variation_name",
                "team_member_name",
                "formatted_address",
                "street",
                "city",
                "business_hours",
                "price_money",
                "service_duration",
                "description",
            ):
                hits.append((k, v))
            walk(v, hits)
    elif isinstance(obj, list):
        for v in obj:
            walk(v, hits)


root = Path(__file__).parent.parent
for name in ["square-page.html", "square-instagram.html"]:
    p = root / name
    if not p.exists():
        continue
    print(f"\n=== {name} ===")
    data = parse_file(str(p))
    hits = []
    walk(data, hits)
    for k, v in hits:
        if isinstance(v, (str, int, float, dict)) and v:
            s = json.dumps(v) if isinstance(v, dict) else str(v)
            if len(s) < 300:
                print(f"{k}: {s}")

    blob = Path(p).read_text(encoding="utf-8")
    inserts = re.findall(r'"insert":"((?:\\.|[^"\\])*)"', blob)
    for ins in inserts:
        text = ins.encode().decode("unicode_escape")
        if len(text) > 8:
            print("INSERT:", text.replace("\n", " | ")[:250])
