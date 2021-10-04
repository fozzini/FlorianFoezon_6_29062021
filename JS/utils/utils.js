
import {getMedia} from '../utils/getJson.js';
import { mediaArray,displayMedia,id } from '../pages/photographerPage.js';

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
/* Evènement de triage des photos */
const mediaSortEvent = () => {
    const slots=document.getElementsByClassName("dropdown__content__link");
    for (let i = 0; i < slots.length; i++) {
        slots[i].addEventListener("click", (e) =>{mediaSort(i, e)})
        slots[i].onkeydown = (e) => {if(e.key === "Enter"){mediaSort(i)}}
    }
}
/* Triage des photos */
const mediaSort = (i, e) =>{
    const slots=document.getElementsByClassName("dropdown__content__link");
    e.preventDefault();
    switch (slots[i].innerHTML) {
        case "Popularité":
            displayMedia(mediaArray.sort((a, b) => b.likes - a.likes));
            configSort("popularity");
            break;
        case "Date":
            displayMedia(mediaArray.sort(function (a, b) {
                var dateA = new Date(a.date), dateB = new Date(b.date)
                return dateA - dateB
            }));
            configSort("date");
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
            configSort("title");
            break;
    }
}
/* Configuration du triage */
const configSort = (config) => {
    const slots=document.getElementsByClassName("dropdown__content__link");
    let a=0;
    let b=1;
    let c=2;

    if (config == "date"){
        a=2;b=0;c=1;
    }
    else if (config == "title"){
        a=1;b=2;c=0;
    }
    else{}
    
    slots[a].innerHTML = "Popularité";
    slots[a].setAttribute("aria-label", "Trier par Popularité");
    slots[b].innerHTML = "Date";
    slots[b].setAttribute("aria-label", "Trier par Date");
    slots[c].innerHTML = "Titre";
    slots[c].setAttribute("aria-label", "Trier par Titre");
}


export{filterMedia}
export{mediaSortEvent}
