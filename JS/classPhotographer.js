
class NewPhotograph{
  constructor(data){
    this.name = data.name;
    this.id = data.id;
    this.city = data.city;
    this.country = data.country;
    this.tags = data.tags;
    this.tagline = data.tagline;
    this.price = data.price;
    this.portrait = data.portrait;
  }
  
  createHtmlCard(){ 
        /* création des éléments */
    let section = document.getElementById('section');
    let html = section.appendChild(document.createElement('div'));
    html.className = "card";
    return html.innerHTML = `<a href="#" class="card__vignette">
        <div class="card__picture"> 
          <img src="../images/Photographers_ID_Photos/${this.portrait}" alt="id_${this.name}">
        </div>
        <h2 class="card__name">${this.name}</h2>
        <h3 class="card__location">${this.city}, ${this.country}</h3>
        <h4 class="card__quote">${this.tagline}</h4>
        <h5 class="card__price">${this.price}/jours</h5>
      </a>
      <nav class="nav">
        <ul class="ul_tags"></ul>
      </nav>`
  }
  
  createHtmlPanel(){
    let sectionPanel = document.getElementById('panel_section');
    let htmlPanel = sectionPanel.appendChild(document.createElement('div'));
    htmlPanel.className = "panel";
    return htmlPanel.innerHTML = `<div class="panel panel--split">
      <div class="panel__description">
          <h2 class="panel__name">${this.name}</h2>
          <h3 class="panel__location">${this.city}, ${this.country}</h3>
          <h4 class="panel__quote">${this.tagline}</h4>
      <nav class="nav">
        <ul id="ul">
        </ul>
      </nav>
      </div>
      <a class="panel__btn" href="#">Contactez-moi</a>
    </div>
    <div class="card card__picture"><img src="../images/Photographers_ID_Photos/${this.portrait}" alt="${this.name}"></div>
    `
  }
  
  createTags(i){
    let tagsNode = document.getElementsByClassName("ul_tags")[i];
    let array = this.tags;
    for (let index = 0; index < array.length; index++) {
      tagsNode.appendChild(document.createElement('li')).innerHTML = `<a href="#">${array[index]}</a>`;
    };
  }
  createTagsPanel(){
    let tagNode= document.getElementById("ul");
    let array = this.tags;
    for (let index = 0; index < array.length; index++) {
      tagNode.appendChild(document.createElement('li')).innerHTML = `<a href="#">${array[index]}</a>`;
    };
  }

}


export default NewPhotograph



