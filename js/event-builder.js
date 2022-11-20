const eventBuilderElement = document.querySelector(".event-builder");
console.log(eventBuilderElement);
eventBuilderElement.addEventListener("click", async function () {
  console.log("here");
  const src = "event-builder/date-question.html";
  const resp = await fetch(src);
  const nextQuestionHTML = await resp.text();
  console.log(document.querySelector(".section-hero"));
  document.querySelector(".section-hero").parentElement.innerHTML +=
    nextQuestionHTML;
  const shadowEl = document.querySelector(".full-page-shadow");
  shadowEl.classList.toggle("active-shadow");
  populateDateDropdown();
});

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
        window.scrollTo(0, 0);
        break;
      case "guests-question":
        src = "event-builder/type-of-event-question.html";
        resp = await fetch(src);
        nextQuestionHTML = await resp.text();
        questionContainer.parentNode.removeChild(questionContainer);
        document.querySelector(".section-hero").parentElement.innerHTML +=
          nextQuestionHTML;
        window.scrollTo(0, 0);
        break;
      case "type-of-event-question":
        src = "event-builder/inspiration-question.html";
        resp = await fetch(src);
        nextQuestionHTML = await resp.text();
        questionContainer.parentNode.removeChild(questionContainer);
        document.querySelector(".section-hero").parentElement.innerHTML +=
          nextQuestionHTML;
        window.scrollTo(0, 0);
        break;
      case "inspiration-question":
        src = "event-builder/budget-question.html";
        resp = await fetch(src);
        nextQuestionHTML = await resp.text();
        questionContainer.parentNode.removeChild(questionContainer);
        document.querySelector(".section-hero").parentElement.innerHTML +=
          nextQuestionHTML;
        window.scrollTo(0, 0);

        /* slowdown playtime of budget video */
        document.querySelector(".budget-video").playbackRate = 0.7;

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
