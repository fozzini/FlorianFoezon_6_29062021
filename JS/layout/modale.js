/* affichage de la modale */
const displayModaleEvent = () => {
    const btnContact = document.getElementById("panel__btn");
    const modale = document.getElementById("bground");
    btnContact.addEventListener("click", () =>{
        modale.style.display = "flex";
        modale.removeAttribute("aria-hidden");
        modale.setAttribute("tabindex", "0");
        modale.setAttribute("aria-modal", "true"); 
        document.getElementById("first").focus();
    })
};
/* event de soumission du formulaire */
const submitFormEvent = () => {
    const elt = document.getElementById('msg');
    const firstName = document.getElementById('first');
    const lastName = document.getElementById('last');
    const email = document.getElementById('email');
    const submitForm = document.getElementById("btn-submit");
    submitForm.addEventListener("click", () =>{
        const modale = document.getElementById("bground");
        modale.style.display = "none";
        console.log("nom : "+firstName.value
        +", prénom : "+lastName.value
        +", email : "+email.value 
        +", message : "+elt.value);
    })
}
/* fermeture de la modale */
const closeModaleEvent = () => {
    const closeBtn = document.getElementsByClassName("close")[0];
    const modale = document.getElementById("bground");
    closeBtn.addEventListener("click", () =>{
        modale.style.display = "none";
        modale.setAttribute("aria-hidden", true);
        modale.setAttribute("tabindex", "-1");
        modale.removeAttribute("aria-modal");
    })
}
// event pour les pression de touches sur la modale
const modaleKeyboardEvent = () => { 
    const modale = document.getElementById("bground");
    const focusableSelector = 'input, textarea';
    let focusables = Array.from(modale.querySelectorAll(focusableSelector));
    let index = focusables.findIndex(f => f === modale.querySelector(':focus'));
    modale.addEventListener('keydown',e => {
        if(e.key === "Escape"){
            modale.style.display = "none";
            modale.setAttribute("aria-hidden", true);
            modale.setAttribute("tabindex", "-1");
            modale.removeAttribute("aria-modal");
        }  
        if(e.shiftKey && e.key === 'Tab'){
            e.preventDefault();
            index--
            if (index < 0){
                index = focusables.length - 1;
                }
            focusables[index].focus();
        }
        else if(e.key === 'Tab'){
            e.preventDefault();
            index++;
            if (index >= focusables.length) {
                index = 0 ;
            }
            focusables[index].focus();
        }
    });
}
const btnKeyboardEvent = () => {
    const btnContact = document.getElementById("panel__btn");
    const modale = document.getElementById("bground");
    btnContact.addEventListener('keydown',e => {
        if(e.key === "Enter"){
            modale.style.display = "flex";
            modale.removeAttribute("aria-hidden");
            modale.setAttribute("tabindex", "0");
            modale.setAttribute("aria-modal", "true"); 
            document.getElementById("first").focus();
        }
    })
}

export {displayModaleEvent};
export {submitFormEvent};
export {closeModaleEvent};
export {modaleKeyboardEvent};
export {btnKeyboardEvent};