const fs = require("fs");

cards = {
	venueSkyddsrummet: {
		id: "venueSkyddsrummet",
		name: "Skyddsrummet, Södermalm",
		articleName: "venue-skyddsrummet",
		category: "venue,wedding",
		image: `<img
				src="../img/product-images/skyddsrummet.jpg"
				alt="Image of Skyddsrummet"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 500 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 150 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span> Cool industrial atmosphere</span>`,
			fromPrice: "fr. <strong>30 000 kr SEK</strong> a day",
			description: `Skyddsrummet, with a central location on walking distance from
			Mariatorget, is ideal for basically any party. It's divided in to two
			main sections. The brick room, with seating for 150 guests, and the
			larger mountain room that is also fully equipped with light and sound.
			The cool industrial atmosphere make Skyddsrummet ideal for product
			release mingles, vernisages and just about any other party with an
			eclectic audience.`,
		},
		visibleSETags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 500 minglandes</span>`,
			usp2: `							
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 150 sittandes</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span> Cool industriell atmosfär</span>`,
			fromPrice: "fr. <strong>30 000 kr SEK</strong> dygn",
			description: `Skyddsrummet, med centralt läge på gångavstånd från
			Mariatorget, är perfekt för i princip alla fester. Lokalen är uppdelad i två
			huvudsektioner. Tegelrummet, med plats för 150 gäster, och det större
			Bergrummet som dessutom är fullt utrustat med ljud ljus till festen.
			Den coola industriella atmosfären gör Skyddsrummet idealiskt för release-fester
			i samband med produktsläpp, Personalfester, vernisager och precis vilken annan fest som helst med
			fokus på eklektiska gäster.`,
		},
		invisibleTags: {
			vendorLink: "https://skyddsrummet.se/",
			vibe1: "cool",
			vibe2: "city central location",
			vibe3: "industrial",
			vibe4: "late night",
			vibe5: "posh",
			maxPeople: "500",
			maxSeated: "150",
			price: "medium",
			catRank: "1",
		},
	},

	venueBorgila: {
		id: "venueBorgila",
		name: "Borgila, Södermalm",
		articleName: "venue-borgila",
		category: "venue,wedding",
		image: `<img
				src="../img/product-images/Borgila.jpg"
				alt="Image of Borgila"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 400 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 100 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="boat-outline"></ion-icon>
			<span> Party on a boat!</span>`,
			fromPrice: "fr. <strong>25 000 kr SEK</strong> a day",
			description: `Borgila is an event venue located in Södermalm, Stockholm, with stunning views of Stockholm City Hall. The venue features an upper deck with panoramic views of the city, perfect for receptions and cocktail hours, and a lower deck that can accommodate seated dinners for 100+ guests. The venue has a unique BYOB (Bring Your Own Bottle) policy, allowing you to bring in your own choice of drinks, which can help keep costs down for your event. This versatile and unique venue is suitable for a wide variety of events, from corporate gatherings and product launches to private celebrations and weddings.`,
		},
		visibleSETags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 400 minglandes</span>`,
			usp2: `							
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 100 sittandes</span>`,
			usp3: `
			<ion-icon class="product-icon" name="boat-outline"></ion-icon>
			<span> Båtparty!</span>`,
			fromPrice: "fr. <strong>25 000 kr SEK</strong> dygn",
			description: `Borgila är en evenemangslokal belägen på Södermalm, Stockholm, med fantastisk utsikt över Stockholms Stadshus. Lokalen har ett övre däck med panoramautsikt över staden, perfekt för mottagningar och cocktailmingel, och ett nedre däck som rymmer sittande middagar för 100+ gäster. Lokalen har en unik BYOB-policy (Bring Your Own Bottle), som gör att du kan ta in ditt eget val av drycker, vilket kan hjälpa till att hålla nere kostnaderna för ditt evenemang. Denna mångsidiga och unika lokal är lämplig för en mängd olika evenemang, från företagsevent och produktlanseringar till privata fester och bröllop.`,
		},
		invisibleTags: {
			vendorLink: "https://www.borgila.com/",
			vibe1: "cool",
			vibe2: "city central location",
			vibe3: "boat",
			vibe4: "late night",
			vibe5: "posh",
			maxPeople: "400",
			maxSeated: "100",
			price: "medium",
			catRank: "2",
		},
	},

	venueFafangan: {
		id: "venueFafangan",
		name: "Fåfängan, Södermalm",
		articleName: "venue-fåfängan",
		category: "venue,wedding",
		image: `
		<img
			src="../img/product-images/fafangan.jpg"
			alt="Image of Fåfängan"
			class="product-img"
		/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 700 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 180 seated</span>`,
			usp3: `
			<ion-icon
				class="product-icon"
				name="telescope-outline"
			></ion-icon>
			<span> Fantastic view</span>`,
			fromPrice: "fr. <strong>40 000 kr SEK</strong> a day",
			description: `Fåfängan is a unique event venue on Södermalm, Stockholm, offering fantastic views of the inner city, with a heated greenhouse, lookout point terrace and a restaurant with serving rights. Perfect for hosting events such as corporate gatherings or private celebrations.`,
		},
		visibleSETags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 700 minglandes</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 180 sittandes</span>`,
			usp3: `
			<ion-icon
				class="product-icon"
				name="telescope-outline"
			></ion-icon>
			<span> Fantastisk utsikt</span>`,
			fromPrice: "fr. <strong>40 000 kr SEK</strong> dygn",
			description: `Fåfängan är en unik eventlokal på Södermalm i Stockholm, med fantastisk utsikt över innerstaden. I anslutning till lokalen finns uppvärmt växthus, utsiktsplatsterrass och restaurang med fullständiga rättigheter. Perfekt för företagsevent och privata fester.`,
		},
		invisibleTags: {
			vendorLink: "https://fafangan.se/",
			vibe1: "view",
			vibe2: "city central location",
			vibe3: "posh",
			vibe4: "late night",
			vibe5: "high-end",
			byob: "0",
			byof: "0",
			maxPeople: "700",
			maxSeated: "180",
			price: "medium",
			catRank: "2",
		},
	},

	venueTolv: {
		id: "venueTolv",
		name: "Tolv Stockholm, Globenområdet",
		articleName: "venue-tolv",
		category: "venue",
		image: `
		<img
			src="../img/product-images/tolv.jpg"
			alt="Image of Tolv Stockholm"
			class="product-img"
		/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 3 000 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 500 seated</span>`,
			usp3: `
			<ion-icon
				class="product-icon"
				name="happy-outline"
			></ion-icon>
			<span> Unlimited fun and games</span>`,
			fromPrice: "fr. <strong>250 000 kr SEK</strong> a day",
			description: `Skyddsrummet, with a central location on walking distance from
			Mariatorget, is ideal for basically any party. It's divided in to two
			main sections. The brick room, with seating for 150 guests, and the
			larger mountain room that is also fully equipped with light and sound.
			The cool industrial atmosphere make Skyddsrummet ideal for product
			release mingles, vernisages and just about any other party with an
			eclectic audience.`,
		},
		visibleSETags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 3 000 minglandes</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 500 sittandes</span>`,
			usp3: `
			<ion-icon
				class="product-icon"
				name="happy-outline"
			></ion-icon>
			<span> Obegränsat spel och skoj</span>`,
			fromPrice: "fr. <strong>250 000 kr SEK</strong> dygn",
			description: `Skyddsrummet, med centralt läge på gångavstånd från
			Mariatorget, är perfekt för i princip alla fester. Lokalen är uppdelad i två
			huvudsektioner. Tegelrummet, med plats för 150 gäster, och det större
			Bergrummet som dessutom är fullt utrustat med ljud ljus till festen.
			Den coola industriella atmosfären gör Skyddsrummet idealiskt för release-fester
			i samband med produktsläpp, Personalfester, vernisager och precis vilken annan fest som helst med
			fokus på eklektiska gäster.`,
		},
		invisibleTags: {
			vendorLink: "https://tolv.se/",
			vibe1: "games",
			vibe2: "city central location",
			vibe3: "fun",
			vibe4: "large venue",
			vibe5: "high-end",
			maxPeople: "3000",
			maxSeated: "500",
			price: "high",
			catRank: "3",
		},
	},

	venueByblos: {
		id: "venueByblos",
		name: "Byblos, Vasastan",
		articleName: "venue-byblos",
		category: "venue",
		image: `
		<img
			src="../img/product-images/byblos.jpg"
			alt="Image of Byblos Restaurang"
			class="product-img"
		/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 150 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 20-80 seated</span>`,
			usp3: `
			<ion-icon
				class="product-icon"
				name="moon-outline"
			></ion-icon>
			<span> Authentic arabian night</span>`,
			fromPrice: "fr. <strong>15 000 kr SEK</strong> a day",
			description: `Skyddsrummet, with a central location on walking distance from
			Mariatorget, is ideal for basically any party. It's divided in to two
			main sections. The brick room, with seating for 150 guests, and the
			larger mountain room that is also fully equipped with light and sound.
			The cool industrial atmosphere make Skyddsrummet ideal for product
			release mingles, vernisages and just about any other party with an
			eclectic audience.`,
		},
		visibleSETags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 150 minglandes</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 20-80 sittandes</span>`,
			usp3: `
			<ion-icon
				class="product-icon"
				name="moon-outline"
			></ion-icon>
			<span> Autentisk arabisk afton</span>`,
			fromPrice: "fr. <strong>15 000 kr SEK</strong> dygn",
			description: `Skyddsrummet, med centralt läge på gångavstånd från
			Mariatorget, är perfekt för i princip alla fester. Lokalen är uppdelad i två
			huvudsektioner. Tegelrummet, med plats för 150 gäster, och det större
			Bergrummet som dessutom är fullt utrustat med ljud ljus till festen.
			Den coola industriella atmosfären gör Skyddsrummet idealiskt för release-fester
			i samband med produktsläpp, Personalfester, vernisager och precis vilken annan fest som helst med
			fokus på eklektiska gäster.`,
		},
		invisibleTags: {
			vendorLink: "https://byblos.se/",
			vibe1: "cultural",
			vibe2: "middle-eastern",
			vibe3: "dinner-venue",
			vibe4: "city central location",
			vibe5: "cozy",
			maxPeople: "150",
			maxSeated: "80",
			price: "low",
			catRank: "4",
		},
	},

	venueLumafabriken: {
		id: "venueLumafabriken",
		name: "Lumafabriken, Hammarby",
		articleName: "venue-umafabriken",
		category: "venue",
		image: `
		<img
			src="../img/product-images/lumafabriken.jpg"
			alt="Image of Lumafabriken Restaurang"
			class="product-img"
		/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 200 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 60-120 seated</span>`,
			usp3: `
			<ion-icon
				class="product-icon"
				name="telescope-outline"
			></ion-icon>
			<span> Rooftop</span>`,
			fromPrice: "fr. <strong>25 000 kr SEK</strong> a day",
			description: `Skyddsrummet, with a central location on walking distance from
			Mariatorget, is ideal for basically any party. It's divided in to two
			main sections. The brick room, with seating for 150 guests, and the
			larger mountain room that is also fully equipped with light and sound.
			The cool industrial atmosphere make Skyddsrummet ideal for product
			release mingles, vernisages and just about any other party with an
			eclectic audience.`,
		},
		visibleSETags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 200 minglandes</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 60-120 sittandes</span>`,
			usp3: `
			<ion-icon
				class="product-icon"
				name="telescope-outline"
			></ion-icon>
			<span> Rooftop</span>`,
			fromPrice: "fr. <strong>25 000 kr SEK</strong> dygn",
			description: `Skyddsrummet, med centralt läge på gångavstånd från
			Mariatorget, är perfekt för i princip alla fester. Lokalen är uppdelad i två
			huvudsektioner. Tegelrummet, med plats för 150 gäster, och det större
			Bergrummet som dessutom är fullt utrustat med ljud ljus till festen.
			Den coola industriella atmosfären gör Skyddsrummet idealiskt för release-fester
			i samband med produktsläpp, Personalfester, vernisager och precis vilken annan fest som helst med
			fokus på eklektiska gäster.`,
		},
		invisibleTags: {
			vendorLink: "https://luma.se/",
			vibe1: "view",
			vibe2: "waterfront",
			vibe3: "dinner-venue",
			vibe4: "city central location",
			vibe5: "cozy",
			maxPeople: "200",
			maxSeated: "120",
			price: "medium",
			catRank: "5",
		},
	},

	foodMackverket: {
		id: "foodMackverket",
		name: "Mackverket, Foodtruck",
		articleName: "food-mackverket",
		category: "food",
		image: `
		<img
			src="../img/product-images/mackverket.jpg"
			alt="Image of Skyddsrummet"
			class="product-img"
		/>`,
		visibleENTags: {
			usp1: `
			<ion-icon name="cash-outline"></ion-icon>
			<span> 120 - 150 sek per serving</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> Serves up to 500 ppl</span>`,
			usp3: `
			<ion-icon name="diamond-outline"></ion-icon>
			<span> Super tasty!</span>`,
			fromPrice: "fr. <strong>18 000 kr SEK</strong> a day",
			description: `Skyddsrummet, with a central location on walking distance from
			Mariatorget, is ideal for basically any party. It's divided in to two
			main sections. The brick room, with seating for 150 guests, and the
			larger mountain room that is also fully equipped with light and sound.
			The cool industrial atmosphere make Skyddsrummet ideal for product
			release mingles, vernisages and just about any other party with an
			eclectic audience.`,
		},
		visibleSETags: {
			usp1: `
			<ion-icon name="cash-outline"></ion-icon>
			<span> 120 - 150 sek per servering</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> Serveringskapacitet upp till 500 personer</span>`,
			usp3: `
			<ion-icon name="diamond-outline"></ion-icon>
			<span> Supersmarrigt!</span>`,
			fromPrice: "fr. <strong>18 000 kr SEK</strong> dygn",
			description: `Skyddsrummet, med centralt läge på gångavstånd från
			Mariatorget, är perfekt för i princip alla fester. Lokalen är uppdelad i två
			huvudsektioner. Tegelrummet, med plats för 150 gäster, och det större
			Bergrummet som dessutom är fullt utrustat med ljud ljus till festen.
			Den coola industriella atmosfären gör Skyddsrummet idealiskt för release-fester
			i samband med produktsläpp, Personalfester, vernisager och precis vilken annan fest som helst med
			fokus på eklektiska gäster.`,
		},
		invisibleTags: {
			vendorLink: "https://mackverket.se/",
			vibe1: "foodtruck",
			vibe2: "cool",
			vibe3: "mobile",
			vibe4: "tasty",
			vibe5: "cozy",
			maxPeople: "500",
			maxSeated: "30",
			price: "medium",
			catRank: "1",
		},
	},

	foodChurroskungarna: {
		id: "foodChurroskungarna",
		name: "Churros Kungarna, Foodtruck",
		articleName: "food-churroskungarna",
		category: "food",
		image: `
		<img
			src="../img/product-images/churroskungarna.jpg"
			alt="Image of Skyddsrummet"
			class="product-img"
		/>`,
		visibleENTags: {
			usp1: `
			<ion-icon name="cash-outline"></ion-icon>
			<span> 80 - 120 sek per serving</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> Serves up to 500 ppl</span>`,
			usp3: `
			<ion-icon name="diamond-outline"></ion-icon>
			<span> Super tasty!</span>`,
			fromPrice: "fr. <strong>15 000 kr SEK</strong> a day",
			description: `Skyddsrummet, with a central location on walking distance from
			Mariatorget, is ideal for basically any party. It's divided in to two
			main sections. The brick room, with seating for 150 guests, and the
			larger mountain room that is also fully equipped with light and sound.
			The cool industrial atmosphere make Skyddsrummet ideal for product
			release mingles, vernisages and just about any other party with an
			eclectic audience.`,
		},
		visibleSETags: {
			usp1: `
			<ion-icon name="cash-outline"></ion-icon>
			<span> 80 - 120 sek per servering</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> Serveringskapacitet upp till 500 personer</span>`,
			usp3: `
			<ion-icon name="diamond-outline"></ion-icon>
			<span> Supersmarrigt!</span>`,
			fromPrice: "fr. <strong>15 000 kr SEK</strong> dygn",
			description: `Skyddsrummet, med centralt läge på gångavstånd från
			Mariatorget, är perfekt för i princip alla fester. Lokalen är uppdelad i två
			huvudsektioner. Tegelrummet, med plats för 150 gäster, och det större
			Bergrummet som dessutom är fullt utrustat med ljud ljus till festen.
			Den coola industriella atmosfären gör Skyddsrummet idealiskt för release-fester
			i samband med produktsläpp, Personalfester, vernisager och precis vilken annan fest som helst med
			fokus på eklektiska gäster.`,
		},
		invisibleTags: {
			vendorLink: "https://churroskungarna.se/",
			vibe1: "foodtruck",
			vibe2: "dessert",
			vibe3: "churros",
			vibe4: "tasty",
			vibe5: "festival",
			maxPeople: "500",
			maxSeated: "30",
			price: "low",
			catRank: "3",
		},
	},

	decorMirrorballs: {
		id: "decorMirrorballs",
		name: "Neon Lights and Mirror Balls",
		articleName: "decor-mirrorballs",
		category: "decor",
		image: `
		<img
			src="../img/product-images/discoballs.jpg"
			alt="Image of Skyddsrummet"
			class="product-img decor-discoballs-img"
		/>`,
		visibleENTags: {
			usp1: `
			<ion-icon name="walk-outline"></ion-icon>
			<span> Dancing people guarantee</span>`,
			usp2: `
			<ion-icon name="diamond-outline"></ion-icon>
			<span> Amazing vibe!</span>`,
			usp3: `&nbsp;`,
			fromPrice: "fr. <strong>10 000 kr SEK</strong> a day",
			description: `Skyddsrummet, with a central location on walking distance from
			Mariatorget, is ideal for basically any party. It's divided in to two
			main sections. The brick room, with seating for 150 guests, and the
			larger mountain room that is also fully equipped with light and sound.
			The cool industrial atmosphere make Skyddsrummet ideal for product
			release mingles, vernisages and just about any other party with an
			eclectic audience.`,
		},
		visibleSETags: {
			usp1: `
			<ion-icon name="walk-outline"></ion-icon>
			<span> Bra party garanti</span>`,
			usp2: `
			<ion-icon name="diamond-outline"></ion-icon>
			<span> Amazing vibe!</span>`,
			usp3: `&nbsp;`,
			fromPrice: "fr. <strong>10 000 kr SEK</strong> dygn",
			description: `Skyddsrummet, with a central location on walking distance from
			Mariatorget, is ideal for basically any party. It's divided in to two
			main sections. The brick room, with seating for 150 guests, and the
			larger mountain room that is also fully equipped with light and sound.
			The cool industrial atmosphere make Skyddsrummet ideal for product
			release mingles, vernisages and just about any other party with an
			eclectic audience.`,
		},
		invisibleTags: {
			vendorLink: "https://neobash.se/",
			vibe1: "own-brand",
			vibe2: "cool",
			vibe3: "neon",
			vibe4: "party",
			vibe5: "indoor",
			maxPeople: "n/a",
			maxSeated: "n/a",
			price: "medium",
			catRank: "1",
		},
	},

	drinksLovnas: {
		id: "drinksLovnas",
		name: "Lövnäs Bryggeri, Mörkö",
		articleName: "drinks-lovnas",
		category: "drinks",
		image: `
		<img
			src="../img/product-images/lovnas.jpg"
			alt="Image of Skyddsrummet"
			class="product-img drinks-lovnas-img"
		/>`,
		visibleENTags: {
			usp1: `
			<ion-icon name="beer-outline"></ion-icon>
			<span> Locally sourced micro brewery</span>`,
			usp2: `
			<ion-icon name="color-palette-outline"></ion-icon>
			<span> Dizzying amount of flavors available</span>`,
			usp3: `
			<ion-icon name="diamond-outline"></ion-icon>
			<span> Available for offsite guided tastings</span>`,
			fromPrice: "fr. <strong>2 000 kr SEK</strong> a person",
			description: `Skyddsrummet, with a central location on walking distance from
			Mariatorget, is ideal for basically any party. It's divided in to two
			main sections. The brick room, with seating for 150 guests, and the
			larger mountain room that is also fully equipped with light and sound.
			The cool industrial atmosphere make Skyddsrummet ideal for product
			release mingles, vernisages and just about any other party with an
			eclectic audience.`,
		},
		visibleSETags: {
			usp1: `
			<ion-icon name="beer-outline"></ion-icon>
			<span> Lokalproducerande mikrobryggeri</span>`,
			usp2: `
			<ion-icon name="color-palette-outline"></ion-icon>
			<span> Massvis av smaker</span>`,
			usp3: `
			<ion-icon name="diamond-outline"></ion-icon>
			<span> Möjlighet att boka guidad ölprovning till din fest</span>`,
			fromPrice: "fr. <strong>2 000 kr SEK</strong> per person",
			description: `Skyddsrummet, with a central location on walking distance from
			Mariatorget, is ideal for basically any party. It's divided in to two
			main sections. The brick room, with seating for 150 guests, and the
			larger mountain room that is also fully equipped with light and sound.
			The cool industrial atmosphere make Skyddsrummet ideal for product
			release mingles, vernisages and just about any other party with an
			eclectic audience.`,
		},
		invisibleTags: {
			vendorLink: "https://lovnasbryggeri.se/",
			vibe1: "micro-brewery",
			vibe2: "local",
			vibe3: "sustainable",
			vibe4: "party",
			vibe5: "indoor",
			maxPeople: "n/a",
			maxSeated: "n/a",
			price: "medium",
			catRank: "1",
		},
	},
	venueSjovillan: {
		id: "venueSjovillan",
		name: "Sjövillan, Nyckelviken",
		articleName: "venue-sjovillan",
		category: "venue,wedding",
		image: `<img
				src="../img/product-images/sjovillan.jpg"
				alt="Image of Sjövillan"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 48 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 48 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span> scenic lake view</span>`,
			fromPrice: "fr. <strong>7 000 kr SEK</strong> a day",
			description: `

			A beautiful summer cottage on the shores of a tranquil lake, this event venue is the perfect setting for a romantic wedding, or other special occasions. The natural beauty of the lake and surrounding forest creates a serene and idyllic atmosphere, while the charming cottage offers a cozy and intimate space for your special day. With ample space for both indoor and outdoor celebrations, this venue is sure to make your wedding, or company get together, a truly unforgettable experience.
`,
		},
		visibleSETags: {
			usp1: ``,
			usp2: ``,
			usp3: ``,
			fromPrice: "",
			description: `.`,
		},
		invisibleTags: {
			vendorLink:
				"https://www.nyckelvikensherrgard.se/index.php/festvaning/boka-sjoevillan",
			vibe1: "beautiful",
			vibe2: "summer",
			vibe3: "cottage",
			vibe4: "lake",
			vibe5: "wedding",
			maxPeople: "48",
			maxSeated: "48",
			price: "light",
			catRank: "4",
		},
	},
	venueT5Community: {
		id: "venueT5Community",
		name: "T5 Community, Stockholm",
		articleName: "venue-T5Community",
		category: "venue,party",
		image: `<img
				src="../img/product-images/T5Community.jpg"
				alt="Image of T5Community"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 120 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 80 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span>Big open space</span>`,
			fromPrice: "fr. <strong>13 600 kr SEK</strong> a day",
			description: `

T5 Community is a dynamic coworking space in the heart of Stockholm city.
With its own entrance they offer you a big venue with tons of opportunities. Like a clean canvas you can create the perfect event from a Kick-Off to TED-talks.`,
		},
		visibleSETags: {
			usp1: ``,
			usp2: ``,
			usp3: ``,
			fromPrice: "",
			description: `.`,
		},
		invisibleTags: {
			vendorLink: "https://tomtebogatan5.se/event",
			vibe1: "Conference",
			vibe2: "Studio",
			vibe3: "Spacious",
			vibe4: "Showroom",
			vibe5: "pop-up",
			maxPeople: "120",
			maxSeated: "80",
			price: "medium",
			catRank: "3",
		},
	},
	venueMSAmbiance: {
		id: "venueMSAmbiance",
		name: "M/S Ambiance, Stockholm",
		articleName: "venue-MSAmbiance",
		category: "venue,party",
		image: `<img
				src="../img/product-images/MSAmbiance.jpg"
				alt="Image of Skyddsrummet"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 150 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 80 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span>Big open space</span>`,
			fromPrice: "fr. <strong>6 100 kr SEK</strong> p hour",
			description: `

The perfect party boat with a large sun deck from which you can enjoy the amazing view. Relax in lounge furniture with a cold drink, while you get to experience Stockholm's archipelago from the front row.

The boat is a perfect platform for all kinds of parties. You have exclusive rights to the boat with both bar and food, while you are only a stone's throw from the nightlife of the old town when we are back at the dock.
`,
		},
		visibleSETags: {
			usp1: ``,
			usp2: ``,
			usp3: ``,
			fromPrice: "",
			description: `.`,
		},
		invisibleTags: {
			vendorLink: "https://strandrederi.com/vara-batar/",
			vibe1: "Summer",
			vibe2: "BBQ",
			vibe3: "Midsummer",
			vibe4: "wedding",
			vibe5: "party",
			maxPeople: "150",
			maxSeated: "80",
			price: "medium",
			catRank: "2",
		},
	},
	venueBergrummet: {
		id: "venueBergrummet",
		name: "Bergrummet, Skeppsholmen",
		articleName: "venue-Bergrummet",
		category: "venue,party",
		image: `<img
				src="../img/product-images/Bergrummet.jpg"
				alt="Image of Bergrummet"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 250 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 200 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span>Big open space</span>`,
			fromPrice: "fr. <strong>50 000 kr SEK</strong> a day",
			description: `

Directly after the bridge to Skeppsholmen is the entrance to the amazing cave, which offers an unique party environment.
`,
		},
		visibleSETags: {
			usp1: ``,
			usp2: ``,
			usp3: ``,
			fromPrice: "",
			description: `.`,
		},
		invisibleTags: {
			vendorLink: "https://www.skeppsholmsgruppen.se/en/bergrummet",
			vibe1: "Conference",
			vibe2: "Wedding",
			vibe3: "Kick-Off",
			vibe4: "Party",
			vibe5: "Concert",
			maxPeople: "250",
			maxSeated: "200",
			price: "high",
			catRank: "2",
		},
	},
	venueEricEricsonhallen: {
		id: "venueEricEricsonhallen",
		name: "Eric Ericsonhallen, Skeppsholmen",
		articleName: "venue-EricEricsonhallen",
		category: "venue,party",
		image: `<img
				src="../img/product-images/EricEricsonhallen.jpg"
				alt="Image of Skyddsrummet"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 500 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 430 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span>Big open space</span>`,
			fromPrice: "fr. <strong>50 000 kr SEK</strong> a day",
			description: `

Eric Ericsonhallen has perhaps central Stockholm's most attractive location, and its powerful design and stately interior give the event that little extra that is required to make a good event perfect.
`,
		},
		visibleSETags: {
			usp1: ``,
			usp2: ``,
			usp3: ``,
			fromPrice: "",
			description: `.`,
		},
		invisibleTags: {
			vendorLink: "https://ericericsonhallen.se/boka/event/",
			vibe1: "Conference",
			vibe2: "Wedding",
			vibe3: "Kick-Off",
			vibe4: "Party",
			vibe5: "Concert",
			maxPeople: "500",
			maxSeated: "430",
			price: "high",
			catRank: "4",
		},
	},
	venueTheBeach: {
		id: "venueTheBeach",
		name: "The beach, Huddinge",
		articleName: "venue-TheBeach",
		category: "venue,party",
		image: `<img
				src="../img/product-images/TheBeach.jpg"
				alt="Image of Skyddsrummet"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 650 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 500 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span>Big open space</span>`,
			fromPrice: "fr. <strong>50 000 kr SEK</strong> a day",
			description: `

a large beach for your event. Have a beach party, or a kick off with obstacle courses or host a volleyball tournament
`,
		},
		visibleSETags: {
			usp1: ``,
			usp2: ``,
			usp3: ``,
			fromPrice: "",
			description: `.`,
		},
		invisibleTags: {
			vendorLink: "https://www.thebeach.se/",
			vibe1: "Beach party",
			vibe2: "Beach Volleyball",
			vibe3: "Kick-Off",
			vibe4: "Party",
			vibe5: "Concert",
			maxPeople: "500",
			maxSeated: "430",
			price: "medium",
			catRank: "4",
		},
	},
	venueGenerator: {
		id: "venueGenerator",
		name: "Generator, Stockholm",
		articleName: "venue-Generator",
		category: "venue,party",
		image: `<img
				src="../img/product-images/Generator.jpg"
				alt="Image of Skyddsrummet"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 150 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 70 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span>Big open space</span>`,
			fromPrice: "fr. <strong>13 000 kr SEK</strong> a day",
			description: `

In the heart of Stockholm is Generator, a high end hostel. They have the perfect venue for your event. 
`,
		},
		visibleSETags: {
			usp1: ``,
			usp2: ``,
			usp3: ``,
			fromPrice: "",
			description: `.`,
		},
		invisibleTags: {
			vendorLink: "https://staygenerator.com/meetings-and-events?lang=sv-SE",
			vibe1: "Kick-Off",
			vibe2: "Conference",
			vibe3: "Birthday party",
			vibe4: "Party",
			vibe5: "Concert",
			maxPeople: "150",
			maxSeated: "70",
			price: "light",
			catRank: "2",
		},
	},
	venueCedergrenskaTornetRiddarsalen: {
		id: "venueCedergrenskaTornetRiddarsalen",
		name: "Cedergrenska Tornet/Riddarsalen, Stocksund",
		articleName: "venue-CedergrenskaTornetRiddarsalen",
		category: "venue,party",
		image: `<img
				src="../img/product-images/CedergrenskaTornetRiddarsalen.jpg"
				alt="Image of Cedergrenska Tornet/Riddarsalen"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 170 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 120 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span>Big open space</span>`,
			fromPrice: "fr. <strong>9 000 kr SEK</strong> a day",
			description: `

The red brick-building is used today as a banquet hall and conference room for both large and small groups. With its special layout, Cedergrenska Tornet is a perfect building for a different conference or party. During the same occasion, it is possible to use several salons. 
With a beautiful fireplace, high ceilings and access to the roof terrace, the party/conference will be an unforgettable experience.
`,
		},
		visibleSETags: {
			usp1: ``,
			usp2: ``,
			usp3: ``,
			fromPrice: "",
			description: `.`,
		},
		invisibleTags: {
			vendorLink: "https://cedergrenskatornet.se/vara-lokaler/",
			vibe1: "Kick-Off",
			vibe2: "Conference",
			vibe3: "Wedding",
			vibe4: "Party",
			vibe5: "Concert",
			maxPeople: "170",
			maxSeated: "120",
			price: "light",
			catRank: "3",
		},
	},
	venueWestmanskaPalatsetGlassalen: {
		id: "venueWestmanskaPalatsetGlassalen",
		name: "Westmanska Palatset, Stocksund",
		articleName: "venue-WestmanskaPalatsetGlassalen",
		category: "venue,party",
		image: `<img
				src="../img/product-images/WestmanskaPalatsetGlassalen.jpg"
				alt="Image of Westmanska Palatset"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 200 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 80 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span>Big open space</span>`,
			fromPrice: "fr. <strong>15 000 kr SEK</strong> a day",
			description: `

Light and airy premises with panoramic windows facing our lovely courtyard.

Westmanska Palatset offers unique event spaces in an attractive location. Whether you want to organize an exclusive dinner, a mingling party, a wedding or a company party, we have the party rooms for you.

`,
		},
		visibleSETags: {
			usp1: ``,
			usp2: ``,
			usp3: ``,
			fromPrice: "",
			description: `.`,
		},
		invisibleTags: {
			vendorLink: "https://cedergrenskatornet.se/vara-lokaler/",
			vibe1: "Kick-Off",
			vibe2: "Conference",
			vibe3: "Wedding",
			vibe4: "Party",
			vibe5: "Big spaces",
			maxPeople: "200",
			maxSeated: "80",
			price: "medium",
			catRank: "2",
		},
	},
	venueSjofartshusetNeptunisalen: {
		id: "venueSjofartshusetNeptunisalen",
		name: "Sjöfartshuset/Neptunisalen, Stockholm",
		articleName: "venue-SjofartshusetNeptunisalen",
		category: "venue,party",
		image: `<img
				src="../img/product-images/SjofartshusetNeptunisalen.jpg"
				alt="Image of Sjöfartshuset/Neptunisalen"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 220 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 146 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span>Big open space</span>`,
			fromPrice: "fr. <strong>6 246 kr SEK</strong> a day",
			description: `

Come and celebrate life's all celebrations at Sjöfartshuset, dining rooms and salons from rustic attic to elegant Gustavian style. Both floors offer a magnificent view towards the water.
From Skeppsbron 10, people have heard the laughter of the party since the 17th century.


`,
		},
		visibleSETags: {
			usp1: ``,
			usp2: ``,
			usp3: ``,
			fromPrice: "",
			description: `.`,
		},
		invisibleTags: {
			vendorLink: "https://www.sjofartshuset.se/festvaning/",
			vibe1: "Kick-Off",
			vibe2: "Conference",
			vibe3: "Wedding",
			vibe4: "Party",
			vibe5: "Big spaces",
			maxPeople: "220",
			maxSeated: "146",
			price: "light",
			catRank: "3",
		},
	},
	venueJunibackensFestvaning: {
		id: "venueJunibackensFestvaning",
		name: "Junibackens Festvåning, Stockholm",
		articleName: "venue-JunibackensFestvaning",
		category: "venue,party",
		image: `<img
				src="../img/product-images/JunibackensFestvaning.jpg"
				alt="Image of Junibackens Festvåning"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 300 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 150 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span>Big open space</span>`,
			fromPrice: "fr. <strong>15 000 kr SEK</strong> a day",
			description: `

Invite friends, family or colleagues to a party with the best view in town! Step into a magical fairytale world out of the ordinary where only the imagination sets the limits! Junibacken accepts groups of at least 50 adults.


`,
		},
		visibleSETags: {
			usp1: ``,
			usp2: ``,
			usp3: ``,
			fromPrice: "",
			description: `.`,
		},
		invisibleTags: {
			vendorLink:
				"https://www.junibacken.se/festvaning/?gclid=CjwKCAiAoL6eBhA3EiwAXDom5lNkjfMTBCIH92lIWBx9TvueJ0xBUpyMGoeTtpeMw7FYDCl5H7JDRBoCDKkQAvD_BwE",
			vibe1: "Kick-Off",
			vibe2: "Conference",
			vibe3: "Wedding",
			vibe4: "Party",
			vibe5: "Big spaces",
			maxPeople: "300",
			maxSeated: "150",
			price: "medium",
			catRank: "2",
		},
	},
	venueLangholmenFestvaning: {
		id: "venueLangholmenFestvaning",
		name: "Långholmen Festvåning, Stockholm",
		articleName: "venue-LångholmenFestvaning",
		category: "venue,party",
		image: `<img
				src="../img/product-images/LangholmenFestvaning.jpg"
				alt="Image of Långholmen Festvåning"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 100 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 90 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span>Big open space</span>`,
			fromPrice: "fr. <strong>7 500 kr SEK</strong> a day",
			description: `

If you are looking for a beautiful and traditional party venue in a unique and peaceful place in Stockholm, you have found the right place. Långholmen's party floor is private and castle-like!


`,
		},
		visibleSETags: {
			usp1: ``,
			usp2: ``,
			usp3: ``,
			fromPrice: "",
			description: `.`,
		},
		invisibleTags: {
			vendorLink: "https://langholmen.com/restaurang/festvaning/",
			vibe1: "Kick-Off",
			vibe2: "Conference",
			vibe3: "Wedding",
			vibe4: "Party",
			vibe5: "Big spaces",
			maxPeople: "100",
			maxSeated: "90",
			price: "light",
			catRank: "2",
		},
	},
	venueH62: {
		id: "venueH62",
		name: "H62 / Festvåning, Stockholm",
		articleName: "venue-H62",
		category: "venue,party",
		image: `<img
				src="../img/product-images/H62.jpg"
				alt="Image of H62 / Festvåning"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 175 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 70 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span>Big open space</span>`,
			fromPrice: "fr. <strong>6 000 kr SEK</strong> a day",
			description: `

H62 is located in a cosy, whitestone cellar vault, dating back to the 19th century. Two larger halls are connected by nice corridors and smaller rooms with tables and chairs.


`,
		},
		visibleSETags: {
			usp1: ``,
			usp2: ``,
			usp3: ``,
			fromPrice: "",
			description: `.`,
		},
		invisibleTags: {
			vendorLink: "https://h62.se/packages",
			vibe1: "Kick-Off",
			vibe2: "Conference",
			vibe3: "Wedding",
			vibe4: "Party",
			vibe5: "Big spaces",
			maxPeople: "175",
			maxSeated: "70",
			price: "light",
			catRank: "3",
		},
	},
	venue7APosthuset: {
		id: "venue7APosthuset",
		name: "7APosthuset, Stockholm",
		articleName: "venue-7APosthuset",
		category: "venue,party",
		image: `<img
				src="../img/product-images/7APosthuset.jpg"
				alt="Image of 7APosthuset"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 300 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 168 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span>Big open space</span>`,
			fromPrice: "fr. <strong>49 900 kr SEK</strong> a day",
			description: `

Magnificent events in historic surroundings.

The central location and premises that offer both character and capacity make 7A Posthuset an excellent choice for your next event. The building's two atriums offer a spectacular ceiling height, brick-clad walls and a generous amount of light through the glass roof for all kinds of dinners and events.



`,
		},
		visibleSETags: {
			usp1: ``,
			usp2: ``,
			usp3: ``,
			fromPrice: "",
			description: `.`,
		},
		invisibleTags: {
			vendorLink: "https://7a.se/anlaggningar/7a-posthuset/",
			vibe1: "Kick-Off",
			vibe2: "Conference",
			vibe3: "Wedding",
			vibe4: "Party",
			vibe5: "Big spaces",
			maxPeople: "300",
			maxSeated: "168",
			price: "high",
			catRank: "2",
		},
	},
	venueMalarhojdensDansskolaFestvaning: {
		id: "venueMalarhojdensDansskolaFestvaning",
		name: "Mälarhöjdens Dansskola & Festvåning, Stockholm",
		articleName: "venue-MalarhojdensDansskolaFestvaning",
		category: "venue,party",
		image: `<img
				src="../img/product-images/MalarhojdensDansskolaFestvaning.jpg"
				alt="Image of Mälarhöjdens Dansskola & Festvåning"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon class="product-icon" name="people-outline"></ion-icon>
			<span> 100 mingling</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> 100 seated</span>`,
			usp3: `
			<ion-icon class="product-icon" name="flash-outline"></ion-icon>
			<span>Big open space</span>`,
			fromPrice: "fr. <strong>3 000 kr SEK</strong> a day",
			description: `

A unique venue on two levels located just a stone's throw from the beautiful Mälaren shore with nature, piers and marinas all around. High ceilings make the venue unique and the acoustics perfect for singing or other performances during the dinner or wedding party.



`,
		},
		visibleSETags: {
			usp1: ``,
			usp2: ``,
			usp3: ``,
			fromPrice: "",
			description: `.`,
		},
		invisibleTags: {
			vendorLink:
				"https://malarhojdensdansskola.se/hyr-lokalen/priser-44050687",
			vibe1: "Kick-Off",
			vibe2: "Conference",
			vibe3: "Wedding",
			vibe4: "Party",
			vibe5: "Big spaces",
			maxPeople: "100",
			maxSeated: "100",
			price: "light",
			catRank: "4",
		},
	},
	foodVeganoCatering: {
		id: "foodVeganoCatering",
		name: "Vegano Catering, Stockholm",
		articleName: "food-VeganoCatering",
		category: "food,wedding",
		image: `<img
				src="../img/product-images/VeganoCatering.jpg"
				alt="Image of Vegano Catering food"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon name="cash-outline"></ion-icon>
			<span> 3-course from 270 sek per person</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> Suitible for up to 200 ppl</span>`,
			usp3: `
			<ion-icon name="leaf-outline"></ion-icon>
			<span> Vegan!</span>`,
			fromPrice: "fr. <strong>270 kr SEK</strong> per guest",
			description: `
			At Vegano, they believe that food is an essential part of any successful event. That's why they are dedicated to delivering truly delicious and innovative cuisine, using only the freshest, locally-sourced ingredients. Their experienced chefs have a passion for the vegan lifestyle and a deep understanding of how to create amazing dishes without the use of animal products. With a commitment to simple, sustainable and locally-sourced ingredients, you can trust that every bite you take will be absolutely wonderful.
			`,
		},
		visibleSETags: {
			usp1: `
			<ion-icon name="cash-outline"></ion-icon>
			<span> Trerätters från 270 sek per person</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> Lämpligt för upp till 200 gäster</span>`,
			usp3: `
			<ion-icon name="leaf-outline"></ion-icon>
			<span> Veganskt!</span>`,
			fromPrice: "fr. <strong>270 kr SEK</strong> per gäst",
			description: `Vegano är passionerade över att mat är en viktig del av alla framgångsrika event. Det är därför de är dedikerade till att leverera verkligt utsökt och innovativ mat, med endast de färskaste, lokalt framställda ingredienserna. Deras erfarna kockar har en passion för den veganska livsstilen och en djup förståelse för hur man skapar fantastiska rätter utan användning av animaliska produkter. Med ett engagemang för enkla, hållbara och närproducerade råvaror kan du lita på att varje tugga du tar kommer att bli helt underbar.`,
		},
		invisibleTags: {
			vendorLink: "https://veganocatering.se/",
			vibe1: "vegan",
			vibe2: "colorful",
			vibe3: "cool",
			vibe4: "tasty",
			vibe5: "cozy",
			maxPeople: "200",
			maxSeated: "30",
			price: "medium",
			catRank: "2",
		},
	},
	foodNoBones: {
		id: "foodNoBones",
		name: "No Bones, Bagarmossen",
		articleName: "food-NoBones",
		category: "food,wedding",
		image: `<img
				src="../img/product-images/NoBones.jpg"
				alt="Image of No bones' boxed food"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon name="cash-outline"></ion-icon>
			<span> Buffe from 159 sek per person</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> Suitible for 10 to 100+ ppl</span>`,
			usp3: `
			<ion-icon name="leaf-outline"></ion-icon>
			<span> Plant based!</span>`,
			fromPrice: "fr. <strong>159 kr SEK</strong> per guest",
			description: `
			No Bones Catering is a family-owned business that brings a passion for plant-based cuisine and a wealth of experience to their catering services. The company produces its own proteins, ensuring the freshest and highest quality ingredients in every dish. The chefs at No Bones Catering are experts in classic hot dishes, and all meals are served in eco-friendly food boxes that are kind to the environment. With their dedication to plant-based cooking and their commitment to sustainability, No Bones Catering provides a truly unforgettable dining experience for their clients.
			`,
		},
		visibleSETags: {
			usp1: `
			<ion-icon name="cash-outline"></ion-icon>
			<span> Buffeer från 159 sek per person</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> Lämpligt för 10 till 100+ gäster</span>`,
			usp3: `
			<ion-icon name="leaf-outline"></ion-icon>
			<span> Växtbaserat!</span>`,
			fromPrice: "fr. <strong>159 kr SEK</strong> per gäst",
			description: `
			No Bones Catering är ett familjeägt företag som tillför en passion för växtbaserad mat och en mängd erfarenhet till sina cateringtjänster. Företaget producerar sina egna proteiner, vilket säkerställer de färskaste ingredienserna av högsta kvalitet i varje maträtt. Kockarna på No Bones Catering är experter på klassiska varma rätter och alla måltider serveras i miljövänliga matlådor som är snälla mot miljön. Med sitt engagemang för växtbaserad matlagning och sitt engagemang för hållbarhet ger No Bones Catering en verkligt oförglömlig matupplevelse för sina kunder.
			`,
		},
		invisibleTags: {
			vendorLink: "https://www.nobones.se/",
			vibe1: "vegan",
			vibe2: "colorful",
			vibe3: "cool",
			vibe4: "tasty",
			vibe5: "cozy",
			maxPeople: "200",
			maxSeated: "30",
			price: "budget",
			catRank: "2",
		},
	},
	foodLilaLotus: {
		id: "foodLilaLotus",
		name: "Lila Lotus, Vasastan",
		articleName: "food-LilaLotus",
		category: "food,wedding",
		image: `<img
				src="../img/product-images/lilalotus.jpg"
				alt="Image of Lila Lotus food"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon name="cash-outline"></ion-icon>
			<span> Dishes from around 220 sek per person</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> Suitible for up to 150 ppl</span>`,
			usp3: `
			<ion-icon name="leaf-outline"></ion-icon>
			<span> Vegan and gluten free!</span>`,
			fromPrice: "fr. <strong>200 kr SEK</strong> per guest",
			description: `
			Lila Lotus Catering is dedicated to providing delicious and healthy vegetarian cuisine, made with only the finest organic ingredients. Their focus is on raw food, and every dish they offer is both vegan and gluten-free, making it a great choice for those with dietary restrictions. If you're interested in booking catering with Lila Lotus, simply fill out the form on their website and they will be happy to assist you. With their commitment to quality and wellness, Lila Lotus Catering is the perfect choice for your next event.
			`,
		},
		visibleSETags: {
			usp1: `
			<ion-icon name="cash-outline"></ion-icon>
			<span> Rätter för cirka 220 sek per person</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> Lämpligt för upp till 150 gäster</span>`,
			usp3: `
			<ion-icon name="leaf-outline"></ion-icon>
			<span> Växtbaserat!</span>`,
			fromPrice: "fr. <strong>200 kr SEK</strong> per gäst",
			description: `
			
Lila Lotus Catering är dedikerad till att tillhandahålla läckra och hälsosamma vegetariska rätter, gjorda av endast de finaste ekologiska ingredienserna. Deras fokus ligger på raw food, och varje maträtt de erbjuder är både vegansk och glutenfri, vilket gör det till ett utmärkt val för dem med kostpreferenser. Med sitt engagemang för kvalitet och välbefinnande är Lila Lotus Catering det perfekta valet för ditt nästa event.
			`,
		},
		invisibleTags: {
			vendorLink: "https://lilalotus.se/",
			vibe1: "vegan",
			vibe2: "glutenfree",
			vibe3: "healthy",
			vibe4: "posh",
			vibe5: "cozy",
			maxPeople: "150",
			maxSeated: "30",
			price: "medium",
			catRank: "2",
		},
	},
	foodBlissCafe: {
		id: "foodBlissCafe",
		name: "Bliss Cafe, Södermalm",
		articleName: "food-BlissCafe",
		category: "food,wedding",
		image: `<img
				src="../img/product-images/BlissCafe.jpg"
				alt="Image of Bliss cafe Buffee"
				class="product-img"
			/>`,
		visibleENTags: {
			usp1: `
			<ion-icon name="cash-outline"></ion-icon>
			<span> Dishes from around 130 sek per person</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> Suitible for up 10 to 100+ ppl</span>`,
			usp3: `
			<ion-icon name="leaf-outline"></ion-icon>
			<span> Rawfood and vegan!</span>`,
			fromPrice: "fr. <strong>200 kr SEK</strong> per guest",
			description: `
			Bliss Cafe is a unique dining experience located in Stockholm. As the city's first raw vegan cafe and restaurant, everything on the menu is 100% raw food. The team at Bliss Cafe believe that consuming fresh and unprocessed food leads to better health, increased energy levels, and greater overall vitality. By not heating their dishes above 42 degrees, they ensure that all of the nutrients and life energy of the ingredients are preserved. If you're looking for a healthy and delicious dining option, Bliss Cafe is a must-visit.
			`,
		},
		visibleSETags: {
			usp1: `
			<ion-icon name="cash-outline"></ion-icon>
			<span> Rätter för cirka 130 sek per person</span>`,
			usp2: `
			<ion-icon
				class="product-icon"
				name="restaurant-outline"
			></ion-icon>
			<span> Lämpligt för 10 to 100+ gäster</span>`,
			usp3: `
			<ion-icon name="leaf-outline"></ion-icon>
			<span> Rawfood och veganskt!</span>`,
			fromPrice: "fr. <strong>130 kr SEK</strong> per gäst",
			description: `
			Bliss Cafe är en unik matupplevelse belägen i Stockholm. Som stadens första raw veganska café och restaurang är allt på menyn 100% raw food. Teamet på Bliss Cafe tror att konsumtion av färsk och obearbetad mat leder till bättre hälsa, ökade energinivåer och större övergripande vitalitet. Genom att inte värma upp sina rätter över 42 grader säkerställer de att alla näringsämnen och livsenergi från ingredienserna bevaras. Om du letar efter ett hälsosamt och utsökt matalternativ till festen är Bliss Cafe en no-brainer.
			`,
		},
		invisibleTags: {
			vendorLink: "https://blisscafe.se/",
			vibe1: "vegan",
			vibe2: "rawfood",
			vibe3: "healthy",
			vibe4: "posh",
			vibe5: "cozy",
			maxPeople: "100",
			maxSeated: "30",
			price: "medium",
			catRank: "1",
		},
	},
};

let sortedCards = {};
let cardIds = Object.keys(cards);
console.log(cards[Object.keys(cards)[0]]);
//sort according to rank
cardIds.sort((a, b) => {
	return cards[a].invisibleTags.catRank - cards[b].invisibleTags.catRank;
});

//reinsert sorted cards
for (let id of cardIds) {
	sortedCards[id] = cards[id];
}
console.log(sortedCards[Object.keys(cards)[0]]);
const json = JSON.stringify(sortedCards);

fs.writeFile(
	"C:/Users/ENGJOE/neobash-site/js/category-card.json",
	json,
	(err) => {
		if (err) throw err;
		console.log("The file has been saved!");
	}
);
