import { replaceQueryParam } from "/js/replaceQueryParam.js";
import { dropQueryParam } from "/js/dropQueryParam.js";

document.getElementById("bring-booze").addEventListener("click", function () {
	if (this.checked) {
		replaceQueryParam("byob", 1);
	} else {
		dropQueryParam("byob");
	}
});
document.getElementById("bring-food").addEventListener("click", function () {
	if (this.checked) {
		replaceQueryParam("byof", 1);
	} else {
		dropQueryParam("byof");
	}
});
