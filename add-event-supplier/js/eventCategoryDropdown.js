document.addEventListener("DOMContentLoaded", function () {
  const eventCategoryDropdown = document.getElementById("event-category");
  const venuePicturesLabel = document.querySelector(
    'label[for="venue-pictures"]'
  );

  eventCategoryDropdown.addEventListener("change", function () {
    const selectedCategory = eventCategoryDropdown.value;

    if (selectedCategory === "venue") {
      venuePicturesLabel.textContent = "Venue Pictures:";
    } else if (selectedCategory === "catering") {
      venuePicturesLabel.textContent = "Catering Pictures:";
    } else {
      venuePicturesLabel.textContent = ""; // Clear the label
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropArea = document.getElementById("drop-area");
  const thumbnailsContainer = document.getElementById("thumbnails");

  dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropArea.classList.add("drag-over");
  });

  dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("drag-over");
  });

  dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    dropArea.classList.remove("drag-over");

    const files = event.dataTransfer.files;

    for (const file of files) {
      if (file.type.startsWith("image/")) {
        const thumbnail = document.createElement("div");
        thumbnail.className = "thumbnail";
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        thumbnail.appendChild(image);
        thumbnailsContainer.appendChild(thumbnail);
      }
    }
  });
});
