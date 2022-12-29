export function updateItemCounter() {
	const basketArray = JSON.parse(sessionStorage.getItem("bash-basket"));

	if (basketArray) {
		if (
			itemCounter.classList[1] != "item-counter-active" &&
			basketArray.length > 0
		) {
			itemCounter.classList.add("item-counter-active");
		}
		itemCounter.innerHTML = basketArray.length;
	}
}
