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
};
displayPhotographerPage(cardSelected);

/* filtrage du nom complet pour extraire le prénom et l'utiliser pour la source */
const filterName = async () => {
    const person = await getPhotographers(cardSelected);
    let fullName = person.name;
    var firstName = fullName.substring(0, fullName.indexOf(' '));
    return firstName;
}
/* filtrage des medias par rapport au photographe */
const filterMedia = async () => {
    const data = await getMedia();
    const person = await getPhotographers(cardSelected);
    var filtered = [];

    for (let index = 0; index < data.length; index++) {
        let media = data[index];
        if (media.photographerId == person.id) {
            filtered.push(media);
        }
    }
    return filtered;
}
/* creation des classes media */
const displayMedia = () => {
    const display = filterMedia();
    for (let index = 0; index < display.length; index++) {
        const element = display[index];
        let media = new MediaFactory(element);
    }
};
displayMedia();
export {filterName};