//import cards from "/js/category-card.js";
import { updateItemCounter } from "/js/updateItemCounter.js";
import { isBYOB } from "/js/isBYOB.js";
import { makeArticle } from "/js/makeArticle.js";
import { dropQueryParam } from "/js/dropQueryParam.js";

export function makeCategoryArticles() {
	fetch("../js/category-card.json")
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		})
		.then((cards) => {
			productGrid.innerHTML = "";

			const urlParams = new URLSearchParams(window.location.search);
			const currentCat = urlParams.get("category");
			const byob = urlParams.get("byob");
			const singleId = urlParams.get("id");

			if (singleId) {
				makeArticle(cards[singleId]);
				dropQueryParam("id");
				return;
			}

			for (let id in cards) {
				let article = cards[id];

				if (currentCat) {
					/* only append with selected category */
					if (
						article.category.trim().split(",").includes(currentCat) &&
						isBYOB(byob, article.invisibleTags.byob)
					) {
						makeArticle(article);
					}
				} else {
					/* currentCat null, no category chosen load all */
					makeArticle(article);
				}
			}
			updateItemCounter();
		})
		.catch((error) => console.error(error));
}
