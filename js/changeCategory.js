import { makeCategoryArticles } from "/js/makeCategoryArticles.js";

export function changeCategory(clickedCategory) {
	//If clicked already active, we dont want to do anythin
	if (clickedCategory.classList.contains("active")) {
		return;
		//clickedCategory.classList.toggle("active");
	} else {
		//If other boxes are active, untoggle and then toggle the clicked
		if (document.getElementsByClassName("category-list-element active")[0]) {
			document
				.getElementsByClassName("category-list-element active")[0]
				.classList.toggle("active");
			document.getElementsByClassName("category-list-element active")[0];
			clickedCategory.classList.toggle("active");
		} else {
			// Otherwise nothing is active and just toggle the clicked
			clickedCategory.classList.toggle("active");
		}
	}
	makeCategoryArticles();
}