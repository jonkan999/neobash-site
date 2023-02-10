const cheerio = require("cheerio");
const fs = require("fs");

const englishKeyword = "Design own labeled beer";
const swedishKeyword = "Designa och beställ öl med egen etikett";

// List of query strings
const selections = ["drinkscustomlabel"];

// Load the HTML content into cheerio
const htmlContent = fs.readFileSync("category-page-keywords.html", "utf-8");
const $ = cheerio.load(htmlContent);

// Update the title
$("title").text(`Neobash - ${englishKeyword}`);

// Update the meta description
$('meta[name="description"]').attr("content", `Neobash - ${englishKeyword}`);

// Update the header text
$("#headerScroll").text(`Category selection for: ${englishKeyword}`);

//Updating initial querystring

const queryString = "?id=" + selections.join("&id=");
$("head").append(`
  <script defer>
    const currentUrl = window.location.href;
    const queryString = \"${queryString}\";
    const newUrl = currentUrl + queryString;
    window.history.pushState({}, "", newUrl);
  </script>
`);

// Save the updated HTML to a file
fs.writeFileSync(
  `category-page/banner-site/${englishKeyword
    .replace(/ /g, "-")
    .replace(/,/g, "")}.html`,
  $.html(),
  "utf-8"
);

// Repeat the process for the Swedish keyword
$("title").text(`Neobash - ${swedishKeyword}`);
$('meta[name="description"]').attr("content", `Neobash - ${swedishKeyword}`);
$("#headerScroll").text(`Utvalt innehåll för: ${swedishKeyword}`);

fs.writeFileSync(
  `se/category-page/banner-site/${swedishKeyword
    .replace(/ /g, "-")
    .replace(/,/g, "")}.html`,
  $.html(),
  "utf-8"
);
