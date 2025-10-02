import glob, os

domain = "https://team-ocean.github.io/NFYB21003U-Fluid-Mechanics/"
with open("sitemap.xml", "w", encoding="utf-8") as f:
    f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
    f.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
    for file in glob.glob("**/*.html", recursive=True):
        url = domain + file.replace(os.sep, "/")
        f.write(f"  <url><loc>{url}</loc></url>\n")
    f.write('</urlset>\n')
