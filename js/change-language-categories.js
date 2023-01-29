///////////////////////////////////////////////////////////
// Change language on user preference

// Create a function to change
function changeLanguage() {
	const e = document.getElementById("selectLanguage");
	console.log(e.value);
	if (e.value == "EN") {
		location.href = "../category-page.html";
		document.getElementById("selectLanguage").value = "EN";
	} else if (e.value == "SE") {
		location.href = "../se/category-page.html";
		document.querySelector(
			"#selectLanguage option[value='SE']"
		).selected = true;
	}
}
