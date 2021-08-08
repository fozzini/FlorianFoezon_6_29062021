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
  for (let i = 0; i < 6 ; i++){
  const display = await getPhotographers(i);
  let photograph = new NewPhotograph(display);
  photograph.createHtmlCard();
  photograph.createTags(i);
  }
};


/* Click event pour connaitre quelle carte à été choisit */
const cardClickEvent = async () => {
  await displayPhotographers();
  const cardOnClick = document.getElementsByClassName("card");
  for (let i = 0; i < cardOnClick.length; i++) {
    cardOnClick[i].addEventListener("click", () =>{
      location.href="/photographer-page.html?cardSelected="+i;
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
const displayTaggedPhotograph = async (ClickedTag) => {  
  for (let i = 0; i < 6 ; i++){
  const display = await getPhotographers(i);
  const element = ClickedTag.toLowerCase();
  const card = document.getElementsByClassName("card")[i];
  let tagsArray= display.tags;
    if (tagsArray.includes(element) === false) {
      card.style.display = "none" ;
    }else {
      card.style.display = "flex" ;
    }
  }
}

