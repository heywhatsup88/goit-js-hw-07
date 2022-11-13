import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Делаем разметку

const galleryMarkup = createGalleryCardMarkup(galleryItems);

function createGalleryCardMarkup(galleryItem) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`;
    })
    .join("");
}

// Рендерим в разметку

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

// Делегируем событие клика на div галерею

galleryEl.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  // simpleLightbox

  `<div class="gallery">
    <a href="${event.target.getAttribute(
      "href"
    )}"><img src="${event.target.getAttribute(
    "src"
  )}" alt="${event.target.getAttribute("alt")}" /></a>
    <a href="${event.target.getAttribute(
      "href"
    )}"><img src="${event.target.getAttribute(
    "src"
  )}" alt="${event.target.getAttribute("alt")}"/></a>
</div>
    `;

  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    showCounter: false,
  });
  gallery.on("show.simplelightbox");
}

// console.log(galleryMarkup);
