import NewPhotograph from './classPhotographer.js';
import MediaFactory from './mediaFactory.js';
import {getPhotographers} from './getJson.js';
import {getMedia} from './getJson.js';
import {displayModaleEvent} from "./modale.js";
import {submitFormEvent} from "./modale.js";
import {closeModaleEvent} from "./modale.js";


/* variables passées par l'url */
let params = new URLSearchParams(document.location.search.substring(1));
let cardSelected = parseInt(params.get("cardSelected"), 10);
let id = params.get("id");
let mediaArray = [];

/* affichage du panneau */
const displayPhotographerPage = async () => {
    const data = await getPhotographers();
    let photograph = new NewPhotograph(data[cardSelected]);
    const sectionPanel = document.getElementById('panel_section');
    sectionPanel.insertAdjacentHTML("beforeend",photograph.createHtmlPanel());
    const tagPanel = document.getElementById("ul");
    tagPanel.insertAdjacentHTML("beforeend",photograph.createTags());
    const modale = document.getElementById("photographer");
    modale.insertAdjacentHTML("afterbegin",photograph.createModale());
    modale.insertAdjacentHTML("afterbegin",photograph.createSlider());
    const likes = document.getElementById("likes");
    likes.insertAdjacentHTML("afterbegin",photograph.createLikesPrice());
    const dropDown= document.getElementById("article");
    dropDown.insertAdjacentHTML("afterbegin",photograph.createDropdown());
};

/* creation des classes media */
const displayMedia = async (media) => {
    const display = await media;
    for (let index = 0; index < display.length; index++) {
        const element = display[index];
        let media = new MediaFactory(element);
        const section = document.getElementById("gallery");
        section.insertAdjacentHTML("afterbegin", media.createHtml())
    }
};
/* filtrage des medias par rapport au photographe */
const filterMedia = async () => {
    const data = await getMedia();
    let filtered = data.filter((e) => {
        return e.photographerId == id;
    });
    for (let i = 0; i < filtered.length; i++) {
        const element = filtered[i];
        // const convert = Object.fromEntries(element)
        mediaArray.push(element);
    }
    // console.log(mediaArray[0]);
    return filtered;
};


const totalLike = () => {
    const nbr = document.getElementsByClassName("likesP");
    let sum = 0;
    for (let index = 0; index < nbr.length; index++) {
        sum += parseInt(nbr[index].innerHTML,10);
    };
    return sum
};
const incrementLikesEvent = () => {
    const container = document.getElementsByClassName("fas fa-heart");
    const nbr = document.getElementsByClassName("likesP");
    const totalLikes = document.getElementById("likes-total");
    totalLikes.innerHTML = totalLike();
    for (let i = 0; i < container.length; i++) {
        container[i].addEventListener("click", () =>{
        nbr[i].innerHTML = parseInt(nbr[i].innerHTML,10)+1;
        totalLikes.innerHTML = totalLike(); 
        })
    }
}

const mediaSortEvent = () => {
    const slots=document.getElementsByClassName("dropdown__content__link")
    const configPopularity = ()=>{slots[0].innerHTML = "Popularité";
    slots[1].innerHTML = "Date";
    slots[2].innerHTML = "Titre";};
    const configDate = ()=>{slots[0].innerHTML = "Date";
    slots[1].innerHTML = "Popularité";
    slots[2].innerHTML = "Titre";};
    const configTitle = ()=>{slots[0].innerHTML = "Titre";
    slots[1].innerHTML = "Date";
    slots[2].innerHTML = "Popularité";};
    for (let i = 0; i < slots.length; i++) {
        slots[i].addEventListener("click", () =>{
            switch (slots[i].innerHTML) {
                case "Popularité":
                    configPopularity();
                    displayMedia(mediaArray.sort(function(a, b){return b.likes - a.likes;}))
                    break;
                case "Date":
                    configDate();
                    displayMedia(mediaArray.sort(function(a, b){return a.date - b.date;}))
                    break;
                case "Titre":
                    configTitle();
                    displayMedia(mediaArray.sort(title))
                    break;
            }
        })
    }
}
const displaySliderEvent = () => {
    const slider = document.getElementById("slider");
    const image = document.getElementsByClassName("image");
    console.log(image);
    for (let i = 0; i < image.length; i++) {
        const element = image[i];
        element.addEventListener("click", () =>{
        slider.style.display = "flex";
        }) 
    } 
};
const displayHtml = async() => {
    await displayPhotographerPage();
    await displayMedia(filterMedia());
    
};

const events = async () => {
    await displayHtml();
    displayModaleEvent();
    submitFormEvent();
    closeModaleEvent();
    incrementLikesEvent();
    mediaSortEvent();
    displaySliderEvent();
    // const file = mediaArray.sort(function(a, b){return a.likes - b.likes;});
    // console.log(file);

}

events();





export {cardSelected};
export {id};

