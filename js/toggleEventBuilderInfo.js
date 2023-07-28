/* // JavaScript with click event listeners
const eventBuilder = document.getElementById("heroEventbuilder");
const eventBuilderInfo = eventBuilder.querySelector(".event-builder-info");

// Variables to track the toggle state for eventBuilderInfo and click count
let isEventBuilderInfoDisplayed = false;
let clickCount = 0;

// Function to toggle the display of the event-builder-info element
function toggleEventBuilderInfo() {
  eventBuilderInfo.style.display = isEventBuilderInfoDisplayed
    ? "none"
    : "block";
  isEventBuilderInfoDisplayed = !isEventBuilderInfoDisplayed;
  console.log(isEventBuilderInfoDisplayed);
}

// Event listener for hover on larger screens
eventBuilder.addEventListener("mouseenter", () => {
  if (window.innerWidth > 34 * 16) {
    // Check if the screen size matches the media query condition
    toggleEventBuilderInfo();
  }
});

eventBuilder.addEventListener("mouseleave", () => {
  if (window.innerWidth > 34 * 16) {
    // Check if the screen size matches the media query condition
    toggleEventBuilderInfo();
  }
});

// Event listener for click on eventBuilder or eventBuilderInfo on smaller screens
eventBuilder.addEventListener("click", (event) => {
  if (window.innerWidth < 34 * 16) {
    // Check if the screen size does not match the media query condition
    event.preventDefault(); // Prevent the anchor link from being followed immediately

    // Increment the click count
    clickCount++;

    // If the eventBuilderInfo is already displayed and click count is greater than 1, allow the link to be followed
    if (isEventBuilderInfoDisplayed && clickCount > 1) {
      clickCount = 0; // Reset click count
      isEventBuilderInfoDisplayed = false; // Reset the display state
    } else {
      // Display eventBuilderInfo using the toggle
      toggleEventBuilderInfo();
    }
  }
});

eventBuilderInfo.addEventListener("click", () => {
  if (window.innerWidth < 34 * 16) {
    // Check if the screen size does not match the media query condition
    toggleEventBuilderInfo();
  }
});
 */
