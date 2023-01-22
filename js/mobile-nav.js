///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
	if (!headerEl.classList.contains("nav-open")) {
		//This will run every time except the first
		setTimeout(function () {
			//removes nav-close after slide out effect
			headerEl.classList.toggle("nav-close");
		}, 500);
		headerEl.classList.toggle("nav-close");
	}
});
