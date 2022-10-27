///////////////////////////////////////////////////////////
// enlarge clicked product card and blur background

const enlargeEl = document.querySelector(".section-product-grid");
const appendedHtml = document.querySelector(".appended-html");

document.addEventListener("click", function (event) {
  const clickedElement = event.target.closest(".product-card");
  const shadowEl = document.querySelector(".full-page-shadow");
  // If user clicks inside the element, toggle blur-filter
  console.log(shadowEl.classList[1]);
  if (event.target.classList[0] === "vendor-link") {
    return;
  }
  if (clickedElement) {
    shadowEl.classList.toggle("active-shadow");
    clickedElement.classList.toggle("product-card-large");
    //Add HTML if it doesnt exist
    if (document.querySelector(".appended-html") === null) {
      clickedElement.children[1].innerHTML +=
        '<div class="appended-html"><a target="_blank" href="https://skyddsrummet.se/" class="vendor-link"> <span>Go to vendor site </span> <ion-icon name="chevron-forward-outline"></ion-icon> </a> <button class="btn add-button">add</button></div>';
    } else {
      //otherwise remove it on click
      const appendedHtml = document.querySelector(".appended-html");
      appendedHtml.parentNode.removeChild(appendedHtml);
    }
  } else if (shadowEl.classList[1] === "active-shadow") {
    // If user clicks clicks anywhere else and element is blur-filter, toggle out
    shadowEl.classList.toggle("active-shadow");
    document
      .querySelector(".product-card-large")
      .classList.toggle("product-card-large");
  }
  //and remove added html
  const appendedHtml = document.querySelector(".appended-html");
  if (appendedHtml != null && shadowEl.classList[1] != "active-shadow") {
    appendedHtml.parentNode.removeChild(appendedHtml);
  }
});
