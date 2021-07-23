
class NewPhotograph{
  constructor(data){
    this.name = data.name;
    this.id = data.id;
    this.city = data.city;
    this.country = data.country;
    this.tags = data.tags   
    this.tagline = data.tagline;
    this.price = data.price;
    this.portrait = data.portrait;
    console.log("coucou " + this.name + this.id + this.city + 
    this.country + this.tags + this.tagline + this.price + this.portrait );
  }
  createHtml(){
    document.createElement("div")
    return `
      <div class="card">
        <a href="photographer-page.html" class="card__vignette">
          <div class="card__picture">
            <img src="${this.portrait}" alt="id_mimi">
          </div>
          <h2 class="card__name">${this.name}</h2>
          <h3 class="card__location">${this.city}, ${this.country}</h3>
          <h4 class="card__quote">${this.tagline}</h4>
          <h5 class="card__price">${this.price}/jour</h5>
        </a>
        <nav class="nav">
          <ul >
              ${this.tags}
          </ul>
        </nav>
      </div>`;
  }
}
export default NewPhotograph



