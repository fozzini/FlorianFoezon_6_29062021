
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
    /* création des cartes photographes */
    const section = document.getElementById('section');
    const rawHtml = `<div class="card"><a href="#" class="card__vignette"><div class="card__picture"> 
    <img src="../images/Photographers_ID_Photos/${this.portrait}" alt="id_${this.name}">
    </div>
    <h2 class="card__name">${this.name}</h2>
    <h3 class="card__location">${this.city}, ${this.country}</h3>
    <h4 class="card__quote">${this.tagline}</h4>
    <h5 class="card__price">${this.price}/jours</h5>
    </a>
    <nav class="nav">
      <ul class="ul_tags"></ul>
    </nav>
    </div>`;
    return section.insertAdjacentHTML("beforeend",rawHtml);
  }
  
  createHtmlPanel(){
    /* création du panneau photographe */
    const sectionPanel = document.getElementById('panel_section');
    const rawHtml = `<div class="panel">
    <div class="panel panel--split">
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
    <div class="card card__picture"><img src="../images/Photographers_ID_Photos/${this.portrait}" alt="${this.name}"></div></div>`;
    return sectionPanel.insertAdjacentHTML("beforeend",rawHtml);
  }
  
  createTags(i){
    /* création des tags pour les photographes */
    const tagNode = document.getElementsByClassName("ul_tags")[i];
    let array = this.tags;
    for (let index = 0; index < array.length; index++) {
      const rawHtml = `<li><a href="#">${array[index]}</a></li>`;
      tagNode.insertAdjacentHTML("beforeend",rawHtml);
    };
  }
  createTagsPanel(){
    /* création des tags pour le photographe */
    const tagNode= document.getElementById("ul");
    let array = this.tags;
    for (let index = 0; index < array.length; index++) {
      const rawHtml = `<li><a href="#">${array[index]}</a></li>`;
      tagNode.insertAdjacentHTML("beforeend",rawHtml);
    };
  }
}

export default NewPhotograph



