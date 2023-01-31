import { generateProductHTML } from "/js/generateProductHTML.js";

export function makeArticle(article) {
	//Check if swedish
	const isSwedish = document.URL.includes("/se/");

	if (isSwedish) {
		//If swedish generate swedish content
		productGrid.innerHTML += generateProductHTML(article, "se");
	} else {
		//Else english content
		productGrid.innerHTML += generateProductHTML(article, "en");
	}
}
