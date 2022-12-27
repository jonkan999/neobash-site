export function updateItemCounter(basketArray) {
	if (itemCounter.classList[1] != "item-counter-active") {
		itemCounter.classList.add("item-counter-active");
	}
	itemCounter.innerHTML = basketArray.length;
}
