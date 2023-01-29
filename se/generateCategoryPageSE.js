const fs = require("fs");

// The object containing the replacement text
const seText = {
	hrefs: {
		neobashTopLogo: "https://neobash.se/se.html",
		bashBasket: "../se/bash-basket.html",
		checkoutButton: "../se/checkout.html",
	},
	innerTexts: {
		guestsButton: `
		<span>Gäster</span>
		<ion-icon
			class="header-button-icon"
			name="chevron-down-outline"
		></ion-icon>
		`,
		bringBoozeContainer: `
		<div id="bringBooze" class="header-checkbox">
			<ion-icon
				name="checkmark-outline"
				class="check-icon"
			></ion-icon>
		</div>
		<span for="bringBooze">Egen dryck</span>

		`,
		bringFoodContainer: `
		<div id="bringFood" class="header-checkbox">
			<ion-icon
				name="checkmark-outline"
				class="check-icon"
			></ion-icon>
		</div>
		<span for="bringFood">Egen mat</span>
		`,

		checkoutButton: "till utcheckning",
		selectLanguage: `
		<option value="EN">EN</option>
		<option value="SE" selected>SE</option>
		`,
	},
};

// Read the contents of the HTML file C:\Users\ENGJOE\neobash-site\index.html
fs.readFile(
	"C:/Users/ENGJOE/neobash-site/category-page.html",
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

		$("#selectLanguage option[value='SE']").selected = true;

		// Write the modified HTML to a new file
		fs.writeFile(
			"C:/Users/ENGJOE/neobash-site/se/category-page.html",
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
