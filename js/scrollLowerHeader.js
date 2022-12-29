export function scrollLowerHeader(scrollBtn) {
	if (scrollBtn.classList[1] === "lower-header-right") {
		categoryList.scrollBy({
			left: 0.5 * window.innerWidth,
			behavior: "smooth",
		});
	} else {
		categoryList.scrollBy({
			left: -0.5 * window.innerWidth,
			behavior: "smooth",
		});
	}
}
