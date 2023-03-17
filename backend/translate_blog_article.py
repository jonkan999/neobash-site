import os
from googleapiclient.discovery import build
from config import translate_api

# Set up translation client
translate_client = build("translate", "v2", developerKey=translate_api)


# Set up paths
blog_name_en = "our-choice-of-5-simple-but-dazzling-cocktail-recipes"
blog_name_se = "Våra-top-picks-på-5-träffsäkra-tips-till-enkla-drinkar-och-drinkrecept"
en_path = f"blog/{blog_name_en}.html"
se_path = f"se/blogg/{blog_name_se}.html"


# Read in HTML content
with open(en_path, "r", encoding="utf8") as f:
    html_content = f.read()

# Define elements to translate
elements_to_translate = ["title", "h1", "h2", "img[alt]", "span", "p"]

# Loop through elements and translate
for element in elements_to_translate:
    # Find all instances of the current element in the HTML content
    element_instances = html_content.split(f"</{element}>")
    for i in range(len(element_instances)):
        # Skip over elements that don't have any text content or are in the footer element
        if f"<{element}" not in element_instances[i] or "footer" in element_instances[i]:
            continue

        # Split the current instance into the element and its contents
        element_start, element_content = element_instances[i].split(f"<{element}", 1)
        element_content = element_content[element_content.index(">") + 1 :]

        # Skip over elements that don't have any text content
        if not element_content.strip():
            continue

        # Translate the text content
        translation = translate_client.translations().list(
            q=element_content, target="sv"
        ).execute()
        translated_text = translation["translations"][0]["translatedText"]

        # Replace the text content in the HTML with the translated text
        html_content = html_content.replace(element_content, translated_text)

# Define the original and translated navigation links
original_links = [
    ('/category-page.html', 'Categories'),
    ('/index.html#how-it-works', 'How it works'),
    ('#', 'About'),
    ('https://neobash.se/blog.html', 'Blog'),
    ('/index.html#cta', 'contact us')
]
translated_links = [
    ('/se/category-page.html', 'Kategorier'),
    ('/se.html#how-it-works', 'Hur det funkar'),
    ('#', 'Om oss'),
    ('https://neobash.se/se/blog.html', 'Blogg'),
    ('/se.html#cta', 'Kontakta oss')
]

# Replace the links in the HTML content
for original_link, translated_link in zip(original_links, translated_links):
    html_content = html_content.replace(original_link[0], translated_link[0])
    html_content = html_content.replace(original_link[1], translated_link[1])


# Write the translated HTML content to a new file
with open(se_path, "w", encoding="utf8") as f:
    f.write(html_content)