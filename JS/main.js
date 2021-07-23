
import  NewPhotograph from './photographe.js';

const url = "../FishEyeData.json"

/* const getData = async () =>
  await fetch(url)
    .then((res) => res.json())
    .catch((err) =>
      console.log("An error occurs when fetching photographers", err)
    );
 */
const getData = async() =>
  await fetch(url)
  .then(resp => resp.json())
  .catch (e => console.log("une erreur c'est produite",e))
    

const init = async () => {
  const { photographers } = await getData();
  console.log(photographers);
};

init();

/* const getData = async() =>{
  await fetch(url)
  .then(resp => resp.json())
  .then(data => data)
  .catch (e => console.log("une erreur c'est produite",e))
  /* .then(data => data.photographers[index]) */
  
/* }


const getPhotographers = async()=>{
  const photographers = await getData()
  console.log(photographers)
}

getPhotographers() */ 
/* function getMedia(index){ 
  fetch("./FishEyeData.json")
  .then(response => response.json())
  .then(media => media.media[index])
} */


 



