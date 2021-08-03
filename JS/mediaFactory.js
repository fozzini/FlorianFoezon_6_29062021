import {filterName} from './photographerPage.js';


class MediaFactory{
  constructor(data){
    this.create = new Image(data);
      image.createHtml();
  //   if(data.hasOwnProperty('image')){
  //     let image = new Image(data);
  //     image.createHtml();
  //   }
  //   else if(data.hasOwnProperty('video')){
  //     let video = new Video(data);
  //     Video.createHtml();
  //   }
  //   else{
  //     throw "typeinconnu !";
  //   }
  // }
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
    // this.name = filterName();
  }
  createHtml(){
    /* création des éléments */
    let section = document.getElementById("gallery");
    let html = section.appendChild(document.createElement("div"));
    html.className = "gallery";
    return (html.innerHTML = `<div class="image"><img src="../images/${this.name}/${this.image}" alt="${this.alt}" ></div>
    <div class="desc">
      <p>${data.title}</p>
      <div class="likes">
        <p>${data.likes}</p>
        <i class="fas fa-heart"></i>
      </div>
    </div>`);
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
    // this.name = filterName();
  }
  createHtml(){
    /* création des éléments */
    let section = document.getElementById("gallery");
    let html = section.appendChild(document.createElement("div"));
    html.className = "gallery";
    return (html.innerHTML = `<div class="video">
    <video><source src="../images/${this.name}/${this.image}" type="video/mp4" alt="${this.alt}"></video>
    </div>
    <div class="desc">
      <p>${data.title}</p>
      <div class="likes">
        <p>${data.likes}</p>
        <i class="fas fa-heart"></i>
      </div>
    </div>`);
  }
}

export default MediaFactory