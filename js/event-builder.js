import { addToBasket } from "/js/addToBasket.js";

/* OLD CODE 
const eventBuilderElement = document.querySelector(".event-builder");
eventBuilderElement.addEventListener("click", async function () {
	const src = "event-builder/date-question.html";
	const resp = await fetch(src);
	const nextQuestionHTML = await resp.text();
	document.querySelector(".section-hero").parentElement.innerHTML +=
		nextQuestionHTML;
	const shadowEl = document.querySelector(".full-page-shadow");
	shadowEl.classList.toggle("active-shadow");
	populateDateDropdown();
}); */

// JavaScript with updated click event listener for eventBuilder and eventBuilderInfo
const eventBuilderElement = document.getElementById("heroEventbuilder");
const eventBuilderInfo = eventBuilderElement.querySelector(
  ".event-builder-info"
);

// Variable to track the toggle state for eventBuilderInfo
let isEventBuilderInfoDisplayed = false;

// Function to toggle the display of the event-builder-info element
function toggleEventBuilderInfo() {
  eventBuilderInfo.style.display = isEventBuilderInfoDisplayed
    ? "none"
    : "block";
  isEventBuilderInfoDisplayed = !isEventBuilderInfoDisplayed;
}

// Function to check if the conditions for running the code block are met
function shouldRunCodeBlock() {
  const isLargeScreen = window.innerWidth > 34 * 16;
  const isEventBuilderInfoBlockDisplayed =
    eventBuilderInfo.style.display === "block";
  const isElementClicked =
    event.target === eventBuilderElement || event.target === eventBuilderInfo;
  /* eventBuilderInfo.clicked || eventBuilderElement.clicked; */
  console.log(isEventBuilderInfoBlockDisplayed);
  return (
    (isLargeScreen && isElementClicked) ||
    (!isLargeScreen && isEventBuilderInfoBlockDisplayed && isElementClicked)
  );
}

// Event listener for hover on larger screens
eventBuilderElement.addEventListener("mouseenter", () => {
  if (window.innerWidth > 34 * 16 && !isEventBuilderInfoDisplayed) {
    // Check if the screen size matches the media query condition and eventBuilderInfo is not displayed
    toggleEventBuilderInfo();
  }
});

eventBuilderElement.addEventListener("mouseleave", () => {
  if (window.innerWidth > 34 * 16 && isEventBuilderInfoDisplayed) {
    // Check if the screen size matches the media query condition and eventBuilderInfo is displayed
    toggleEventBuilderInfo();
  }
});
eventBuilderElement.addEventListener("click", async function () {
  if (shouldRunCodeBlock()) {
    const src = "event-builder/date-question.html";
    const resp = await fetch(src);
    const nextQuestionHTML = await resp.text();
    document.querySelector(".section-hero").parentElement.innerHTML +=
      nextQuestionHTML;
    const shadowEl = document.querySelector(".full-page-shadow");
    shadowEl.classList.toggle("active-shadow");
    populateDateDropdown();
  }
});

eventBuilderInfo.addEventListener("click", async function () {
  if (shouldRunCodeBlock()) {
    const src = "event-builder/date-question.html";
    const resp = await fetch(src);
    const nextQuestionHTML = await resp.text();
    document.querySelector(".section-hero").parentElement.innerHTML +=
      nextQuestionHTML;
    const shadowEl = document.querySelector(".full-page-shadow");
    shadowEl.classList.toggle("active-shadow");
    populateDateDropdown();
  }
});

// Event listener for click on eventBuilder or eventBuilderInfo on smaller screens
eventBuilderElement.addEventListener("click", () => {
  if (window.innerWidth < 34 * 16) {
    // Check if the screen size does not match the media query condition
    // Display eventBuilderInfo using the toggle
    toggleEventBuilderInfo();
  }
});

eventBuilderInfo.addEventListener("click", () => {
  if (window.innerWidth < 34 * 16) {
    // Check if the screen size does not match the media query condition
    toggleEventBuilderInfo();
  }
});

// Rest of your existing click event listener code for eventBuilderElement

///////////////////////////////////////////////////////////

