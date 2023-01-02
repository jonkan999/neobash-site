import { updateItemCounter } from "/js/updateItemCounter.js";
import cards from "/js/category-card.js";
import { generateProductHTML } from "/js/generateProductHTML.js";

export function getBasket() {
	console.log("running getBasket");
	const basketArray = JSON.parse(sessionStorage.getItem("bash-basket"));
	updateItemCounter();

	//getting all categories
	let categories = new Array();
	for (let item in basketArray) {
		//Main category alway first, if MAIN category does not already exists in array, add it
		const newCat = cards[basketArray[item]].category.split(",")[0];
		if (!categories.includes(newCat)) {
			categories.push(newCat);
		}
	}

	//Generating HTML
	let newHTML = ``;
	for (let cat in categories) {
		newHTML += `
  <div class="category-header">
  <h2 class="heading-secondary category-header-header">${
		//Capitalizing first letter and writing out category
		categories[cat].charAt(0).toUpperCase() + categories[cat].slice(1)
	}</h2>
  </div>`;
		for (let item in basketArray) {
			//if item is the same category, add it
			const basketArticle = cards[basketArray[item]];
			if (
				basketArticle.category
					.trim()
					.split(",")
					.includes(categories[cat].trim())
			) {
				newHTML += generateProductHTML(basketArticle, "en");
			}
		}
	}

	productGrid.innerHTML = newHTML;
}
//Runs once every page load
if (document.URL.includes("bash-basket")) {
	getBasket();
}
