import NewPhotograph from './classPhotographer.js';
import MediaFactory from './mediaFactory.js';
import {getPhotographers} from './getJson.js';
import {getMedia} from './getJson.js';



/* variables passées par l'url */
let params = new URLSearchParams(document.location.search.substring(1));
let cardSelected = parseInt(params.get("cardSelected"), 10);

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
    await displayPhotographerPage(cardSelected);
    const display = await filterMedia();
    for (let index = 0; index < display.length; index++) {
        const element = display[index];
        new MediaFactory(element);
    }
};

const displayModaleEvent = async () => {
    await displayMedia();
    const btnContact = document.getElementById("panel__btn");
    btnContact.addEventListener("click", () =>{
        const modale = document.getElementsByClassName("bground")[0];
        modale.style.display = "flex";
    })
};
const closeModaleEvent = async () => {
    await submitFormEvent();
    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.addEventListener("click", () =>{
        const modale = document.getElementsByClassName("bground")[0];
        modale.style.display = "none";
    })
}



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

const submitFormEvent = async () => {
    await displayModaleEvent();
    const elt = document.getElementById('msg');
    const submitForm = document.getElementById("btn-submit");
    submitForm.addEventListener("click", () =>{
        const modale = document.getElementsByClassName("bground")[0];
        modale.style.display = "none";
        console.log(elt.value);
    })
}

closeModaleEvent();

export {firstName};

