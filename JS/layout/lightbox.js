
let slideIndex = 1;
/* affichage de la lightbox */
const displaySliderEvent = () => {
    const slider = document.getElementById("slider");
    const image = document.getElementsByClassName("media");
    const container = document.getElementsByClassName("slider__image")
    
    for (let i = 0; i < image.length; i++) {
        const element = image[i];
        element.addEventListener("click", () =>{
        slider.style.display = "flex";
        container[i].style.display = "flex";        
        closeSliderEvent();
        })
    } 
};
/* fermeture de la lightbox */
const closeSliderEvent = () => {
    const closeBtn = document.getElementById("closeSlider");
    const container = document.getElementsByClassName("slider__image")
    closeBtn.addEventListener("click", () =>{
        const slider = document.getElementById("slider");
        slider.style.display = "none";
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

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
/* fonction pour incrementer ou decrementer les images */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider__image");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}

export {nextArrow}
export {previousArrow}
export {displaySliderEvent}