document.addEventListener("click", async function (event) {
  // Make dropdown appear on click work
  // If user clicks inside the element, toggle active
  const contentEl = document.querySelector(".dropdown-content");
  if (contentEl) {
    //only run if contentEl exists
    if (event.target.closest(".question-button")) {
      contentEl.classList.toggle("active");
    } else if (contentEl.classList.contains("active")) {
      // If user clicks clicks anywhere else and element is active, toggle out
      contentEl.classList.toggle("active");
    }
  }

  //nextq
  if (event.target.classList[1] === "next-question") {
    console.log("inside");
    const questionContainer = document.querySelector(
      ".questionnaire-container"
    );
    let src, resp, nextQuestionHTML;
    switch (questionContainer.classList[1]) {
      case "date-question":
        src = "event-builder/guests-question.html";
        resp = await fetch(src);
        nextQuestionHTML = await resp.text();
        questionContainer.parentNode.removeChild(questionContainer);
        document.querySelector(".section-hero").parentElement.innerHTML +=
          nextQuestionHTML;
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        break;
      case "guests-question":
        src = "event-builder/type-of-event-question.html";
        resp = await fetch(src);
        nextQuestionHTML = await resp.text();
        questionContainer.parentNode.removeChild(questionContainer);
        document.querySelector(".section-hero").parentElement.innerHTML +=
          nextQuestionHTML;
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        break;
      case "type-of-event-question":
        src = "event-builder/inspiration-question.html";
        resp = await fetch(src);
        nextQuestionHTML = await resp.text();
        questionContainer.parentNode.removeChild(questionContainer);
        document.querySelector(".section-hero").parentElement.innerHTML +=
          nextQuestionHTML;
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        break;
      case "inspiration-question":
        src = "event-builder/budget-question.html";
        resp = await fetch(src);
        nextQuestionHTML = await resp.text();
        questionContainer.parentNode.removeChild(questionContainer);
        document.querySelector(".section-hero").parentElement.innerHTML +=
          nextQuestionHTML;
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });

        /* slowdown playtime of budget video */
        document.querySelector(".budget-video").playbackRate = 0.7;

        break;
      case "budget-question":
        src = "event-builder/loading-question.html";
        resp = await fetch(src);
        nextQuestionHTML = await resp.text();
        questionContainer.parentNode.removeChild(questionContainer);
        document.querySelector(".section-hero").parentElement.innerHTML +=
          nextQuestionHTML;
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });

        //Adding items to bash basket, this will later be based on
        //the user input questions
        const itemsToLoad = [];
        itemsToLoad.push(
          "venueSkyddsrummet",
          "foodMackverket",
          "foodChurroskungarna",
          "decorMirrorballs",
          "drinksLovnas"
        );
        console.log("element");
        for (let index = 0; index < itemsToLoad.length; index++) {
          const productId = itemsToLoad[index];
          console.log(productId);
          addToBasket(productId);
        }
        console.log("element");

        //Generating some sort of dummy graphic
        var elem = document.querySelector(".progress-bar-inside");
        var message1 = document.querySelector(".progress-bar-message1");
        var message2 = document.querySelector(".progress-bar-message2");
        var message3 = document.querySelector(".progress-bar-message3");
        var message4 = document.querySelector(".progress-bar-message4");
        var message5 = document.querySelector(".progress-bar-message5");
        var message6 = document.querySelector(".progress-bar-message6");
        var width = 0;
        var id = setInterval(frame, 100);
        function frame() {
          if (width === 120) {
            clearInterval(id);
            window.location.href = "bash-basket.html";
          } else if (
            width === 0 &&
            !message1.classList.contains("fade-in-slow")
          ) {
            message1.innerHTML = "Running around in circles ..";
            message1.classList.toggle("fade-in-slow");
          } else if (
            width === 20 &&
            !message2.classList.contains("fade-in-slow")
          ) {
            message2.innerHTML = "Packing your mirror balls ..";
            message2.classList.toggle("fade-in-slow");
          } else if (
            width === 40 &&
            !message3.classList.contains("fade-in-slow")
          ) {
            message3.innerHTML = "Making playlists ..";
            message3.classList.toggle("fade-in-slow");
          } else if (
            width === 60 &&
            !message4.classList.contains("fade-in-slow")
          ) {
            message4.innerHTML = "Popping the popcorn ..";
            message4.classList.toggle("fade-in-slow");
          } else if (
            width === 80 &&
            !message5.classList.contains("fade-in-slow")
          ) {
            message5.innerHTML =
              "Taking a <strong>DEEP</strong> breath aaand ..";
            message5.classList.toggle("fade-in-slow");
          } else if (
            width === 100 &&
            !message6.classList.contains("fade-in-slow")
          ) {
            message6.innerHTML = "Success! Lets go get your event!";
          } else if (width === 120) {
            message6.innerHTML = "Success! Lets go get your event!";
          } else {
            if (width <= 102) {
              elem.style.width = width + "%";
            }

            /*             var num = (width * 1) / 10;
            num = num.toFixed(0); */
          }
          width++;
        }

        break;
    }
  }

  //close
  if (event.target.classList[0] === "close-btn") {
    const questionContainer = document.querySelector(
      ".questionnaire-container"
    );
    const shadowEl = document.querySelector(".full-page-shadow");
    questionContainer.parentNode.removeChild(questionContainer);
    shadowEl.classList.toggle("active-shadow");
    this.location.reload();
  }

  //toggle active event type box, and make sure only one active at a time
  if (event.target.closest(".type-of-event-box")) {
    const clickedBox = event.target.closest(".type-of-event-box");

    //If clicked already active, untoggle

    if (clickedBox.classList.contains("active")) {
      clickedBox.classList.toggle("active");
      clickedBox.children[2].classList.toggle("blink-in");
    } else {
      //If other boxes are active, untoggle and then toggle the clicked

      if (document.getElementsByClassName("type-of-event-box active")[0]) {
        document
          .getElementsByClassName("type-of-event-box active")[0]
          .classList.toggle("active");
        document.getElementsByClassName("type-of-event-box active")[0];
        clickedBox.classList.toggle("active");
      } else {
        // Otherwise nothing is active and just toggle the clicked

        clickedBox.classList.toggle("active");
      }
    }
  }

  //toggle active inspiration box, and make sure only one active at a time
  if (event.target.closest(".inspiration-image-box")) {
    const clickedBox = event.target.closest(".inspiration-image-box");

    //If clicked already active, untoggle

    if (clickedBox.classList.contains("active")) {
      clickedBox.classList.toggle("active");
      clickedBox.classList.toggle("blink-in");
    } else {
      //If other boxes are active, untoggle and then toggle the clicked

      if (document.getElementsByClassName("inspiration-image-box active")[0]) {
        document
          .getElementsByClassName("inspiration-image-box active")[0]
          .classList.toggle("active");
        document.getElementsByClassName("inspiration-image-box active")[0];
        clickedBox.classList.toggle("active");
      } else {
        // Otherwise nothing is active and just toggle the clicked

        clickedBox.classList.toggle("active");
      }
    }
  }
});

