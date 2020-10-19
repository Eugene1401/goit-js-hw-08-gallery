

"use strict";
import galleryItems from "./gallery-items.js";


const markupRender = function() {
  return galleryItems.reduce(
    (acc, item) =>
      acc +
      ` <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
    </a>
  </li> `,
    ""
  );
};

const galleryList = document.querySelector(".js-gallery");
galleryList.insertAdjacentHTML("beforeend", markupRender());



const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");

const openImg = function(event) {
  event.preventDefault();
  if (event.target !== event.currentTarget) {
    const newUrl = event.target.dataset.source;

    lightboxImage.src = newUrl;
    lightbox.classList.add("is-open");
  }
  return;
};

galleryList.addEventListener("click", openImg);



const closeBtn = document.querySelector(".lightbox__button");

const closeImg = function() {
  lightboxImage.src = "";
  lightbox.classList.remove("is-open");
};

closeBtn.addEventListener("click", closeImg);


const closeImgByOverlayClick = function(event) {
  if (event.target !== lightboxImage) {
    closeImg();
  }
  return;
};

lightbox.addEventListener("click", closeImgByOverlayClick);



const closeImgByEsc = function(event) {
  if (event.code === "Escape") {
    closeImg();
  }
};
window.addEventListener("keydown", closeImgByEsc);



