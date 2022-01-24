import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerEL = document.querySelector('.gallery');
const galleryItemListEl = createColorCardsMarkup(galleryItems);
galleryContainerEL.insertAdjacentHTML('beforeend', galleryItemListEl);

galleryContainerEL.addEventListener('click', onGalleryContainerClick);

function createColorCardsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}"
       alt="${description}" />
    </a> `;
        }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionPosition: 'bottom',
    captionDelay: 250,
});

function onGalleryContainerClick(evt) {

    const isImageSwatchEl = ev.target.classList.contains('gallery__image');
    if (!isImageSwatchEl) {
        return;
    }

    window.addEventListener("keydown", (evt) => {
        if (evt.key === "Escape") {
            instance.close();
        };
    })
}