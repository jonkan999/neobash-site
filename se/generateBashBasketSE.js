const fs = require("fs");

// The object containing the replacement text
const seText = {
	hrefs: {
		neobashTopLogo: "https://neobash.se/se/category-page.html",
		bashBasket: "../se/bash-basket.html",
		checkoutButton: "../se/checkout.html",
	},
	innerTexts: {
		headerScroll: "Bash Basket - Dina samlade eventprodukter",
		checkoutButton: "till utcheckning",
	},
};

// Read the contents of the HTML file C:\Users\ENGJOE\neobash-site\index.html
fs.readFile(
	"C:/Users/ENGJOE/neobash-site/bash-basket.html",
	"utf8",
	(err, data) => {
		if (err) {
			console.log(err);
			return;
		}

		const cheerio = require("cheerio");
		const $ = cheerio.load(data);

		// Iterate through the innerText keys of the seText object
		for (const key in seText["innerTexts"]) {
			// Replace the inner HTML of the element with the specified ID
			$(`#${key}`).html(seText["innerTexts"][key]);
		}

		// Iterate through the href keys of the seText object and alter each anchors href
		for (const key in seText["hrefs"]) {
			// Replace the href of the element with the specified ID
			$(`#${key}`).attr("href", seText["hrefs"][key]);
		}

		// Write the modified HTML to a new file
		fs.writeFile(
			"C:/Users/ENGJOE/neobash-site/se/bash-basket.html",
			$.html(),
			"utf8",
			(err) => {
				if (err) {
					console.log(err);
					return;
				}
			}
		);
	}
);
