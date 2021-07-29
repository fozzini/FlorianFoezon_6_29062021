
import  NewPhotograph from './photographe.js';

const url = "../FishEyeData.json";
/* connection au fichier JSON */
const getData = async () =>
  await fetch(url)
    .then((resp) => resp.json())
    .catch((e) => console.log("une erreur c'est produite", e));
/* Sélection des photographes */
const getPhotographers = async (i) => {
  const { photographers } = await getData();
  return photographers[i]
}

/* sélection des médias */
const getMedia = async () => {
  const { media } = await getData();
  console.log(media);
};
// getMedia();

/* création des photographes et affichage */
const displayPhotographers = async () => {   
  for (let i = 0; i < 6 ; i++){
  const display = await getPhotographers(i);
  let photograph = new NewPhotograph(display);
  photograph.createHtml();
  photograph.createTags(i);
  }
};
displayPhotographers();






