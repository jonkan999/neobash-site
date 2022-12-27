///////////////////////////////////////////////////////////
// enlarge clicked product card and blur background

/* const venueSkyddsrummet = $("#venueSkyddsrummet").load(
  "product-cards/venue-skyddsrummet-clicked.html"
); */
import cards from "./category-card.js";
import { generateProductHTMLLarge } from "/js/generateProductHTMLLarge.js";
import { changeCategory } from "/js/changeCategory.js";
import { addToBasket } from "/js/addToBasket.js";

document.addEventListener("click", async function (event) {
	const clickedElement = event.target.closest(".product-card");
	const clickedCategory = event.target.closest(".category-list-element");
	const shadowEl = document.querySelector(".full-page-shadow");
	const addBtn = document.querySelector(".add-button");

	if (addBtn) {
		addToBasket();
	}

	//Do nothing if we click vendor link inside enlarged product
	if (event.target.classList[0] === "vendor-link") {
		return;
	}

	//Do nothing if we click vendor link inside enlarged product
	if (clickedCategory) {
		changeCategory(clickedCategory);
	}

	//Enlarge or remove large product
	// If user clicks inside the element, enlarge and shadow
	if (clickedElement && shadowEl.classList[1] != "active-shadow") {
		shadowEl.classList.toggle("active-shadow");
		/* const src =
      "product-cards/" + clickedElement.getAttribute("name") + "-clicked.html";
    const resp = await fetch(src);
    const venueSkyddsrummet = await resp.text(); */
		if (window.location.hash) {
			// Set the content of the webpage
			// depending on the hash value
			if (window.location.hash == "#se") {
				clickedElement.parentElement.innerHTML += generateProductHTMLLarge(
					cards[clickedElement.getAttribute("id")],
					"se"
				);
			} else {
				clickedElement.parentElement.innerHTML += generateProductHTMLLarge(
					cards[clickedElement.getAttribute("id")],
					"se"
				);
			}
		} else {
			/* If it doesnt have a hash or the hash is not se then we set EN */
			clickedElement.parentElement.innerHTML += generateProductHTMLLarge(
				cards[clickedElement.getAttribute("id")],
				"se"
			);
		}
	} else if (clickedElement && shadowEl.classList[1] === "active-shadow") {
		// If user clicks inside the element, and it is enlarged, minimize and remove shadow
		shadowEl.classList.toggle("active-shadow");
		const cardLarge = document.querySelector(".product-card-large");
		cardLarge.parentNode.removeChild(cardLarge);
	} else if (
		clickedElement === null &&
		shadowEl.classList[1] === "active-shadow"
	) {
		// If user clicks outside, and it is enlarge, minimize and remove shadow
		shadowEl.classList.toggle("active-shadow");
		const cardLarge = document.querySelector(".product-card-large");
		cardLarge.parentNode.removeChild(cardLarge);
	}
});
