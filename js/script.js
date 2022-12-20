// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
/* yearEl.textContent = currentYear; */

///////////////////////////////////////////////////////////
// Open blog articles

const btnReadMoreEl = document.querySelectorAll(".read-more-button");

for (let i = 0; i < btnReadMoreEl.length; i++) {
	//Loops through blog articles expansion buttons and adds eventlistener for click
	const articleBodyEl = btnReadMoreEl[i].previousElementSibling;

	btnReadMoreEl[i].addEventListener("click", function () {
		//On click, add axpanded class to article body in the previous element sibling to the button being clicked
		articleBodyEl.classList.toggle("blog-article-body--expanded");
		btnReadMoreEl[i].classList.toggle("read-more-button--expanded");

		if (btnReadMoreEl[i].classList[1] != "read-more-button--expanded") {
			//When whrunk back we scroll back to the top of the article
			position =
				articleBodyEl.parentElement.parentElement.getBoundingClientRect();
			const header_position = document
				.querySelector(".header")
				.getBoundingClientRect();

			window.scrollTo({
				top: position.top + window.scrollY - header_position.height * 1.2,
				behavior: "smooth",
			});
		}
	});
}

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const href = link.getAttribute("href");

		// Scroll back to top
		if (href === "#")
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});

		// Scroll to other links
		if (href !== "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({ behavior: "smooth" });
		}

		// Scroll to other links
		if (href !== "#" && !href.startsWith("#")) {
			window.location.href = href;
		}

		// Close mobile naviagtion
		if (link.classList.contains("main-nav-link"))
			headerEl.classList.toggle("nav-open");
	});
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];

		if (
			ent.isIntersecting === false &&
			document.querySelector(".full-page-shadow").classList[1] !=
				"active-shadow"
		) {
			document.body.classList.add("sticky");
		}

		if (ent.isIntersecting === true) {
			document.body.classList.remove("sticky");
		}
	},
	{
		// In the viewport
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
