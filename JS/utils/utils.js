
import {getMedia} from '../utils/getJson.js';
import { mediaArray } from '../pages/photographerPage.js';
import { displayMedia } from '../pages/photographerPage.js';
import { id } from '../pages/photographerPage.js';

/* filtrage des medias par rapport au photographe */
const filterMedia = async () => {
    const data = await getMedia();
    let filtered = data.filter((e) => {
        return e.photographerId == id;
    });
    for (let i = 0; i < filtered.length; i++) {
        const element = filtered[i];
        mediaArray.push(element);
    }
};
/* triage des photos */
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
        slots[i].addEventListener("click", (e) =>{
            e.preventDefault();
            switch (slots[i].innerHTML) {
                case "Popularité":
                    displayMedia(mediaArray.sort((a, b) => b.likes - a.likes));
                    configPopularity();
                    break;
                case "Date":
                    displayMedia(mediaArray.sort(function (a, b) {
                        var dateA = new Date(a.date), dateB = new Date(b.date)
                        return dateA - dateB
                    }));
                    configDate();
                    break;
                case "Titre":
                    displayMedia(mediaArray.sort((a, b) => {
                        let fa = a.title,
                            fb = b.title;
                        if (fa < fb) {
                            return -1;
                        }
                        if (fa > fb) {
                            return 1;
                        }
                        return 0;
                    }));
                    configTitle();
                    break;
            }
        })
    }
}

export{filterMedia}
export{mediaSortEvent}
