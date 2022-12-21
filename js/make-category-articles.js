import cards from "../category-cards/category-card.js";
import { appendProductGrid } from "./appendProductGrid.js";
console.log(cards[Object.keys(cards)[0]]);

/* loops through all articles in category-card.js json and generates the product grid */
for (let key in cards) {
	let article = cards[key];
	/* only append with selected category */
	const currentCat = document.getElementsByClassName(
		"category-list-element active"
	)[0];
	if ((article.category = currentCat.innerText.toLowerCase())) {
		if (window.location.hash) {
			// Set the content of the webpage
			// depending on the hash value
			if (window.location.hash == "#se") {
				productGrid.innerHTML += appendProductGrid(article, "se");
			} else {
				productGrid.innerHTML += appendProductGrid(article, "en");
			}
		} else {
			/* If it doesnt have a hash or the hash is not se then we set EN */
			productGrid.innerHTML += appendProductGrid(article, "en");
		}
	}
}
