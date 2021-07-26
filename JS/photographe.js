
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
  }
  get createHtml(){ 
        /* création des éléments */
    let section = document.getElementById('section');
    let cardNode = document.createElement('div');
    let vignetteNode = document.createElement('a');
    let card_pictureNode = document.createElement('div');
    let pictureNode = document.createElement('img');
    let nameNode = document.createElement('h2');
    let locationNode = document.createElement('h3');
    let quoteNode = document.createElement('h4');
    let priceNode = document.createElement('h5');
    let navNode = document.createElement('nav');
    let ulNode = document.createElement('ul');
    /* création du texte */
    let nameTexte = document.createTextNode(this.name);
    let locationTexte = document.createTextNode(this.city +", "+ this.country);
    let quoteTexte = document.createTextNode(this.tagline);
    let priceTexte = document.createTextNode(this.price +"/jours");
    /* création des attributs */
    cardNode.className = "card";
    vignetteNode.href = "#photographer.html";
    vignetteNode.className = "card__vignette"
    card_pictureNode.className = "card__picture";
    pictureNode.src = "../images/Photographers_ID_Photos/"+this.portrait;
    pictureNode.alt = "id_mimi";
    nameNode.className = "card__name";
    locationNode.className ="card__location";
    quoteNode.className = "card__quote";
    priceNode.className = "card__price";
    navNode.className = "nav";
    /* insertion des éléments */
    section.appendChild(cardNode);
    cardNode.appendChild(vignetteNode);
    cardNode.appendChild(navNode);
    vignetteNode.appendChild(card_pictureNode);
    vignetteNode.appendChild(nameNode);
    vignetteNode.appendChild(locationNode);
    vignetteNode.appendChild(quoteNode);
    vignetteNode.appendChild(priceNode);
    card_pictureNode.appendChild(pictureNode);
    navNode.appendChild(ulNode);
    /* insertion du texte */
    nameNode.appendChild(nameTexte);
    locationNode.appendChild(locationTexte)
    quoteNode.appendChild(quoteTexte)
    priceNode.appendChild(priceTexte) 
  }
}


export default NewPhotograph



