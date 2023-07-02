import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerEl = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML("beforeend", imagesMarkup);

function createItemsMarkup(item) {
    return galleryItems.map(({preview, original, description}) => {
            return `<div class = "gallery__item">
            <a class = "gallery__link" href = "${original}">
                <img 
                class = "gallery__image"
                src = "${preview}"
                data-source = "${original}"
                alt = "${description}"
                />
            </a>
            </div>`;
        }).join("");
}
galleryContainerEl.addEventListener("click", onContainerClick);

function onContainerClick(e){

    if (e.target.classList.contains("gallery")) 
        return;
        const source = e.target.dataset.source;

    const instance = basicLightbox.create(
        `<img scr = "${source}" width = "800" height = "600">`);

    instance.show()    
};


