const url = "../FishEyeData.json";
/* connection au fichier JSON */
const getData = async () => 
  await fetch(url)
  .then((resp) => resp.json())
  .catch((e) => console.log("une erreur c'est produite", e)); 
  
/* Sélection des photographes */
const getPhotographers = async (i) => {
  const { photographers } = await getData();
  return photographers[i];
}
/* Sélection des médias */
const getMedia = async () => {
    const { media } = await getData();
    return media;
}

export {getData};
export {getPhotographers};
export {getMedia};
