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
