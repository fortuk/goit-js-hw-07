import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainetEl = document.querySelector('.gallery');
const galleryItemListEl = makeGalleryItemList(galleryItems);
galleryContainetEl.insertAdjacentHTML("beforeend", galleryItemListEl);

galleryContainetEl.addEventListener('click', onGalleryContainerClick);

function makeGalleryItemList(items) {
    return items
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

function onGalleryContainerClick(ev) {
    ev.preventDefautl();
    const isImageSwatchEl = ev.target.classList.contains('gallery__image');
    if (!isImageSwatchEl) {
        return;
    }

    const item = ev.target.dataset.source
    const instance = basicLighbox.create(`<div class="modal">
           <img src="${item}" width="800" height="600"> 
    </div>`)
    instance.show();
    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            instance.close();
        };
    })
}