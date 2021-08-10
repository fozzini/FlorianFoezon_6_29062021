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

async function htmlCreation () {
    await displayPhotographerPage(cardSelected);
    await displayMedia();
}
async function events () {
    await htmlCreation();
    displayModaleEvent();
    submitFormEvent();
    closeModaleEvent(); 
    incrementLikesEvent();
} 
function start (){
    events();
}
/* affichage du panneau */
const displayPhotographerPage = async (i) => {
    const display = await getPhotographers(i);
    let photograph = new NewPhotograph(display);
    photograph.createHtmlPanel();
    photograph.createTagsPanel();
    photograph.createModale();
};
/* creation des classes media */
const displayMedia = async () => {
    const display = await filterMedia();
    for (let index = 0; index < display.length; index++) {
        const element = display[index];
        new MediaFactory(element);
    }
};


/* filtrage du nom complet pour extraire le prénom et l'utiliser pour la source */
const firstName = async () => {
    const person = await getPhotographers(cardSelected);
    let fullName = person.name;
    let firstName = fullName.substring(0, fullName.indexOf(' '));
    return firstName;
};

/* filtrage des medias par rapport au photographe */
const filterMedia = async () => {
    const data = await getMedia();
    const person = await getPhotographers(cardSelected);
    let filtered = [];
    for (let index = 0; index < data.length; index++) {
        let media = data[index];
        if (media.photographerId == person.id) {
            filtered.push(media);
        }
    }
    return filtered;
};
const incrementLikesEvent = () => {
    const container = document.getElementsByClassName("fas fa-heart");
    console.log(container.length)
    for (let i = 0; i < container.length; i++) {
        container[i].addEventListener("click", () =>{
        const number = document.getElementsByClassName("likesP")[i];
        console.log(number);
        const numberStr = number.innerText;
        const numberParsed = parseInt(numberStr);
        const increment = numberParsed + 1;
        // const numberStr2 = increment.toString();
        number.innerHTML = increment;
        console.log(increment);
        console.log("hello")
        })
    }
}
start();


export {firstName};

