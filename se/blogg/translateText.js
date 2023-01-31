const axios = require("axios");
const API_KEY = "AIzaSyC8vpGzIUw6HYGBu8OWkM1dE2dM6gb6 - kc";

async function translateText(text) {
	let res = await axios.post(
		`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
		{ q: text, target: "sv" }
	);
	let translation = res.data.data.translations[0].translatedText;
	return translation;
}

async function translate(text) {
	let translatedText = await translateText(text);
	return translatedText;
}

module.exports = {
	translate,
};
