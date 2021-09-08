/* affichage de la modale */
const displayModaleEvent = () => {
    const btnContact = document.getElementById("panel__btn");
    const modale = document.getElementById("bground");
    btnContact.addEventListener("click", () =>{
        modale.style.display = "flex";
        modale.focus();
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
    })
}
// event pour les pression de touches sur la modale
const modaleKeyboardEvent = () => { 
    const modale = document.getElementById("bground");
    modale.addEventListener('keydown',e => {
        if(e.key === "Escape"){
            modale.style.display = "none"
        }  
    });
};
export {displayModaleEvent};
export {submitFormEvent};
export {closeModaleEvent};
export {modaleKeyboardEvent};