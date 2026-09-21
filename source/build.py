#!/usr/bin/env python3
"""
Rebuilds index.html from the editable source template.

Why this exists: the final HTML has every image embedded as base64 text,
which makes it a single portable file (easy to host anywhere) but painful
to hand-edit. This script keeps the template human-readable — edit text,
layout, or CSS in joud-template.html, then run this script to produce the
final, ready-to-host file with all images baked back in.

Usage:
    cd source/
    python3 build.py

Output:
    ../index.html  (overwritten)
"""
import base64
import os

SOURCE_DIR = os.path.dirname(os.path.abspath(__file__))
IMAGES_DIR = os.path.join(SOURCE_DIR, "..", "images")
TEMPLATE = os.path.join(SOURCE_DIR, "joud-template.html")
OUTPUT = os.path.join(SOURCE_DIR, "..", "index.html")

# Maps each __TOKEN__ in the template to an image file in /images
IMAGE_MAP = {
    "__LOGO_B64__": "logo_icon.png",
    "__WORDMARK_B64__": "logo_wordmark.png",
    "__HERO_DATES__": "hero_dates.jpg",
    "__HERO_ALMOND__": "hero_almond.jpg",
    "__HERO_WALNUT__": "hero_walnut.jpg",
    "__HERO_GIFT__": "hero_gift.jpg",
    "__ABOUT_IMG__": "about_img.jpg",
    "__GIFT_CTA_IMG__": "gift_cta_img.jpg",
    "__CAT_DATES__": "cat_dates.jpg",
    "__CAT_STUFFED__": "cat_stuffed.jpg",
    "__CAT_CHOC__": "cat_choc.jpg",
    "__CAT_MAMOOL__": "cat_mamool.jpg",
    "__CAT_COFFEE__": "cat_coffee.jpg",
    "__CAT_DRYFRUITS__": "cat_dryfruits.jpg",
    "__CAT_SIGNATURE__": "cat_signature.jpg",
    "__CAT_GIFTING__": "cat_gifting.jpg",
}

def main():
    with open(TEMPLATE, "r", encoding="utf-8") as f:
        html = f.read()

    for token, filename in IMAGE_MAP.items():
        path = os.path.join(IMAGES_DIR, filename)
        with open(path, "rb") as img:
            b64 = base64.b64encode(img.read()).decode()
        count = html.count(token)
        if count == 0:
            print(f"WARNING: token {token} not found in template")
        html = html.replace(token, b64)
        print(f"{filename:20s} -> {token:20s} ({count} occurrence(s), {len(b64)//1024} KB)")

    with open(OUTPUT, "w", encoding="utf-8") as f:
        f.write(html)

    print(f"\nDone. Wrote {OUTPUT} ({len(html)//1024} KB)")

if __name__ == "__main__":
    main()
