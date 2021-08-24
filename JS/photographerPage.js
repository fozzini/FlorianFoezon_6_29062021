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
let likes = [];


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
    let mediaHtml = [];
    for (let index = 0; index < display.length; index++) {
        const element = display[index];
        let media = new MediaFactory(element);
        mediaHtml.push(media.createHtml());
    }
    section.innerHTML = mediaHtml;
    incrementLikesEvent();
    displaySliderEvent();
};
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


const totalLike = () => {
    const nbr = document.getElementsByClassName("likesP");
    let Sum = 0;
    for (let index = 0; index < nbr.length; index++) {
        Sum += parseInt(nbr[index].innerHTML,10);
    };
    return Sum;
};
const incrementLikesEvent = () => {
    const container = document.getElementsByClassName("fas fa-heart");
    const nbr = document.getElementsByClassName("likesP");
    const totalLikes = document.getElementById("likes-total");
    totalLikes.innerHTML = totalLike();
    for (let i = 0; i < container.length; i++) {
        container[i].addEventListener("click", () =>{
        nbr[i].innerHTML = parseInt(nbr[i].innerHTML,10)+1;
            if (likes[i] == 1) {
                nbr[i].innerHTML = parseInt(nbr[i].innerHTML,10)-2;
                likes[i] = 0;            
            } else {
                likes[i] = 1;
            }
        console.log(likes[i])
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
const displaySliderEvent = () => {
    const slider = document.getElementById("slider");
    const image = document.getElementsByClassName("media");
    for (let i = 0; i < image.length; i++) {
        const element = image[i];
        element.addEventListener("click", () =>{
        slider.style.display = "flex";
        let mediaImage = new MediaFactory(mediaArray[i]);
        slider.innerHTML = mediaImage.createHtmlSlider();
        closeSliderEvent();
        nextElementEvent();
        }) 
    } 
};
const closeSliderEvent = () => {
    const closeBtn = document.getElementById("closeSlider");
    closeBtn.addEventListener("click", () =>{
        const slider = document.getElementById("slider");
        slider.style.display = "none";
    })
}
const displayHtml = async() => {
    await displayPhotographerPage();
    await filterMedia();
    displayMedia(mediaArray.sort((a, b) => b.likes - a.likes));
  
};
const nextElementEvent = () => {
    let element = document.getElementById("slider__image")
    let before = window.getComputedStyle(element, '::before');
    let beforeContent = before.getPropertyValue('content')
    let after = window.getComputedStyle(element, '::after');
    let afterContent = after.getPropertyValue('content')
    // beforeContent.addEventListener("click", () =>{
    //     console.log("arrière");
    // })
    // afterContent.addEventListener("click", () =>{
    //     console.log("avant");
    // })
};
const previousElementEvent = () => {};

const events = async () => {
    await displayHtml();
    displayModaleEvent();
    submitFormEvent();
    closeModaleEvent();
    mediaSortEvent();
}
events();
export {cardSelected};
export {id};

