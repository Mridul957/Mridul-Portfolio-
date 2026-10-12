import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

FONT_PATH = r"E:\Mridul Editing Website\artifacts\portfolio\public\PlusJakartaSans.ttf"
HERO_PATH = r"E:\Mridul Editing Website\artifacts\portfolio\public\hero-portrait.png"
MRIDUL_PATH = r"E:\Mridul Editing Website\artifacts\portfolio\public\mridul-portrait.png"
OUTPUT_DIR = r"E:\Mridul Editing Website\artifacts\portfolio\public"

def create_base_canvas(W=1200, H=630):
    canvas = Image.new("RGBA", (W, H), (8, 6, 6, 255))
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw_glow = ImageDraw.Draw(glow)

    # Ambient deep amber spotlight around right center (900, 315)
    for r in range(500, 0, -5):
        factor = (1 - r / 500.0) ** 1.8
        alpha = int(80 * factor)
        draw_glow.ellipse([900 - r, 315 - r, 900 + r, 315 + r], fill=(245, 158, 11, alpha))

    # Subtle red ambient warmth bottom-left
    for r in range(350, 0, -8):
        factor = (1 - r / 350.0) ** 2
        alpha = int(35 * factor)
        draw_glow.ellipse([100 - r, 550 - r, 100 + r, 550 + r], fill=(220, 38, 38, alpha))

    base = Image.alpha_composite(canvas, glow)

    # Subtle cinematic grid lines
    grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw_grid = ImageDraw.Draw(grid)
    for x in range(0, W, 40):
        draw_grid.line([(x, 0), (x, H)], fill=(255, 255, 255, 4), width=1)
    for y in range(0, H, 40):
        draw_grid.line([(0, y), (W, y)], fill=(255, 255, 255, 4), width=1)
    
    return Image.alpha_composite(base, grid)

