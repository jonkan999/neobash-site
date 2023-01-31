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
		selectLanguage: `
  <option value="EN">EN</option>
  <option value="SE" selected>SE</option>
  `,
		heroHeader: "tänk på ditt drömevent. <br> vi får det att ske.",
		navCategories: "Kategorier",
		navHowItWorks: "Hur det funkar",
		navAbout: "Om oss",
		navBlog: "Blogg",
		navContact: "Kontakta oss",
		heroContact: "våra produkter",
		heroEventbuilder: "bygg ditt event",
		categoriesHeader: "This is the neobash event builder",
		categoriesHeaderDescription:
			"Här har vi samlat Stockholms bästa event-leverantörer. Välj en kategori och börja utforska deras lösningar.",
		categoriesVenue: "lokaler",
		categoriesWedding: "bröllop",
		categoriesDrinks: "dryckeslösningar",
		categoriesEntertainment: "underhållning",
		categoriesDecor: "dekor",
		howHeader:
			"Let us take care of the planning and you just relax and enjoy your party",
		howHeadersub1: "Beskriv ditt event",
		howHeadersubContent1:
			"Fundera igenom hur du vill utforma ditt evenemang. Överväg ditt val av plats,\
      atmosfär, mat, dryck, underhållning.",
		howHeadersub2:
			"Gå igenom våra leverantörers erbjudanden, eller låt oss göra det åt dig!",
		howHeadersubContent2:
			"Utforska våra hundratals handutvalda partnerleverantörer och\
        produkter, för att hitta det som bäst passar det du har föreställt dig. Eller,\
        eller gå igenom vår automatiserade eventbyggare och matcha\
        leverantörer och produkter till ditt event.",
		howHeadersub3: "Skicka in dina val",
		howHeadersubContent3:
			"Vårt team av erfarna eventplanerare kommer att få det och\
        igång med koordineringen.",
		howHeadersub4: "Slappna av och <strong>njut av</strong> din fest",
		howHeadersubContent4:
			"Vi återkommer snarast till dig via mail eller telefon,\
        som du föredrar. Vi går igenom eventet och tar hand om allt,\
        medan du kan luta dig tillbaka och slappna av.",
		howContact: "kontakta oss",
		contactHeader: "Hör av dig och planera ditt event med oss!",
		contactParagraph:
			"Fyll i vårt formulär och någon av våra fantastiska eventhandläggare\
      kommer återkomma till dig och berättar mer om vad vi kan erbjuda,\
      samt guidar dig genom planeringsprocessen.",
		contactNameInput: `
    <label for="full-name">För och Efternamn</label>
    <input
      id="full-name"
      type="text"
      placeholder="John Smith"
      name="full-name"
      required
    />`,
		contactMailInput: `
    <label for="email">Email</label>
    <input
      id="email"
      type="email"
      placeholder="jag@example.com"
      name="email"
      required
    />`,
		contactInquiryInput: `
    <label for="inquiry">Vad kan vi hjälpa dig med?</label>
    <textarea
      id="inquiry"
      type="inquiry"
      name="inquiry"
      placeholder="Jag vill bara veta mer om era grymma tjänster!"
    ></textarea>
    <span class="call-us-text" id="contactCall"
    >Eller ring oss bara på: <br /><a
      class="call-us-number"
      href="tel:0765687878"
      >0765687878</a
    ></span
  >
    `,
	},
};

// Read the contents of the HTML file C:\Users\ENGJOE\neobash-site\index.html
fs.readFile("C:/Users/ENGJOE/neobash-site/index.html", "utf8", (err, data) => {
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

	$("#selectLanguage option[value='SE']").attr("selected", true);

	// Write the modified HTML to a new file
	fs.writeFile(
		"C:/Users/ENGJOE/neobash-site/se.html",
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
