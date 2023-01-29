import { generateProductHTML } from "/js/generateProductHTML.js";

export function makeArticle(article) {
	/*trim() needed to account for safari reading in a line break here https://stackoverflow.com/questions/61219317/javascript-if-evaluating-differently-in-firefox-and-safari*/
	//Check if swedish

	const isSwedish = document.URL.includes("/se/");

	if (isSwedish) {
		productGrid.innerHTML += generateProductHTML(article, "se");
	} else {
		productGrid.innerHTML += generateProductHTML(article, "en");
	}
}
