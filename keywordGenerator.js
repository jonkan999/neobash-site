const fs = require("fs");

function createPage(englishKeyword, swedishKeyword) {
  fs.readFile("category-page-keywords.html", "utf-8", (err, data) => {
    if (err) throw err;

    // Replace the title and meta description with "Neobash - " + english_keyword
    let englishData = data
      .replace(
        /<title>.*<\/title>/,
        `<title>Neobash - ${englishKeyword}</title>`
      )
      .replace(
        /<meta name="description" content=".*">/,
        `<meta name="description" content="Neobash - ${englishKeyword}">`
      );

    // Replace the text in id=headerScroll
    englishData = englishData.replace(
      /<div id="headerScroll">.*<\/div>/,
      `<div id="headerScroll">Category selection based on ${englishKeyword}</div>`
    );

    // Replace the title and meta description with "Neobash - " + swedish_keyword
    let swedishData = data
      .replace(
        /<title>.*<\/title>/,
        `<title>Neobash - ${swedishKeyword}</title>`
      )
      .replace(
        /<meta name="description" content=".*">/,
        `<meta name="description" content="Neobash - ${swedishKeyword}">`
      );

    // Replace the text in id=headerScroll
    // Currently, this just replaces the text with "Swedish Keyword Text"
    // You can add your own logic to select the text based on the swedish_keyword
    swedishData = swedishData.replace(
      /<div id="headerScroll">.*<\/div>/,
      `<div id="headerScroll">Urval baserat på ${swedishKeyword}</div>`
    );

    // Write the modified HTML to files
    fs.writeFile(
      `category-page/banner-site/${englishKeyword.replace(/\s+/g, "-")}.html`,
      englishData,
      "utf-8",
      (err) => {
        if (err) throw err;
        console.log(`English page created: ${englishKeyword}.html`);
      }
    );
    fs.writeFile(
      `se/category-page/banner-site/${swedishKeyword.replace(
        /\s+/g,
        "-"
      )}.html`,
      swedishData,
      "utf-8",
      (err) => {
        if (err) throw err;
        console.log(`Swedish page created: ${swedishKeyword}.html`);
      }
    );
  });
}

// Call the createPage function with the english and swedish keywords
createPage(
  "event venue södermalm",
  "hyra festlokal södermalm, söder, mariatorget"
);
