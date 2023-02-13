import { updateItemCounter } from "/js/updateItemCounter.js";

export function addToBasket(productId) {
  console.log("addToBasket");

  let basketArray = new Array();
  // If javascript shopping cart session is not empty
  if (sessionStorage.getItem("bash-basket")) {
    basketArray = JSON.parse(sessionStorage.getItem("bash-basket"));
  }

  //if item does not already exists in basket, add it
  if (!basketArray.includes(productId)) {
    basketArray.push(productId);
  }

  const basketJSON = JSON.stringify(basketArray);
  sessionStorage.setItem("bash-basket", basketJSON);
  console.log(basketJSON);

  //update item number in html, ignore if in event-builder
  if (document.URL.includes("category-page")) {
    console.log("h");
    updateItemCounter();
  }
}
