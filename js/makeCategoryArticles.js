import cards from "/js/category-card.js";
import { generateProductHTML } from "/js/generateProductHTML.js";
import { updateItemCounter } from "/js/updateItemCounter.js";
/* console.log(cards[Object.keys(cards)[0]]); */

/* loops through all articles in category-card.js json and generates the product grid */
export function makeCategoryArticles() {
	productGrid.innerHTML = "";
	for (let key in cards) {
		let article = cards[key];
		/* only append with selected category */
		const currentCat = document.getElementsByClassName(
			"category-list-element active"
		)[0];
		console.log(
			article.category
				.trim()
				.split(",")
				.includes(currentCat.innerText.toLowerCase().trim())
		);
		if (currentCat) {
			if (
				article.category
					.trim()
					.split(",")
					.includes(currentCat.innerText.toLowerCase().trim())
			) {
				/*trim() needed to account for safari reading in a line break here https://stackoverflow.com/questions/61219317/javascript-if-evaluating-differently-in-firefox-and-safari*/
				if (window.location.hash) {
					// Set the content of the webpage
					// depending on the hash value
					if (document.getElementById("selectLanguage").value === "SE") {
						productGrid.innerHTML += generateProductHTML(article, "se");
					} else {
						productGrid.innerHTML += generateProductHTML(article, "en");
					}
				} else {
					/* If it doesnt have a hash or the hash is not se then we set EN */
					productGrid.innerHTML += generateProductHTML(article, "en");
				}
			}
		}
	}
}
//Runs once every page load
makeCategoryArticles();
updateItemCounter();
