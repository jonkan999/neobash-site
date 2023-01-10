///////////////////////////////////////////////////////////
// Change language on user preference

// Create a function to change
// the hash value of the page
function changeLanguage() {
	const e = document.getElementById("selectLanguage");
	console.log(e.value);
	if (e.value == "EN") {
		location.hash = "en";
	} else if (e.value == "SE") {
		location.hash = "se";
	}
	console.log(window.location.hash);
	location.reload();
}

// Define the language reload anchors

const language = {
	en: {
		heroHeader: "imagine your dream event. <br> we make it happen.",
		navCategories: "Categories",
		navHowItWorks: "How it Works",
		navAbout: "About",
		navBlog: "Blog",
		navContact: "contact us",
		heroContact: "our products",
		heroEventbuilder: "event builder",
		categoriesHeader: "This is the neobash event builder",
		categoriesHeaderDescription:
			"Home to the best event suppliers in Stockholm. Choose a category to begin exploring.",
		categoriesVenue: "venues",
		categoriesWedding: "wedding",
		categoriesDrinks: "drink solutions",
		categoriesEntertainment: "entertainment",
		categoriesDecor: "decor",
		howHeader:
			"Let us take care of the planning and you just relax and enjoy your party",
		howHeadersub1: "Outline your event",
		howHeadersubContent1:
			"Think through how you want to outline your event. Consider your choice of venue,\
      atmosphere, food, drinks, entertainment.",
		howHeadersub2: "Browse through our vendors, or let us do it for you!",
		howHeadersubContent2:
			"Browse through our hundreds of hand selected partner vendor and\
    products, to find what best matches what you have imagined. Or,\
    us our automated event builder solution to match\
    vendors and products to you.",
		howHeadersub3: "Submit your choices",
		howHeadersubContent3:
			"Our team of experienced event planners will receive it on their\
    end.",
		howHeadersub4: "Relax and <strong>enjoy</strong> your party",
		howHeadersubContent4:
			"We will get back to you immediately at your prefered point of\
    contact. We go through the event and take care of the rest,\
    while you sit back and relax.",
		howContact: "contact us",
		contactHeader: "Get in touch and plan your event with us!",
		contactParagraph:
			"Fill out our form and one of our top of the line event handlers\
    will get back to you and tell you more about what we can offer\
    and guide you through the planning process.",
		contactNameInput: `
    <label for="full-name">Full name</label>
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
      placeholder="me@example.com"
      name="email"
      required
    />`,
		contactInquiryInput: `
    <label for="inquiry">What do you wanna know?</label>
    <textarea
      id="inquiry"
      type="inquiry"
      name="inquiry"
      placeholder="I just want to hear more about your awesome services!"
    ></textarea>
    <span class="call-us-text" id="contactCall"
    >Or just call us at: <br /><a
      class="call-us-number"
      href="tel:0765687878"
      >0765687878</a
    ></span
  >
    `,
	},
	se: {
		heroHeader: "tänk på ditt drömevent. <br> vi får det att ske.",
		navCategories: "Kategorier",
		navHowItWorks: "Hur det funkar",
		navAbout: "Om oss",
		navBlog: "Blogg",
		navContact: "kontakta oss",
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

// Check if a hash value exists in the URL
if (window.location.hash) {
	// Set the content of the webpage
	// depending on the hash value
	if (window.location.hash == "#en") {
		document.getElementById("selectLanguage").value = "EN";
		heroHeader.innerHTML = language.en.heroHeader;
		navCategories.innerHTML = language.en.navCategories;
		navHowItWorks.innerHTML = language.en.navHowItWorks;
		navAbout.innerHTML = language.en.navAbout;
		navBlog.innerHTML = language.en.navBlog;
		navContact.innerHTML = language.en.navContact;
		heroContact.innerHTML = language.en.heroContact;
		heroEventbuilder.innerHTML = language.en.heroEventbuilder;
		categoriesHeader.innerHTML = language.en.categoriesHeader;
		categoriesHeaderDescription.innerHTML =
			language.en.categoriesHeaderDescription;
		categoriesVenue.innerHTML = language.en.categoriesVenue;
		categoriesWedding.innerHTML = language.en.categoriesWedding;
		categoriesDrinks.innerHTML = language.en.categoriesDrinks;
		categoriesEntertainment.innerHTML = language.en.categoriesEntertainment;
		categoriesDecor.innerHTML = language.en.categoriesDecor;
		howHeader.innerHTML = language.en.howHeader;
		howHeadersub1.innerHTML = language.en.howHeadersub1;
		howHeadersubContent1.innerHTML = language.en.howHeadersubContent1;
		howHeadersub2.innerHTML = language.en.howHeadersub2;
		howHeadersubContent2.innerHTML = language.en.howHeadersubContent2;
		howHeadersub3.innerHTML = language.en.howHeadersub3;
		howHeadersubContent3.innerHTML = language.en.howHeadersubContent3;
		howHeadersub4.innerHTML = language.en.howHeadersub4;
		howHeadersubContent4.innerHTML = language.en.howHeadersubContent4;
		howContact.innerHTML = language.en.howContact;
		contactHeader.innerHTML = language.en.contactHeader;
		contactParagraph.innerHTML = language.en.contactParagraph;
		contactNameInput.innerHTML = language.en.contactNameInput;
		contactMailInput.innerHTML = language.en.contactMailInput;
		contactInquiryInput.innerHTML = language.en.contactInquiryInput;
	} else if (window.location.hash == "#se") {
		document.getElementById("selectLanguage").value = "SE";
		heroHeader.innerHTML = language.se.heroHeader;
		navCategories.innerHTML = language.se.navCategories;
		navHowItWorks.innerHTML = language.se.navHowItWorks;
		navAbout.innerHTML = language.se.navAbout;
		navBlog.innerHTML = language.se.navBlog;
		navContact.innerHTML = language.se.navContact;
		heroContact.innerHTML = language.se.heroContact;
		heroEventbuilder.innerHTML = language.se.heroEventbuilder;
		categoriesHeader.innerHTML = language.se.categoriesHeader;
		categoriesHeaderDescription.innerHTML =
			language.se.categoriesHeaderDescription;
		categoriesVenue.innerHTML = language.se.categoriesVenue;
		categoriesWedding.innerHTML = language.se.categoriesWedding;
		categoriesDrinks.innerHTML = language.se.categoriesDrinks;
		categoriesEntertainment.innerHTML = language.se.categoriesEntertainment;
		categoriesDecor.innerHTML = language.se.categoriesDecor;
		howHeader.innerHTML = language.se.howHeader;
		howHeadersub1.innerHTML = language.se.howHeadersub1;
		howHeadersubContent1.innerHTML = language.se.howHeadersubContent1;
		howHeadersub2.innerHTML = language.se.howHeadersub2;
		howHeadersubContent2.innerHTML = language.se.howHeadersubContent2;
		howHeadersub3.innerHTML = language.se.howHeadersub3;
		howHeadersubContent3.innerHTML = language.se.howHeadersubContent3;
		howHeadersub4.innerHTML = language.se.howHeadersub4;
		howHeadersubContent4.innerHTML = language.se.howHeadersubContent4;
		howContact.innerHTML = language.se.howContact;
		contactHeader.innerHTML = language.se.contactHeader;
		contactParagraph.innerHTML = language.se.contactParagraph;
		contactNameInput.innerHTML = language.se.contactNameInput;
		contactMailInput.innerHTML = language.se.contactMailInput;
		contactInquiryInput.innerHTML = language.se.contactInquiryInput;
	}
}
