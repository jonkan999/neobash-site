const fs = require("fs");

//name of article to be replaced
const article_name_1 =
	"discover-the-7-best-event-venues-in-stockholm-with-own-food-and-alcohol-option";

// The object containing the replacement text
const seText = {
	hrefs: {
		neobashTopLogo: "https://neobash.se/se",
		navCategories: "https://neobash.se/se/category-page.html",
		navHowItWorks: "../se.html#how-it-works",
		navBlog: "https://neobash.se/se/blog.html",
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
		mainHeader: "Nytt inom Event",
		byobVenuesHeader1: `
		Vi listar de 7 bästa eventlokalerna i Stockholm med egen mat och dryck
		`,
		byobVenuesdate: `
		Januari 30, 2023
		`,
		byobVenuesParagraph1: `
		I den här artikeln kommer vi att utforska de 7 bästa evenentlokalerna i
Stockholm som erbjuder möjligheten att ta med och servera egen mat och
dryck, vilket gör din eventplaneringsupplevelse problemfri och
minnesvärd. Oavsett om du är värd för en företagskonferens, en
bröllopsmottagning, eller en privat fest, dessa lokaler tillgodoser alla
dina behov och ger dig den ultimata festupplevelsen.
		`,
		byobVenuesHeader2: `
		Varför vill man ha lokaler med egna mat- och alkoholalternativ?
		`,
		byobVenuesParagraph2: `
		
Att ha möjlighet att tillhandahålla och servera din egen mat och dryck
på en evenemangsplats kan du spara tid, pengar och besväret med
samordna med externa leverantörer. Det låter dig också
anpassa din meny och tillgodose dina gästers specifika smak
och preferenser.
		`,
	},
};

// Read the contents of the HTML file C:\Users\ENGJOE\neobash-site\index.html
fs.readFile("C:/Users/ENGJOE/neobash-site/blog.html", "utf8", (err, data) => {
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
	//didnt get this particular one to work, think its something with the id name
	$(`#${article_name_1}`).html(`
	LÄS HELA ARTIKELN
	<ion-icon
		class="read-more-icon"
		name="chevron-forward-outline"
	></ion-icon>
	`);

	// Iterate through the href keys of the seText object and alter each anchors href
	for (const key in seText["hrefs"]) {
		// Replace the href of the element with the specified ID
		$(`#${key}`).attr("href", seText["hrefs"][key]);
	}
	//didnt get this particular one to work, think its something with the id name
	$(`#${article_name_1}`).attr(
		"href",
		`
	/se/blogg/${article_name_1}.html
	`
	);

	$("#selectLanguage option[value='SE']").attr("selected", true);

	// Write the modified HTML to a new file
	fs.writeFile(
		"C:/Users/ENGJOE/neobash-site/se/blog.html",
		$.html(),
		"utf8",
		(err) => {
			if (err) {
				console.log(err);
				return;
			}
		}
	);
});
