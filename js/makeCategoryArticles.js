import cards from "/js/category-card.js";
import { updateItemCounter } from "/js/updateItemCounter.js";
import { isBYOB } from "/js/isBYOB.js";
import { makeArticle } from "/js/makeArticle.js";
export function makeCategoryArticles() {
	productGrid.innerHTML = "";

	const urlParams = new URLSearchParams(window.location.search);
	const currentCat = urlParams.get("category");
	const byob = urlParams.get("byob");

	//sort according to rank, maybe move this to only run once
	let sortable = [];
	for (let id in cards) {
		sortable.push([id, cards[id].invisibleTags.catRank]);
	}

	sortable.sort(function (a, b) {
		return a[1] - b[1];
	});

	for (let i = 0; i < sortable.length; i++) {
		let article = cards[sortable[i][0]];
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
}
//Runs once every page load
if (document.URL.includes("category-page")) {
	//Only generate product grid if in category-page
	makeCategoryArticles();
}
updateItemCounter();
