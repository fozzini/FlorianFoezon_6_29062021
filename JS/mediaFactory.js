
class MediaFactory{
  constructor(data){
    if(data.type == "image"){
      return new Image(data);
    }
    else if(data.type == "video"){
      return new Video(data);
    }
    else{
      throw "typeinconnu !";
    }
  }
}

class Image {
  constructor(data){
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
  createHtml (){
    return `
    
    `
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
    this.html = function createHtml(){
      return ;
    }
  }
}