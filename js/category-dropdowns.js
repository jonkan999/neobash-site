///////////////////////////////////////////////////////////
// Make dropdown appear on click work

const contentEl = document.querySelector(".where-dropdown-content");

document.addEventListener("click", function (event) {
  // If user clicks inside the element, toggle active
  if (event.target.closest(".where-button")) {
    contentEl.classList.toggle("active");
  } else if (contentEl.classList[2] === "active") {
    // If user clicks clicks anywhere else and element is active, toggle out
    contentEl.classList.toggle("active");
  }
});
