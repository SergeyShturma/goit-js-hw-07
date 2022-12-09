import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`,
  ''
);

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const chosenImg = e.target.getAttribute('data-source');

  const instance = basicLightbox.create(`
    <img src="${chosenImg}" width="800" height="600">
`);

  instance.show();

  gallery.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      instance.close();
    }
  });
});
