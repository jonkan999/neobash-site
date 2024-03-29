import { replaceQueryParam } from "/js/replaceQueryParam.js";
import { dropQueryParam } from "/js/dropQueryParam.js";
import { makeCategoryArticles } from "/js/makeCategoryArticles.js";

const booze = document.getElementById("bringBooze");
const food = document.getElementById("bringFood");

booze.addEventListener("click", function () {
	this.classList.toggle("active");
	if (this.classList.contains("active")) {
		replaceQueryParam("byob", 1);
		makeCategoryArticles();
	} else {
		dropQueryParam("byob");
		makeCategoryArticles();
	}
});
food.addEventListener("click", function () {
	this.classList.toggle("active");
	if (this.classList.contains("active")) {
		replaceQueryParam("byof", 1);
		makeCategoryArticles();
	} else {
		dropQueryParam("byof");
		makeCategoryArticles();
	}
});
