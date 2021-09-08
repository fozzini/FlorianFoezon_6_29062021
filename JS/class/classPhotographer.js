
class NewPhotograph{
  constructor(data){
    this.name = data.name;
    this.number = data.number;
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
    return `<div tabindex="0" id="${this.id}" class="card" aria-label = "Le photographe ${this.name} qui vient de ${this.city} en ${this.country}.Ce photographe est spécialisé en ${this.tags}, sont tarif est de ${this.price}.Sa devise est ${this.tagline}  "><a href='photographer-page.html?cardSelected=${this.number}&id=${this.id}' class="card__vignette"><div class="card__picture"> 
    <img src="images/Photographers_ID_Photos/${this.portrait}" alt="id_${this.name}">
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
  }
  
  createHtmlPhotographerPage(){
    /* création de la page photographe */
    return ` <div tabindex="0" id="slider" class="slider">
    <span id="closeSlider" class="closeSlider" aria-label="Close dialog" alt="Close dialog"></span>
    <i id="chevron-left" class="fas fa-chevron-left" aria-label="previous image" alt="previous image" ></i>
    <i id="chevron-right" class="fas fa-chevron-right" aria-label="Next image" alt="Next image"></i>
    <div id="slider__container" class="slider__container" aria-label="image closeup view">
    </div>
    </div>
    <div tabindex="0" id="bground" class="bground">
    <div id="content" class="content">
    <span class="close" aria-label="Close Contact form"></span>
    <div class="modal-body" aria-labelledby="modal-header" aria-label="Contact me ${this.name}">
        <form name="reserve" action="photographer-page.html" >
        <div id="modal-header" class="modal-header">
            <p>Contactez-moi</p>
            <p>${this.name}</p>
        </div>
        <div class="formData">
            <label id="prenom" for="first">Prénom</label><br>
            <input class="text-control" type="text" id="first" aria-labelledby="prenom" name="first"aria-label="First name"/><br>
        </div>
        <div class="formData">
            <label id="nom" for="last">Nom</label><br>
            <input class="text-control" type="text" id="last" name="last" aria-labelledby="nom" name="first"aria-label="Last name"/><br>
        </div>
        <div class="formData">
            <label id="mail" for="email">E-mail</label><br>
            <input class="text-control" type="email" id="email" name="email" aria-labelledby="mail" name="first"aria-label="Email"/><br>
        </div>
        <div class="formData">
            <label id="message" for="msg">Message</label><br>
            <textarea id="msg" name="user_message" rows="4" aria-labelledby="message" name="first"aria-label="Your message"></textarea>
        </div>
        <input id="btn-submit" class="btn-submit button" type="button" value="Envoyer" aria-label="send"/>
        </form>
        </div>
    </div>
    </div>
    <header class="header-photographer">
    <a href="index.html" class="logo"><img src="images/logo/logo.svg" alt="Fisheye Home page"></a>
    </header>
    <section id="panel_section">
    <div class="panel">
      <div class="panel panel--split">
        <div id="panel__description" class="panel__description">
            <h2 class="panel__name" aria-label="${this.name}">${this.name}</h2>
            <h3 class="panel__location">${this.city}, ${this.country}</h3>
            <h4 class="panel__quote">${this.tagline}</h4>
        <nav class="nav">
          <ul id="ul">
          </ul>
        </nav>
        </div>
        <a id="panel__btn" class="panel__btn" href="#" aria-label="Contact Me">Contactez-moi</a>
      </div>
      <div class="card card__picture" aria-label="${this.name}"><img src="images/Photographers_ID_Photos/${this.portrait}" alt="${this.name}"></div></div>
    </section>
    <article id="article" class="article">
    <div class="article__header">
      <p id="Trier" class="article__title" aria-label=" Trier par">Trier par</p>
      <div class="dropdown">
        <div class="dropdown__content">
          <a href="" class="dropdown__content__link icon arrow" aria-labelledby="Trier">Popularité</a>
          <a href="" class="dropdown__content__link dropdown__content__sub" aria-labelledby="Trier">Date</a>
          <a href="" class="dropdown__content__link  dropdown__content__sub delborder" aria-labelledby="Trier">Titre</a>
        </div>
      </div>
    </div>
    <div id="gallery" class="article-Gallery">
    </div>
    </article>
    <aside id="likes"class="pricelikes">
    <p id="likes-total"></p><i class="fas fa-heart"></i>
    <p>${this.price}/jour</p>
    </aside>`;
  }
  
  createTags(){
    /* création des tags pour les photographes */
    let array = this.tags;
    const arrayRawHtml = [];
    for (let index = 0; index < array.length; index++) {
      const rawHtml = `<li><a href="#" aria-label="Tag ${array[index]}">${array[index]}</a></li>`;
      arrayRawHtml.push(rawHtml);
    };
    return arrayRawHtml.join('');
  }
}

export default NewPhotograph



