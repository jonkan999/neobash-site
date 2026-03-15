///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

function closeNav() {
	if (headerEl.classList.contains("nav-open")) {
		headerEl.classList.remove("nav-open");
		headerEl.classList.add("nav-close");
		setTimeout(function () {
			headerEl.classList.remove("nav-close");
		}, 500);
	}
}

btnNavEl.addEventListener("click", function () {
	if (headerEl.classList.contains("nav-open")) {
		closeNav();
	} else {
		headerEl.classList.add("nav-open");
	}
});

// Close nav when any nav link is clicked
document.querySelectorAll(".main-nav-link").forEach(function (link) {
	link.addEventListener("click", closeNav);
});
