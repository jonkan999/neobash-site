const fs = require("fs");

// The object containing the replacement text
const seText = {
	hrefs: {
		neobashTopLogo: "https://neobash.se/se/category-page.html",
		bashBasket: "../se/bash-basket.html",
	},
	innerTexts: {
		headerScroll: "Bash Basket - Dina samlade eventprodukter",
		requestSummary: "Sammanställning av din förfrågan",
		contactHeaderCheckout: "Hör av dig och planera ditt event med oss!",
		contactParagraphCheckout: `
		Fyll i dina kontaktuppgifter nedan. Vi kommer att få information om 
		din förfrågan och en av våra 
		planeringsexperter kommer att återkomma till dig så snart som möjligt.
		`,
		contactNameInputCheckout: `
			<label for="full-name">För och Efternamn</label>
			<input
				id="full-name"
				type="text"
				placeholder="John Smith"
				name="full-name"
				required
			/>`,
		contactMailInputCheckout: `
			<label for="email">Email</label>
			<input
				id="email"
				type="email"
				placeholder="jag@example.com"
				name="email"
				required
			/>`,
		contactInquiryInputCheckout: `
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
		contactSubmit: `
		submit
		<ion-icon
			class="button-icon"
			name="paper-plane-outline"
		></ion-icon>
		`,
	},
};

// Read the contents of the HTML file C:\Users\ENGJOE\neobash-site\index.html
fs.readFile(
	"C:/Users/ENGJOE/neobash-site/checkout.html",
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
			"C:/Users/ENGJOE/neobash-site/se/checkout.html",
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