def draw_pill(draw, xy, text, font, bg_color, border_color, text_color, dot_color=None, px=18, py=8):
    x, y = xy
    bbox = font.getbbox(text)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]

    dot_space = 18 if dot_color else 0
    w = tw + (px * 2) + dot_space
    h = th + (py * 2)

    draw.rounded_rectangle([x, y, x + w, y + h], radius=h // 2, fill=bg_color, outline=border_color, width=1)

    tx = x + px
    if dot_color:
        dot_r = 4
        dot_cy = y + h // 2
        draw.ellipse([tx, dot_cy - dot_r, tx + dot_r * 2, dot_cy + dot_r], fill=dot_color)
        tx += dot_space

    draw.text((tx, y + py - 2), text, font=font, fill=text_color)
    return w, h

def draw_chip(draw, xy, category, font, px=16, py=10):
    x, y = xy
    bbox = font.getbbox(category)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    w = tw + px * 2
    h = th + py * 2
    
    # Charcoal glassmorphic card with subtle silver-amber outline
    draw.rounded_rectangle([x, y, x + w, y + h], radius=10, 
                           fill=(24, 20, 20, 255), outline=(55, 45, 45, 255), width=1)
    draw.text((x + px, y + py - 2), category, font=font, fill=(235, 235, 235, 255))
    return w, h

def build_variation_hero():
    W, H = 1200, 630
    img = create_base_canvas(W, H)
    draw = ImageDraw.Draw(img)

    font_badge = ImageFont.truetype(FONT_PATH, 12)
    font_name = ImageFont.truetype(FONT_PATH, 60)
    font_sub = ImageFont.truetype(FONT_PATH, 24)
    font_tag = ImageFont.truetype(FONT_PATH, 14)
    font_domain = ImageFont.truetype(FONT_PATH, 15)
    font_desc = ImageFont.truetype(FONT_PATH, 15)

    # 1. Top status badge
    draw_pill(draw, (75, 70), "CINEMATIC VISUAL STORYTELLER", font_badge, 
              bg_color=(38, 26, 8, 255), border_color=(245, 158, 11, 200), 
              text_color=(251, 191, 36, 255), dot_color=(245, 158, 11, 255), px=16, py=8)

    # 2. Main Name Header
    draw.text((75, 128), "MRIDUL GUPTA", font=font_name, fill=(255, 255, 255, 255))

    # 3. Role Subtitle with Amber accent
    draw.text((75, 214), "Cinematic Video Editor", font=font_sub, fill=(255, 255, 255, 240))
    draw.text((362, 214), "/", font=font_sub, fill=(245, 158, 11, 255))
    draw.text((384, 214), "Cinematographer", font=font_sub, fill=(251, 191, 36, 255))

    # 4. Description line
    draw.text((75, 265), "Turning moments into stories through emotion, rhythm & high-end post.", 
              font=font_desc, fill=(180, 180, 180, 255))

    # 5. Service / Portfolio Category Chips
    # Row 1
    x_curr, y_curr = 75, 320
    for cat in ["Wedding Films", "Event Aftermovies", "Music Videos"]:
        w, _ = draw_chip(draw, (x_curr, y_curr), cat, font_tag)
        x_curr += w + 12

    # Row 2
    x_curr, y_curr = 75, 376
    for cat in ["Commercial Ads", "High-Retention Reels", "Color Grading"]:
        w, _ = draw_chip(draw, (x_curr, y_curr), cat, font_tag)
        x_curr += w + 12

    # 6. Bottom divider & info bar
    draw.line([(75, 456), (680, 456)], fill=(50, 40, 40, 255), width=1)
    
    # Domain badge
    draw_pill(draw, (75, 480), "mrgproduction.netlify.app", font_domain,
              bg_color=(38, 26, 8, 255), border_color=(245, 158, 11, 200),
              text_color=(251, 191, 36, 255), dot_color=(245, 158, 11, 255), px=18, py=9)
    
    # Location
    draw.text((380, 489), "Jaipur, India  |  Available Worldwide", font=font_desc, fill=(160, 160, 160, 255))

    # 7. Right Card Showcase Frame
    frame_w, frame_h = 425, 510
    frame_x, frame_y = 715, 60

    # Frame shadow
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rounded_rectangle([frame_x - 10, frame_y - 10, frame_x + frame_w + 10, frame_y + frame_h + 10], 
                             radius=32, fill=(0, 0, 0, 200))
    shadow = shadow.filter(ImageFilter.GaussianBlur(20))
    img = Image.alpha_composite(img, shadow)

    # Frame border and inner photo
    hero = Image.open(HERO_PATH).convert("RGBA")
    hero = hero.resize((frame_w - 4, frame_h - 4), Image.Resampling.LANCZOS)

    mask = Image.new("L", (frame_w - 4, frame_h - 4), 0)
    m_draw = ImageDraw.Draw(mask)
    m_draw.rounded_rectangle([0, 0, frame_w - 4, frame_h - 4], radius=26, fill=255)

    # Bottom vignette on the frame
    vignette = Image.new("RGBA", (frame_w - 4, frame_h - 4), (0, 0, 0, 0))
    v_draw = ImageDraw.Draw(vignette)
    for i in range(150):
        alpha = int(240 * (i / 150.0) ** 1.4)
        v_draw.line([(0, frame_h - 4 - 150 + i), (frame_w - 4, frame_h - 4 - 150 + i)], fill=(5, 4, 4, alpha))
    
    hero_composite = Image.alpha_composite(hero, vignette)
    img.paste(hero_composite, (frame_x + 2, frame_y + 2), mask)

    # Border stroke
    stroke_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    st_draw = ImageDraw.Draw(stroke_layer)
    st_draw.rounded_rectangle([frame_x, frame_y, frame_x + frame_w, frame_y + frame_h], 
                             radius=28, outline=(255, 255, 255, 60), width=2)
    img = Image.alpha_composite(img, stroke_layer)

    # Bottom pill on the photo
    draw_reloaded = ImageDraw.Draw(img)
    draw_pill(draw_reloaded, (frame_x + 90, frame_y + frame_h - 46), "FILMMAKING & POST-PRODUCTION", font_badge,
              bg_color=(12, 10, 10, 230), border_color=(245, 158, 11, 180),
              text_color=(255, 255, 255, 255), dot_color=(245, 158, 11, 255), px=16, py=7)

    return img.convert("RGB")

def build_variation_portrait():
    W, H = 1200, 630
    img = create_base_canvas(W, H)
    draw = ImageDraw.Draw(img)

    font_badge = ImageFont.truetype(FONT_PATH, 12)
    font_name = ImageFont.truetype(FONT_PATH, 60)
    font_sub = ImageFont.truetype(FONT_PATH, 24)
    font_tag = ImageFont.truetype(FONT_PATH, 14)
    font_domain = ImageFont.truetype(FONT_PATH, 15)
    font_desc = ImageFont.truetype(FONT_PATH, 15)

    # Top status badge
    draw_pill(draw, (75, 70), "CINEMATIC VISUAL STORYTELLER", font_badge, 
              bg_color=(38, 26, 8, 255), border_color=(245, 158, 11, 200), 
              text_color=(251, 191, 36, 255), dot_color=(245, 158, 11, 255), px=16, py=8)

    draw.text((75, 128), "MRIDUL GUPTA", font=font_name, fill=(255, 255, 255, 255))

    draw.text((75, 214), "Cinematic Video Editor", font=font_sub, fill=(255, 255, 255, 240))
    draw.text((362, 214), "/", font=font_sub, fill=(245, 158, 11, 255))
    draw.text((384, 214), "Cinematographer", font=font_sub, fill=(251, 191, 36, 255))

    draw.text((75, 265), "Turning moments into stories through emotion, rhythm & high-end post.", 
              font=font_desc, fill=(180, 180, 180, 255))

    # Row 1 tags
    x_curr, y_curr = 75, 320
    for cat in ["Wedding Films", "Event Aftermovies", "Music Videos"]:
        w, _ = draw_chip(draw, (x_curr, y_curr), cat, font_tag)
        x_curr += w + 12

    # Row 2 tags
    x_curr, y_curr = 75, 376
    for cat in ["Commercial Ads", "High-Retention Reels", "Color Grading"]:
        w, _ = draw_chip(draw, (x_curr, y_curr), cat, font_tag)
        x_curr += w + 12

    draw.line([(75, 456), (680, 456)], fill=(50, 40, 40, 255), width=1)
    
    draw_pill(draw, (75, 480), "mrgproduction.netlify.app", font_domain,
              bg_color=(38, 26, 8, 255), border_color=(245, 158, 11, 200),
              text_color=(251, 191, 36, 255), dot_color=(245, 158, 11, 255), px=18, py=9)
    
    draw.text((380, 489), "Jaipur, India  |  Available Worldwide", font=font_desc, fill=(160, 160, 160, 255))

    # Right side: Circular golden backlight with Mridul cutout
    backlight = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(backlight)
    center_x, center_y = 935, 315
    for r in range(215, 0, -3):
        factor = (1 - r / 215.0) ** 0.85
        alpha = int(220 * factor)
        b_draw.ellipse([center_x - r, center_y - r, center_x + r, center_y + r], 
                       fill=(245, 158, 11, alpha))

    # Outer rim ring
    b_draw.ellipse([center_x - 220, center_y - 220, center_x + 220, center_y + 220], 
                   outline=(251, 191, 36, 170), width=2)

    img = Image.alpha_composite(img, backlight)

    # Paste Mridul's portrait
    mridul = Image.open(MRIDUL_PATH).convert("RGBA")
    target_h = 570
    target_w = int(mridul.width * (target_h / mridul.height))
    mridul = mridul.resize((target_w, target_h), Image.Resampling.LANCZOS)

    paste_x = center_x - target_w // 2 + 10
    paste_y = H - target_h + 35
    img.paste(mridul, (paste_x, paste_y), mridul)

    # Bottom fade for portrait
    fade = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    f_draw = ImageDraw.Draw(fade)
    for i in range(80):
        alpha = int(255 * (i / 80.0) ** 1.3)
        f_draw.line([(680, H - 80 + i), (W, H - 80 + i)], fill=(8, 6, 6, alpha))
    img = Image.alpha_composite(img, fade)

    return img.convert("RGB")

if __name__ == "__main__":
    v_hero = build_variation_hero()
    v_hero.save(os.path.join(OUTPUT_DIR, "opengraph-hero.jpg"), quality=96)
    
    v_portrait = build_variation_portrait()
    v_portrait.save(os.path.join(OUTPUT_DIR, "opengraph-portrait.jpg"), quality=96)

    # Default to hero
    v_hero.save(os.path.join(OUTPUT_DIR, "opengraph.jpg"), quality=96)
    print("Regenerated clean Open Graph cards successfully!")
