#!/usr/bin/env python3
"""Generate a Qure-style 144x144 Five-Colored Flag SVG icon."""
from pathlib import Path

CANVAS_SIZE = 144
FLAG_HEIGHT = 123
CORNER_RADIUS = 20
STRIPE_HEIGHT = FLAG_HEIGHT / 5
COLORS = ("#FE0000", "#FFC000", "#0070C0", "#FFFFFF", "#000000")


def render_svg() -> str:
    stripes = []
    for index, color in enumerate(COLORS):
        y = index * STRIPE_HEIGHT
        stripes.append(
            f'    <rect y="{y:.2f}" width="{CANVAS_SIZE}" '
            f'height="{STRIPE_HEIGHT:.2f}" fill="{color}"/>'
        )
    return "\n".join(
        [
            f'<svg xmlns="http://www.w3.org/2000/svg" width="{CANVAS_SIZE}" height="{CANVAS_SIZE}" viewBox="0 0 {CANVAS_SIZE} {CANVAS_SIZE}" role="img" aria-labelledby="title desc">',
            "  <title id=\"title\">Five-Colored Flag</title>",
            "  <desc id=\"desc\">A softly shaded, rounded five-colored flag of the Republic of China.</desc>",
            "  <defs>",
            f'    <clipPath id="flag-mask"><rect width="{CANVAS_SIZE}" height="{FLAG_HEIGHT}" rx="{CORNER_RADIUS}"/></clipPath>',
            '    <linearGradient id="white-sheen" x1="0" y1="0" x2="0" y2="1">',
            '      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.24"/>',
            '      <stop offset="0.42" stop-color="#FFFFFF" stop-opacity="0.06"/>',
            '      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>',
            "    </linearGradient>",
            "  </defs>",
            '  <g clip-path="url(#flag-mask)">',
            *stripes,
            '    <rect width="144" height="70" fill="url(#white-sheen)"/>',
            "  </g>",
            f'  <!-- Flat-palette reference stripes: {", ".join(COLORS)} -->',
            "</svg>",
            "",
        ]
    )


if __name__ == "__main__":
    output = Path(__file__).with_name("five_color_flag.svg")
    output.write_text(render_svg(), encoding="utf-8")
    print(f"wrote {output}")
