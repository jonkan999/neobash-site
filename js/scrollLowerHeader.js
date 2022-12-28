export function scrollLowerHeader(scrollBtn) {
	if (scrollBtn.classList[1] === "lower-header-right") {
		categoryList.scrollBy({
			left: 90,
			behavior: "smooth",
		});
	} else {
		categoryList.scrollBy({
			left: -90,
			behavior: "smooth",
		});
	}
}
