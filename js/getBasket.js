import { updateItemCounter } from "/js/updateItemCounter.js";

const basketArray = JSON.parse(sessionStorage.getItem("bash-basket"));
updateItemCounter(basketArray);
