let slideIndex = 1;
/* affichage de la lightbox */
const displaySliderEvent = () => {
    const slider = document.getElementById("slider");
    const image = document.getElementsByClassName("media");
    const container = document.getElementsByClassName("slider__image");
    for (let i = 0; i < image.length; i++) {
        image[i].addEventListener("click", () =>{
        slider.style.display = "flex";
        slider.removeAttribute("aria-hidden");
        slider.setAttribute("tabindex", "0");
        slider.setAttribute("aria-modal", "true");
        showSlides(i);      
        closeSliderEvent();
        slider.focus();
        })
        image[i].addEventListener("keydown", (e) => {if(e.key === "Enter"){ 
        slider.style.display = "flex";
        slider.removeAttribute("aria-hidden");
        slider.setAttribute("tabindex", "0");
        slider.setAttribute("aria-modal", "true");
        showSlides(i);       
        closeSliderEvent();
        slider.focus();
        }})
    } 
};
/* fermeture de la lightbox */
const closeSliderEvent = () => {
    const closeBtn = document.getElementById("closeSlider");
    const slider = document.getElementById("slider");
    const container = document.getElementsByClassName("slider__image")
    closeBtn.addEventListener("click", () =>{
        slider.style.display = "none";
        slider.setAttribute("aria-hidden", true);
        slider.setAttribute("tabindex", "-1");
        slider.removeAttribute("aria-modal");
        for (let i = 0; i < container.length; i++) {
            container[i].style.display = "none";
        }
    })
}
/* listener sur la fleche de droite */
const nextArrow = () => {
    const after = document.getElementById("chevron-right");
    after.addEventListener("click", () =>{
        plusSlides(1);
    })
};
/* listener sur le fleche de gauche */
const previousArrow = () => {
    const before = document.getElementById("chevron-left");
    before.addEventListener("click", () =>{
        plusSlides(-1)
    })
};
// event pour detecter les pressions de touches sur le clavier
const lightBoxKeyboardEvent = () => {
    const slider = document.getElementById("slider");
    const container = document.getElementsByClassName("slider__image");
    const focusableSelector = '.inBox';
    let focusables = Array.from(slider.querySelectorAll(focusableSelector));
    slider.addEventListener('keydown',e => {
        if(e.key === "ArrowLeft"){
            plusSlides(-1);
            focusables[slideIndex - 1].focus();
        }
        if(e.key ==="ArrowRight"){
            plusSlides(1);
            focusables[slideIndex - 1].focus();
        }
        if(e.key === "Escape"){
            for (let j = 0; j < container.length; j++) {
                container[j].style.display = "none";
                slider.style.display = "none";
            }  
        }
    });
};

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
/* fonction pour incrementer ou decrementer les images */
function showSlides(n) {
    let slides = document.getElementsByClassName("slider__image");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
    
    
}

export {nextArrow}
export {previousArrow}
export {displaySliderEvent}
export {lightBoxKeyboardEvent}
