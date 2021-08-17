const displayModaleEvent = () => {
    const btnContact = document.getElementById("panel__btn");
    btnContact.addEventListener("click", () =>{
        const modale = document.getElementsByClassName("bground")[0];
        modale.style.display = "flex";
    })
};
const submitFormEvent = () => {
    const elt = document.getElementById('msg');
    const firstName = document.getElementById('first');
    const lastName = document.getElementById('last');
    const email = document.getElementById('email');
    const submitForm = document.getElementById("btn-submit");
    submitForm.addEventListener("click", () =>{
        const modale = document.getElementsByClassName("bground")[0];
        modale.style.display = "none";
        console.log("nom : "+firstName.value
        +", prénom : "+lastName.value
        +", email : "+email.value 
        +", message : "+elt.value);
    })
}
const closeModaleEvent = () => {
    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.addEventListener("click", () =>{
        const modale = document.getElementsByClassName("bground")[0];
        modale.style.display = "none";
    })
}

export {displayModaleEvent};
export {submitFormEvent};
export {closeModaleEvent};