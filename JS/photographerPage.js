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
    const likes = document.getElementById("likes");
    likes.insertAdjacentHTML("afterbegin",photograph.createLikesPrice());
};

/* creation des classes media */
const displayMedia = async () => {
    const display = await filterMedia();
    for (let index = 0; index < display.length; index++) {
        const element = display[index];
        let media = new MediaFactory(element);
        const section = document.getElementById("gallery");
        section.insertAdjacentHTML("beforeend", media.createHtml())
    }
};

/* filtrage des medias par rapport au photographe */
const filterMedia = async () => {
    const data = await getMedia();
    let filtered = data.filter((e) => {
        return e.photographerId == id;
    });
    return filtered
};

const incrementLikesEvent = () => {
    const container = document.getElementsByClassName("fas fa-heart");
    // enlever un coeur en ciblant mieux
    const totalLikes = document.getElementById("likes-total")
    for (let i = 0; i < container.length; i++) {
        const number = document.getElementsByClassName("likesP")[i];
        const element = number.innerText;
        const parsing = parseInt(element);
        totalLikes.innerText += parsing;
        console.log(number)

        container[i].addEventListener("click", () =>{
        const numberParsed = parseInt(number.innerText);
        number.innerText = ++numberParsed;
        })
    }
}

const displayHtml = async() => {
    await displayPhotographerPage();
    await displayMedia();
    
};

const events = async () => {
    await displayHtml();
    displayModaleEvent();
    submitFormEvent();
    closeModaleEvent();
    incrementLikesEvent();
}

events();




export {cardSelected};
export {id};

