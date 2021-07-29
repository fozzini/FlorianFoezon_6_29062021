
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
  
  createHtml(){ 
        /* création des éléments */
    let section = document.getElementById('section');
    let html = section.appendChild(document.createElement('div'));
    html.className = "card";
    return html.innerHTML = `<a href="#photographer.html" class="card__vignette">
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
  createTags(i){
    let tagsNode= document.getElementsByClassName("ul_tags")[i];
    let array = this.tags;
    for (let index = 0; index < array.length; index++) {
      tagsNode.appendChild(document.createElement('li')).innerHTML = `<a href="#">${array[index]}</a>`;
    };
  }
}


export default NewPhotograph



