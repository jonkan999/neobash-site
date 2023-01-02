import { updateItemCounter } from "/js/updateItemCounter.js";

export function removeFromBasket() {
	const productId = document.getElementsByClassName(
		"product-card product-card-large"
	)[0];
	console.log(productId.id);

	let basketArray = JSON.parse(sessionStorage.getItem("bash-basket"));
	// If javascript shopping cart session is not empty
	/* 	if (sessionStorage.getItem("bash-basket")) {
		basketArray = JSON.parse(sessionStorage.getItem("bash-basket"));
	} */

	//if item already exists in basket, remove it
	const index = basketArray.indexOf(productId.id);
	if (index > -1) {
		basketArray.splice(index, 1); // 2nd parameter means remove one item only
	}

	const basketJSON = JSON.stringify(basketArray);
	sessionStorage.setItem("bash-basket", basketJSON);
	console.log(basketJSON);

	//update item number in html
	updateItemCounter();
}
