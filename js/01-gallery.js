import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerEl = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML("beforeend", imagesMarkup);

function createItemsMarkup(item) {
    return item.map(({preview, original, description}) => {
            return `<li class = "gallery__item">
            <a class = "gallery__link" href = "${original}">
                <img 
                class = "gallery__image"
                src = "${preview}"
                data-source = "${original}"
                alt = "${description}"
                />
            </a>
            </li>`;
        }).join("");
}

galleryContainerEl.addEventListener("click", onContainerClick);

function onContainerClick(e){
    e.preventDefault();

    if (!e.target.classList.contains("gallery__image")){ 
        return;
    }
    const instance = basicLightbox.create(`
    <img scr = "${e.target.dataset.source}" width="800" height="600">`)

    instance.show()    
};


