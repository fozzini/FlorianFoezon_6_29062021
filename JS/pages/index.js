import  NewPhotograph from '../class/classPhotographer.js';
import { getPhotographers } from '../utils/getJson.js';

const tagMenu = ["Portrait","Art","Fashion","Architecture","Travel","Sport","Animals","Events"];

/* Création du menu Tag */
const displayTagMenu = () => {
  const tag = document.getElementById("tagMenu");
  for (let index = 0; index < tagMenu.length; index++) {
    const element = tagMenu[index];
    const tagHtml = `<li tabindex="0" aria-label="Tag ${element}" class="nav__tag"><a href="#" tabindex="-1">${element}</a></li>`
    tag.insertAdjacentHTML("beforeend", tagHtml)
  }
};
displayTagMenu();

/* création des photographes et affichage */
const displayPhotographers = async () => {   
  const section = document.getElementById('section');
  const data = await getPhotographers();
  for (let i = 0; i < data.length ; i++){
  let photograph = new NewPhotograph(data[i]);
  section.insertAdjacentHTML("beforeend",photograph.createHtmlCard());
  const tagNode = document.querySelectorAll(".ul_tags")[i];
  tagNode.insertAdjacentHTML("beforeend",photograph.createTags());
  }
};
displayPhotographers();

/* Click event pour connaitre quel tag à été selectionné */
const tagClickEvent = () => {
  const tagOnClick = document.getElementsByClassName("nav__tag");
  for (let i = 0; i < tagOnClick.length; i++) {
    tagOnClick[i].addEventListener("click",() =>{displayTaggedPhotograph(tagMenu[i]);})
  }
}
tagClickEvent();

// event pour les évenements de selection au clavier.
const tagKeyboardEvent = () => {
  const tagOnClick = document.getElementsByClassName("nav__tag");
  for (let i = 0; i < tagOnClick.length; i++) {
    tagOnClick[i].addEventListener('keydown',e => {
      if(e.key === "Enter"){
        displayTaggedPhotograph(tagMenu[i]);
      }
    });
  }
} 
tagKeyboardEvent();

/* Affiche les photographes suivant leurs tags */
const displayTaggedPhotograph = (ClickedTag) => {  
  for (let i = 0; i < 6 ; i++){
    const element = ClickedTag.toLowerCase();
    const card = document.getElementsByClassName("card")[i];
    const tagsArray = card.querySelectorAll(".nav a");
    const textArray = [];
    tagsArray.forEach(tag => {textArray.push(tag.innerHTML);});
    if (textArray.includes(element) === false) {
      card.style.display = "none" ;
      }
      else {
        card.style.display = "flex" ;
      }
  }
} 

// On scroll, Show/Hide the button
window.onscroll = () => {
  window.scrollY > 1
    ? (cta.style.display = 'flex')
    : (cta.style.display = 'none')
}
// On Click, Scroll to the Top of Page
cta.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
// On Enter, Scroll to the Top of Page
cta.onkeydown = (e) => {if(e.key === "Enter"){ window.scrollTo({ top: 0, behavior: 'smooth' })}}



