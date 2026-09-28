from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

WIDTH = 1200
HEIGHT = 630
PROJECT_ROOT = Path(__file__).resolve().parents[1]
WORKSPACE_ROOT = PROJECT_ROOT.parent
FONT_ROOT = Path("/System/Library/Fonts/Supplemental")


def font(name, size):
    return ImageFont.truetype(str(FONT_ROOT / name), size)


background = Image.new("RGB", (WIDTH, HEIGHT), "#0b0f14")
pixels = background.load()
top = (11, 15, 20)
bottom = (17, 25, 39)

for y in range(HEIGHT):
    ratio = y / (HEIGHT - 1)
    color = tuple(round(top[index] * (1 - ratio) + bottom[index] * ratio) for index in range(3))
    for x in range(WIDTH):
        pixels[x, y] = color

glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow)
glow_draw.ellipse((-180, -300, 620, 480), fill=(59, 130, 246, 47))
glow_draw.ellipse((730, 100, 1390, 800), fill=(139, 92, 246, 35))
glow = glow.filter(ImageFilter.GaussianBlur(100))
background = Image.alpha_composite(background.convert("RGBA"), glow)
grid = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
grid_draw = ImageDraw.Draw(grid)

for x in range(0, WIDTH, 48):
    grid_draw.line((x, 0, x, HEIGHT), fill=(255, 255, 255, 12), width=1)
for y in range(0, HEIGHT, 48):
    grid_draw.line((0, y, WIDTH, y), fill=(255, 255, 255, 12), width=1)

background = Image.alpha_composite(background, grid)
draw = ImageDraw.Draw(background)

draw.rounded_rectangle((70, 66, 116, 112), radius=14, fill=(81, 135, 255, 255))
draw.text((81, 70), "<>", font=font("Arial Bold.ttf", 23), fill="#ffffff")
draw.text((132, 68), "PRANAV OJHA", font=font("Arial Bold.ttf", 17), fill="#e9eef8")
draw.text((132, 94), "PORTFOLIO  /  AI + SYSTEMS BUILDER", font=font("Arial.ttf", 11), fill="#98a6b9")

draw.rounded_rectangle((70, 176, 310, 212), radius=18, fill=(31, 47, 69, 255), outline=(53, 76, 109, 255), width=1)
draw.ellipse((87, 190, 96, 199), fill="#a7f36c")
draw.text((107, 187), "BUILDING FOR REAL WORK", font=font("Arial Bold.ttf", 11), fill="#d9e5f6")

draw.text((70, 244), "Pranav Ojha", font=font("Arial Bold.ttf", 66), fill="#f7f8fb")
draw.rounded_rectangle((73, 331, 224, 338), radius=4, fill="#a7f36c")
draw.text((70, 369), "Production software, data systems,", font=font("Arial.ttf", 25), fill="#d5ddeb")
draw.text((70, 406), "and applied AI products.", font=font("Arial.ttf", 25), fill="#d5ddeb")
draw.text((70, 548), "PRANAVOJHA.COM", font=font("Arial Bold.ttf", 12), fill="#98a6b9")

card = (704, 140, 1128, 500)
draw.rounded_rectangle(card, radius=28, fill=(19, 27, 40, 255), outline=(50, 62, 80, 255), width=1)
draw.text((742, 178), "FEATURED PRODUCT", font=font("Arial Bold.ttf", 12), fill="#a7f36c")
draw.text((742, 222), "Nova", font=font("Arial Bold.ttf", 42), fill="#f7f8fb")
draw.text((742, 279), "A persistent personal", font=font("Arial.ttf", 18), fill="#c4cfdf")
draw.text((742, 306), "delegation agent", font=font("Arial.ttf", 18), fill="#c4cfdf")

draw.line((742, 350, 1090, 350), fill=(255, 255, 255, 36), width=1)
for index, label in enumerate(("Exactly-once actions", "Bounded authorization", "Postgres · 58 tests")):
    y = 376 + index * 34
    draw.ellipse((744, y + 5, 752, y + 13), fill="#a7f36c")
    draw.text((766, y), label, font=font("Arial.ttf", 16), fill="#e0e7f1")

for destination in (PROJECT_ROOT / "public" / "og-image.png", WORKSPACE_ROOT / "output" / "og-image.png"):
    destination.parent.mkdir(parents=True, exist_ok=True)
    background.convert("RGB").save(destination, "PNG", optimize=True)
