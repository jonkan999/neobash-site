export function generateProductHTMLLarge(article, language) {
	/* takes article object and language as an input and generates product html*/
	let usp1Tag = article.visibleENTags.usp1;
	let usp2Tag = article.visibleENTags.usp2;
	let usp3Tag = article.visibleENTags.usp3;
	let priceTag = article.visibleENTags.fromPrice;
	let description = article.visibleENTags.description;
	let goTo = "Go to vendor site";
	let add = "add";
	if (language === "se") {
		usp1Tag = article.visibleSETags.usp1;
		usp2Tag = article.visibleSETags.usp2;
		usp3Tag = article.visibleSETags.usp3;
		description = article.visibleSETags.description;
		goTo = "Besök deras hemsida";
		let add = "Lägg till";
	}
	let remove = "";
	if (document.URL.includes("bash-basket")) {
		remove = "remove-button";
		add = "remove";
	}
	const newHTML = `
  <article class="product-card product-card-large" id="${article.id}">
  <div class="close-btn-anchor">
    <ion-icon class="close-btn" name="close-outline"></ion-icon>
  </div>
  ${article.image}
  <div class="product-description">
    <div class="name-and-rating">
      <span class="product-name"><strong>${article.name}</strong></span>
      <div class="product-rating">
        <img
          class="rating-icon"
          src="../svg-icons/star-outline.svg"
          alt="star icon for rating"
        />
        <span>New</span>
      </div>
    </div>
    <div class="product-description-line">
      <span class="product-description-inner-description">
        ${description}
      </span>
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
    <div class="appended-html">
      <a target="_blank" href="${article.invisibleTags.vendorLink}" class="vendor-link">
        <span>${goTo}</span>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </a>
      <button class="btn add-button ${remove}">${add}</button>
    </div>
  </div>
</article>


  `;
	//adding event listener to add btn
	return newHTML;
}
