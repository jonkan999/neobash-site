const fs = require("fs");

// The object containing the replacement text
const seText = {
	hrefs: {
		neobashTopLogo: "https://neobash.se/se",
		navCategories: "https://neobash.se/se/category-page.html",
		navHowItWorks: "../se.html#how-it-works",
		navBlog: "https://neobash.se/se/blog.html",
		navContact: "../se.html#cta",
		navCategoriesDescription: "https://neobash.se/se/category-page.html",
		"discover-the-7-best-event-venues-in-stockholm-with-own-food-and-alcohol-option":
			"../se/blogg/discover-the-7-best-event-venues-in-stockholm-with-own-food-and-alcohol-option.html",
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
	},
};

/* translation api calls */
const cheerio = require("cheerio");
const translate = require("./translateText.js").translate;

async function translateBlogPost(data) {
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

	const classesToTranslate = [
		".heading-secondary",
		".blog-article-date",
		".blog-article-paragraph",
		".blog-article-header",
		".inner-article-image-text",
		".blog-inline-link",
	];

	const promises = [];

	for (const classToTranslate of classesToTranslate) {
		$(classToTranslate).each(function () {
			if ($(this).html().includes("<a")) {
				const text = $(this).html().replace('href="/', 'href="/se/');

				promises.push(
					translate(text).then((translatedText) => {
						$(this).html(translatedText);
					})
				);
			} else {
				const text = $(this).text();

				promises.push(
					translate(text).then((translatedText) => {
						$(this).text(translatedText);
					})
				);
			}
		});
	}

	await Promise.all(promises);
	return $.html();
}

async function main() {
	const data = fs.readFileSync(
		"C:/Users/ENGJOE/neobash-site/blog/discover-the-7-best-event-venues-in-stockholm-with-own-food-and-alcohol-option.html",
		"utf-8"
	);
	const translatedData = await translateBlogPost(data);
	/* console.log(translatedData); */
	fs.writeFileSync(
		"C:/Users/ENGJOE/neobash-site/se/blogg/discover-the-7-best-event-venues-in-stockholm-with-own-food-and-alcohol-option.html",
		translatedData,
		"utf-8"
	);
}

main();
