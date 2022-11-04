///////////////////////////////////////////////////////////
// enlarge clicked product card and blur background

/* const venueSkyddsrummet = $("#venueSkyddsrummet").load(
  "product-cards/venue-skyddsrummet-clicked.html"
); */

const enlargeEl = document.querySelector(".section-product-grid");

document.addEventListener("click", async function (event) {
  const clickedElement = event.target.closest(".product-card");
  const shadowEl = document.querySelector(".full-page-shadow");

  console.log(clickedElement);
  if (event.target.classList[0] === "vendor-link") {
    return;
  }
  // If user clicks inside the element, enlarge and shadow
  if (clickedElement && shadowEl.classList[1] != "active-shadow") {
    console.log("fall1");
    shadowEl.classList.toggle("active-shadow");
    const src =
      "product-cards/" + clickedElement.getAttribute("name") + "-clicked.html";
    const resp = await fetch(src);
    const venueSkyddsrummet = await resp.text();
    clickedElement.parentElement.innerHTML += venueSkyddsrummet;
  } else if (clickedElement && shadowEl.classList[1] === "active-shadow") {
    // If user clicks inside the element, and it is enlarged, minimize and remove shadow
    shadowEl.classList.toggle("active-shadow");
    const cardLarge = document.querySelector(".product-card-large");
    cardLarge.parentNode.removeChild(cardLarge);
  } else if (
    clickedElement === null &&
    shadowEl.classList[1] === "active-shadow"
  ) {
    // If user clicks outside, and it is enlarge, minimize and remove shadow
    shadowEl.classList.toggle("active-shadow");
    const cardLarge = document.querySelector(".product-card-large");
    cardLarge.parentNode.removeChild(cardLarge);
  }
});