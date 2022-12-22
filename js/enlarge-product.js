///////////////////////////////////////////////////////////
// enlarge clicked product card and blur background

/* const venueSkyddsrummet = $("#venueSkyddsrummet").load(
  "product-cards/venue-skyddsrummet-clicked.html"
); */
import cards from "../category-cards/category-card.js";
import { generateProductHTMLLarge } from "./generateProductHTMLLarge.js";

document.addEventListener("click", async function (event) {
	const clickedElement = event.target.closest(".product-card");
	const shadowEl = document.querySelector(".full-page-shadow");
	if (event.target.classList[0] === "vendor-link") {
		return;
	}
	// If user clicks inside the element, enlarge and shadow
	if (clickedElement && shadowEl.classList[1] != "active-shadow") {
		console.log("fall1");
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
