
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
    return `<div id="${this.id}" class="card"><a href="#" class="card__vignette"><div class="card__picture"> 
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
    return ` <div id="slider" class="slider">
    <span id="closeSlider" class="closeSlider"></span>
    <i id="chevron-left" class="fas fa-chevron-left" >
    </i><i id="chevron-right" class="fas fa-chevron-right"></i>
    <div id="slider__container" class="slider__container">
    </div></div>
    <div class="bground">
    <div class="content">
    <span class="close"></span>
    <div class="modal-body">
        <form name="reserve" action="photographer-page.html" >
        <div class="modal-header">
            <p>Contactez-moi</p>
            <p>${this.name}</p>
        </div>
        <div class="formData">
            <label for="first">Prénom</label><br>
            <input class="text-control" type="text" id="first" name="first"/><br>
        </div>
        <div class="formData">
            <label for="last">Nom</label><br>
            <input class="text-control" type="text" id="last" name="last"/><br>
        </div>
        <div class="formData">
            <label for="email">E-mail</label><br>
            <input class="text-control" type="email" id="email" name="email"/><br>
        </div>
        <div class="formData">
            <label for="msg">Message</label><br>
            <textarea id="msg" name="user_message" rows="4"></textarea>
        </div>
        <input id="btn-submit" class="btn-submit button" type="button" value="Envoyer"/>
        </form>
        </div>
    </div>
    </div>
    <header class="header-photographer">
    <a href="index.html" class="logo"><img src="images/logo/logo.svg" alt="logo_fisheye"></a>
    </header>
    <section id="panel_section">
    <div class="panel">
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
        <a id="panel__btn" class="panel__btn" href="#">Contactez-moi</a>
      </div>
      <div class="card card__picture"><img src="images/Photographers_ID_Photos/${this.portrait}" alt="${this.name}"></div></div>
    </section>
    <article id="article" class="article">
    <div class="article__header">
      <p class="article__title">Trier par</p>
      <div class="dropdown">
        <div class="dropdown__content">
          <a href="" class="dropdown__content__link icon arrow">Popularité</a>
          <a href="" class="dropdown__content__link dropdown__content__sub">Date</a>
          <a href="" class="dropdown__content__link  dropdown__content__sub delborder">Titre</a>
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
      const rawHtml = `<li><a href="#">${array[index]}</a></li>`;
      arrayRawHtml.push(rawHtml);
    };
    return arrayRawHtml.join('');
  }
}

export default NewPhotograph



