///////////////////////////////////////////////////////////
// Change language on user preference

// Create a function to change
// the hash value of the page
function changeLanguage() {
	const e = document.getElementById("selectLanguage");
	console.log(e.value);
	if (e.value == "EN") {
		location.hash = "en";
	} else if (e.value == "SE") {
		location.hash = "se";
	}
	console.log(window.location.hash);
	location.reload();
}

// Define the language reload anchors

const language = {
	en: {},
	se: {},
};

// Check if a hash value exists in the URL
if (window.location.hash) {
	// Set the content of the webpage
	// depending on the hash value
	if (window.location.hash == "#en") {
		document.getElementById("selectLanguage").value = "EN";
	} else if (window.location.hash == "#se") {
		document.getElementById("selectLanguage").value = "SE";
	}
}
