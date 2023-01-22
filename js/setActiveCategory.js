function setActive(string) {
	let lowerHeader = document.getElementById("lowerHeader");
	let listItems = lowerHeader.getElementsByTagName("li");
	for (let i = 0; i < listItems.length; i++) {
		let span = listItems[i].getElementsByTagName("span")[0];
		console.log(span.innerHTML);
		if (span.innerHTML.toLowerCase().trim() === string) {
			listItems[i].classList.add("active");
		} else {
			listItems[i].classList.remove("active");
		}
	}
}

const urlParams = new URLSearchParams(window.location.search);
const categoryValue = urlParams.get("category");
setActive(categoryValue);
