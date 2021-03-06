
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
    return `<div tabindex="-1" id="${this.id}" class="card">
    <a href='photographer-page.html?cardSelected=${this.number}&id=${this.id}' 
     aria-label = "Le photographe ${this.name} qui vient de ${this.city} en 
    ${this.country} Ce photographe est spécialisé en ${this.tags}, sont tarif est de ${this.price} euros par jours, Sa devise est ${this.tagline}" 
    class="card__vignette"><div class="card__picture"> 
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
    return ` <div tabindex="-1" role="dialog" aria-hidden="true" id="slider" class="slider">
    <span id="closeSlider" class="closeSlider" aria-label="Close dialog" alt="Close dialog"></span>
    <i id="chevron-left" class="fas fa-chevron-left" aria-label="image précédente" alt="previous image" ></i>
    <i id="chevron-right" class="fas fa-chevron-right" aria-label="prochaine image" alt="Next image"></i>
    <div id="slider__container" class="slider__container" aria-label="vue agrandi de l'image">
    </div>
    </div>
    <div tabindex="-1" role="dialog" aria-hidden="true" id="bground" class="bground">
    <div id="content" class="content">
    <span class="close" aria-label="fermer le formulaire"></span>
    <div class="modal-body" aria-labelledby="modal-header" aria-label="Contactez moi ${this.name}">
        <form id='form' name="reserve" action="photographer-page.html" >
        <div id="modal-header" class="modal-header">
            <p>Contactez-moi</p>
            <p>${this.name}</p>
        </div>
        <div class="formData">
            <label id="prenom" for="first">Prénom</label><br>
            <input class="text-control" type="text" id="first" aria-labelledby="prenom" name="first" aria-label="First name"/><br>
        </div>
        <div class="formData">
            <label id="nom" for="last">Nom</label><br>
            <input class="text-control" type="text" id="last" name="last" aria-labelledby="nom" name="last" aria-label="Last name"/><br>
        </div>
        <div class="formData">
            <label id="mail" for="email">E-mail</label><br>
            <input class="text-control" type="email" id="email" name="email" aria-labelledby="mail" name="email" aria-label="Email"/><br>
        </div>
        <div class="formData">
            <label id="message" for="msg">Message</label><br>
            <textarea id="msg" name="user_message" rows="4" aria-labelledby="message" name="" aria-label="Your message"></textarea>
        </div>
        <input id="btn-submit" class="btn-submit button" type="button" value="Envoyer" aria-label="envoyer"/>
        </form>
        </div>
    </div>
    </div>
    <header class="header-photographer">
    <a href="index.html" class="logo"><img class="logo__img img--margin" src="images/logo/logo.svg" aria-label = "retour à la page d'acceuil" alt="Fisheye Home page"></a>
    </header>
    <section id="panel_section">
    <div class="panel">
      <div class="panel panel--split margin">
        <div tabindex="0" aria-label ="${this.name} qui vient de ${this.city} en ${this.country} sa devise est ${this.tagline} spécialisé en ${this.tags}" id="panel__description" class="panel__description">
            <h2 class="panel__name">${this.name}</h2>
            <h3 class="panel__location">${this.city}, ${this.country}</h3>
            <h4 class="panel__quote">${this.tagline}</h4>
        <nav class="nav nav_panel">
          <ul id="ul">
          </ul>
        </nav>
        </div>
        <button id="panel__btn" class="panel__btn" href="#" tabindex="0" aria-label="Contactez-moi">Contactez-moi</button>
      </div>
      <div tabindex="0" class="card card__picture image__panel" aria-label="photo de ${this.name}"><img src="images/Photographers_ID_Photos/${this.portrait}" alt="${this.name}"></div></div>
    </section>
    <article id="article" class="article">
    <div class="article__header">
      <p id="Trier" class="article__title" aria-label=" Trier par">Trier par</p>
      <div class="dropdown">
        <div class="dropdown__content" role="listbox" aria-activedescendant>
          <a tabindex="0" href="" class="dropdown__content__link icon arrow" role="option" aria-label="Trier par Popularité">Popularité</a>
          <a tabindex="0" href="" class="dropdown__content__link dropdown__content__sub" role="option" aria-label="Trier par Date">Date</a>
          <a tabindex="0" href="" class="dropdown__content__link  dropdown__content__sub delborder" role="option" aria-label="Trier par Titre">Titre</a>
        </div>
      </div>
    </div>
    <div id="gallery" class="article-Gallery">
    </div>
    </article>
    <aside id="likes"class="pricelikes">
    <div class="likes-heart"><p id="likes-total"></p><i class="fas fa-heart"></i></div>
    <p aria-label="${this.price} par jour">${this.price}/jour</p>
    </aside>`;
  }
  
  createTags(){
    /* création des tags pour les photographes */
    let array = this.tags;
    const arrayRawHtml = [];
    for (let index = 0; index < array.length; index++) {
      const rawHtml = `<li tabindex="-1" aria-label="Tag ${array[index]}"><a href="#" tabindex="-1" >${array[index]}</a></li>`;
      arrayRawHtml.push(rawHtml);
    };
    return arrayRawHtml.join('');
  }
}

export default NewPhotograph



