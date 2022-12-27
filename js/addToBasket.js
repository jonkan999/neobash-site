import { updateItemCounter } from "/js/updateItemCounter.js";

export function addToBasket() {
	const productId = document.getElementsByClassName(
		"product-card product-card-large"
	)[0];
	console.log(productId.id);
	/* 	var price = $(productParent).find(".price span").text();
	var productName = $(productParent).find(".productname").text();
	var quantity = $(productParent).find(".product-quantity").val();

	var cartItem = {
		productName: productName,
		price: price,
		quantity: quantity,
	};
	var cartItemJSON = JSON.stringify(cartItem);
*/
	let basketArray = new Array();
	// If javascript shopping cart session is not empty
	if (sessionStorage.getItem("bash-basket")) {
		basketArray = JSON.parse(sessionStorage.getItem("bash-basket"));
	}

	//if item does not already exists in basket, add it
	if (!basketArray.includes(productId.id)) {
		basketArray.push(productId.id);
	}

	const basketJSON = JSON.stringify(basketArray);
	sessionStorage.setItem("bash-basket", basketJSON);
	console.log(basketJSON);

	//update item number in html
	updateItemCounter(basketArray);
}
