import  NewPhotograph from './classPhotographer.js';
import { getPhotographers } from './getJson.js';

const tagMenu = ["Portrait","Art","Fashion","Architecture","Travel","Sport","Animals","Events"];

/* Création du menu Tag */
const displayTagMenu = () => {
  const tag = document.getElementById("tagMenu");
  for (let index = 0; index < tagMenu.length; index++) {
    const element = tagMenu[index];
    const tagHtml = `<li class="nav__tag"><a href="#">${element}</a></li>`
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


/* Click event pour connaitre quelle carte à été choisit */
const cardClickEvent = async () => {
  await displayPhotographers();
  const cardOnClick = document.getElementsByClassName("card");
  for (let i = 0; i < cardOnClick.length; i++) {
    cardOnClick[i].addEventListener("click", () =>{
      const id = cardOnClick[i].id;
      location.href="/photographer-page.html?cardSelected="+i+"&id="+id;
    })
  }
}
cardClickEvent();

/* Click event pour connaitre quel tag à été selectionné */
const tagClickEvent = () => {
  const tagOnClick = document.getElementsByClassName("nav__tag");
  for (let i = 0; i < tagOnClick.length; i++) {
    tagOnClick[i].addEventListener("click", async () =>{await displayTaggedPhotograph(tagMenu[i]);})
  }
}
tagClickEvent();

/* Affichage les photographes suivant leurs tags */
const displayTaggedPhotograph = (ClickedTag) => {  
  for (let i = 0; i < 6 ; i++){
    const element = ClickedTag.toLowerCase();
    const card = document.getElementsByClassName("card")[i];
    const tagsArray = card.querySelectorAll(".nav a");
    const textArray = [];
    tagsArray.forEach(tag => {textArray.push(tag.innerHTML);});
    if (textArray.includes(element) === false) {
      card.style.visibility = "hidden" ;
      }
      else {
        card.style.visibility = "visible" ;
      }
  }
}

