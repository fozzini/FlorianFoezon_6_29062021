import {firstName} from './photographerPage.js';

class MediaFactory {
  constructor(data){
      if(data.type =='image') {let media = new Image(data);media.createHtml();}
      else if(data.type == 'video') {let media = new Video(data);media.createHtml();}   
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
  async createHtml(){
    
    /* création des éléments */
    const section = document.getElementById("gallery");
    const rawHtml = `<div class="gallery"><div class="image"><img src="../images/${await firstName()}/${this.image}" alt="${this.alt}" ></div>
    <div class="desc">
      <p>${this.title}</p>
      <div class="likes">
        <p class="likesP">${this.likes}</p>
        <i class="fas fa-heart"></i>
      </div>
    </div></div>`;
    return section.insertAdjacentHTML("beforeend", rawHtml)
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
  async createHtml(){
    
    /* création des éléments */
    const section = document.getElementById("gallery");
    const rawHtml = `<div class="gallery"><div class="video">
    <video controls><source src="../images/${await firstName()}/${this.video}" type="video/mp4" alt="${this.alt}"></video>
    </div>
    <div class="desc">
      <p>${this.title}</p>
      <div class="likes">
        <p>${this.likes}</p>
        <i class="fas fa-heart"></i>
      </div>
    </div></div>`;
    return section.insertAdjacentHTML("beforeend", rawHtml)
  }
}

export default MediaFactory