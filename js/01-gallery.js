import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainetEl = document.querySelector('.gallery');
const galleryItemListEl = makeGalleryItemList(galleryItems);
galleryContainetEl.insertAdjacentHTML("beforeend", galleryItemListEl);

galleryContainetEl.addEventListener('click', onGalleryContainerClick);

function makeGalleryItemList(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
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
}

function onGalleryContainerClick(event) {
    evt.preventDefault();
    const isImageSwatchEl = event.target.classList.contains('gallery__image');
    if (!isImageSwatchEl) {
        return;
    }

    const item = event.target.dataset.source
    const instance = basicLighbox.create(`<div class="modal">
           <img src="${item}"> 
    </div>`)


    instance.show()

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            instance.close();
        };
    })
}