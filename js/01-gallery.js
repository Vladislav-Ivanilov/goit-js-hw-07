import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.table(galleryItems);

const blockGalleryEl = document.querySelector(".gallery");

const creatingGalleryItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
  })
  .join("");

const handelOpenContent = (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  blockGalleryEl.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
};

blockGalleryEl.insertAdjacentHTML("afterbegin", creatingGalleryItems);

blockGalleryEl.addEventListener("click", handelOpenContent);
