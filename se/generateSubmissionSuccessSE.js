const fs = require("fs");

// The object containing the replacement text
const seText = {
	hrefs: {
		neobashTopLogo: "https://neobash.se/se",
		neobashBotLogo: "https://neobash.se/se",
		navCategories: "https://neobash.se/se/category-page.html",
		navHowItWorks: "../se.html#how-it-works",
		navBlog: "https://neobash.se/blog.html",
		navContact: "../se.html#cta",
		navCategoriesDescription: "https://neobash.se/se/category-page.html",
	},
	innerTexts: {
		submissionHeading: "Tack för att du kontaktade oss!",
		submissionDescription: `
	Vi går igenom din förfrågan och återkommer till dig a.s.a.p.
	Under tiden kan du fortsätta att bli inspirerad av vad vår fantastiska
	eventleverantörer har att erbjuda i vår kategorisektion.
	`,
		navCategories: "Kategorier",
		navHowItWorks: "Hur det funkar",
		navAbout: "Om oss",
		navBlog: "Blogg",
		navContact: "Kontakta oss",
		gifOverlayText: "Thank you.. &hearts;",
	},
};

// Read the contents of the HTML file C:\Users\ENGJOE\neobash-site\index.html
fs.readFile(
	"C:/Users/ENGJOE/neobash-site/submission-success.html",
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
			"C:/Users/ENGJOE/neobash-site/se/submission-success.html",
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
