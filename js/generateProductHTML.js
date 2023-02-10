export function generateProductHTML(article, language) {
  console.log("running generateProductHTML for " + article.articleName);
  /* takes article object and language as an input and generates product html*/
  let usp1Tag = article.visibleENTags.usp1;
  let usp2Tag = article.visibleENTags.usp2;
  let usp3Tag = article.visibleENTags.usp3;
  let priceTag = article.visibleENTags.fromPrice;
  if (language === "se") {
    usp1Tag = article.visibleSETags.usp1;
    usp2Tag = article.visibleSETags.usp2;
    usp3Tag = article.visibleSETags.usp3;
    priceTag = article.visibleSETags.fromPrice;
  }
  const newHTML = `
  <article class="product-card" name="${article.articleName}" id="${article.id}">
  ${article.image}
  <div class="product-description">
    <div class="name-and-rating">
      <span class="product-name"
        ><strong>${article.name}</strong></span
      >
      <div class="product-rating">
        <img
          class="rating-icon"
          src="/svg-icons/star-outline.svg"
          alt="star icon for rating"
        />
        <span>New</span>
      </div>
    </div>
    <div class="product-description-line">
      ${usp1Tag}
    </div>
    <div class="product-description-line">
    ${usp2Tag}
    </div>
    <div class="product-description-line">
    ${usp3Tag}
    </div>
    <span class="product-price">
    ${priceTag}
    </span>
  </div>
  </article>
  `;
  return newHTML;
}
