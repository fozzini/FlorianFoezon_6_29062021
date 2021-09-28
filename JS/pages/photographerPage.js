import NewPhotograph from '../class/classPhotographer.js';
import MediaFactory from '../class/mediaFactory.js';
import {getPhotographers} from '../utils/getJson.js';
import {displayModaleEvent} from "../layout/modale.js";
import {submitFormEvent} from "../layout/modale.js";
import {closeModaleEvent} from "../layout/modale.js";
import {modaleKeyboardEvent} from "../layout/modale.js";
import {nextArrow}from "../layout/lightbox.js";
import {previousArrow}from "../layout/lightbox.js";
import {displaySliderEvent}from "../layout/lightbox.js";
import {lightBoxKeyboardEvent}from "../layout/lightbox.js";
import {filterMedia}from "../utils/utils.js";
import {mediaSortEvent}from "../utils/utils.js";
import {incrementLikesEvent} from "../layout/likes.js"



/* variables passées par l'url */
let params = new URLSearchParams(document.location.search.substring(1));
let cardSelected = params.get("cardSelected");
let id = params.get("id");
let mediaArray = [];

/* affichage du panneau */
const displayPhotographerPage = async () => {
    const data = await getPhotographers();
    let photograph = new NewPhotograph(data[cardSelected]);
    const modale = document.getElementById("photographer");
    modale.insertAdjacentHTML("afterbegin",photograph.createHtmlPhotographerPage());
    const tagPanel = document.getElementById("ul");
    tagPanel.insertAdjacentHTML("beforeend",photograph.createTags());
};

/* creation des classes media */
let displayMedia =  (media) => {
    const display = media;
    const section = document.getElementById("gallery");
    const slider = document.getElementById("slider__container");
    let mediaHtml = [];
    let sliderHtml =[];
    for (let index = 0; index < display.length; index++) {
        const element = display[index];
        let media = new MediaFactory(element);
        mediaHtml.push(media.createHtml());
        sliderHtml.push(media.createHtmlSlider());
    }
    section.innerHTML = mediaHtml.join("");
    slider.innerHTML = sliderHtml.join("");
    incrementLikesEvent();
    displaySliderEvent();
};
/* affichage du html de la page */
const displayHtml = async() => {
    await displayPhotographerPage();
    await filterMedia();
    displayMedia(mediaArray.sort((a, b) => b.likes - a.likes));
  
};
/* mis en place des events */
const events = async () => {
    await displayHtml();
    displayModaleEvent();
    submitFormEvent();
    closeModaleEvent();
    mediaSortEvent();
    lightBoxKeyboardEvent();
    previousArrow();
    nextArrow();
    modaleKeyboardEvent();
}
events();
export {cardSelected};
export {id};
export{mediaArray};
export{displayMedia};

