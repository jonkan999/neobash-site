import { updateItemCounter } from "/js/updateItemCounter.js";
import cards from "/js/category-card.js";
import { generateProductHTML } from "/js/generateProductHTML.js";

export function getSummary() {
	console.log("running getSummary");
	const basketArray = JSON.parse(sessionStorage.getItem("bash-basket"));
	updateItemCounter();

	//getting all items
	//Generating HTML
	//Generating submission string
	let newHTML = ``;
	let submissionString = `Requested: `;
	for (let item in basketArray) {
		console.log(item);
		//Main category alway first, if MAIN category does not already exists in array, add it
		const newCat = cards[basketArray[item]].category.split(",")[0];
		newHTML += `
    <div class="request-summary-text">
    <h3 class="request-summary-header">${cards[basketArray[item]].name}</h3>

    <p class="request-summary-paragraph">
    ${
			//Capitalizing first letter and writing out category
			newCat.charAt(0).toUpperCase() + newCat.slice(1)
		} that is ${cards[basketArray[item]].invisibleTags.vibe1} and ${
			cards[basketArray[item]].invisibleTags.vibe2
		}. Price is estimated to start ${
			cards[basketArray[item]].visibleENTags.fromPrice
		}
    </p>
    </div>
    <div class="request-summary-media-box">
    ${cards[basketArray[item]].image}
    </div>
    `;

		//Just stacking product ids for backend
		submissionString += `${item > 0 ? ", " : ""}${cards[basketArray[item]].id}`;
	}

	summaryBody.innerHTML = newHTML;
	checkoutDetails.value = submissionString;
}
//Runs once every page load
if (document.URL.includes("checkout")) {
	getSummary();
}
