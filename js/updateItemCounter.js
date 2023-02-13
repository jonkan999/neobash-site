export function updateItemCounter() {
  console.log("updateItemCounter");
  const basketArray = JSON.parse(sessionStorage.getItem("bash-basket"));

  if (basketArray) {
    if (
      itemCounter.classList[1] != "item-counter-active" &&
      basketArray.length > 0
    ) {
      console.log("here");
      itemCounter.classList.add("item-counter-active");
      if (document.URL.includes("category-page")) {
        console.log("here");
        clearBasketButton.innerHTML = `
				<div class="close-btn-container">
					<span class="clear-basket-description">clear basket</span>
					<ion-icon class="clear-basket-icon" name="close-outline"></ion-icon>
				</div>
				`;
      }
    }
    itemCounter.innerHTML = basketArray.length;
  }
}
