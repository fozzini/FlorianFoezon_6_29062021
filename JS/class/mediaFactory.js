import {id} from '../pages/photographerPage.js';

/* Factory pattern pour créer des objets de type différents avec le meme constructeur */
class MediaFactory {
  constructor(data){
      if(data.type =='image') {return new Image(data);}
      else if(data.type == 'video') {return new Video(data);}   
      else console.log('objet inconnu');
  }
}

class Image {
  constructor(data) {
    this.alt = data.alt;
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.image = data.image;
    this.tags = data.tags;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
  }
  createHtml(){
    /* création des éléments */
    return `<div class="gallery"><div class="image media"><img src="images/${id}/${this.image}" alt="${this.alt}" ></div>
    <div class="desc">
      <p>${this.title}</p>
      <div class="likes">
        <p class="likesP">${this.likes}</p>
        <i class="fas fa-heart"></i>
      </div>
    </div>
    </div>
    `;
  }
  /* Création des images contenues dans la lightbox */
  createHtmlSlider(){
    return `<div class="slider__image"><img src="images/${id}/${this.image}" alt="${this.alt}" >
    <span class="slider__text">${this.title}</span></div>`;
  }
}

class Video {
  constructor(data){
    this.alt = data.alt;
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.video = data.video;
    this.tags = data.tags;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    
  }
  createHtml(){
    /* création des éléments */
    return `<div class="gallery"><div class="video media">
    <video><source src="images/${id}/${this.video}" type="video/mp4" alt="${this.alt}"></video>
    </div>
    <div class="desc">
      <p>${this.title}</p>
      <div class="likes">
        <p class="likesP">${this.likes}</p>
        <i class="fas fa-heart"></i>
      </div>
    </div></div>`;
  }
  /* Création des vidéos contenues dans la lightbox */
  createHtmlSlider(){
    return `<div class="slider__image"><video controls><source src="images/${id}/${this.video}" alt="${this.alt}" ></video>
    <span class="slider__text">${this.title}</span></div>`;
  }
}

export default MediaFactory