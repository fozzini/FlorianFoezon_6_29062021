import  NewPhotograph from './classPhotographer.js';
import { getPhotographers } from './getJson.js';



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