///////////////////////////////////////////////////////////
// MFetch next question

console.log("outside");
const nextQuestion = document.querySelector(".next-question");
if (nextQuestion) {
  //Only runs if not null
  nextQuestion.addEventListener("click", async function () {
    console.log("inside");
    const questionContainer = document.querySelector(
      ".questionnaire-container"
    );
  });
}

/*
document.addEventListener("click", async function (event) {
  const clickedElement = event.target.closest(".btn");
  const shadowEl = document.querySelector(".full-page-shadow");

  if (event.target.classList[0] === "event-builder") {
    console.log("fall1");
    return;
  }*/
// If user clicks inside the element, enlarge and shadow
/*if (clickedElement && shadowEl.classList[1] != "active-shadow") {
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
});*/

function populateDateDropdown() {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    today = new Date(),
    // default targetDate is christmas
    targetDate = new Date(today.getFullYear(), 11, 25);

  setDate(targetDate);
  setYears(5); // set the next five years in dropdown

  $("#select-month").change(function () {
    let monthIndex = $("#select-month").val();
    setDays(monthIndex);
  });

  function setDate(date) {
    setDays(date.getMonth());
    $("#select-day").val(date.getDate());
    $("#select-month").val(date.getMonth());
    $("#select-year").val(date.getFullYear());
  }

  // make sure the number of days correspond with the selected month
  function setDays(monthIndex) {
    let optionCount = $("#select-day option").length,
      daysCount = daysInMonth[monthIndex];

    if (optionCount < daysCount) {
      for (var i = optionCount; i < daysCount; i++) {
        $("#select-day").append(
          $("<option></option>")
            .attr("value", i + 1)
            .text(i + 1)
        );
      }
    } else {
      for (let i = daysCount; i < optionCount; i++) {
        let optionItem = "#select-day option[value=" + (i + 1) + "]";
        $(optionItem).remove();
      }
    }
  }

  function setYears(val) {
    let year = today.getFullYear();
    for (let i = 0; i < val; i++) {
      $("#select-year").append(
        $("<option></option>")
          .attr("value", year + i)
          .text(year + i)
      );
    }
  }
}
