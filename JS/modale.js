const displayModaleEvent = async () => {
    const btnContact = document.getElementById("panel__btn");
    btnContact.addEventListener("click", () =>{
        const modale = document.getElementsByClassName("bground")[0];
        modale.style.display = "flex";
    })
};
const submitFormEvent = async () => {
    const elt = document.getElementById('msg');
    const submitForm = document.getElementById("btn-submit");
    submitForm.addEventListener("click", () =>{
        const modale = document.getElementsByClassName("bground")[0];
        modale.style.display = "none";
        console.log(elt.value);
    })
}
const closeModaleEvent = async () => {
    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.addEventListener("click", () =>{
        const modale = document.getElementsByClassName("bground")[0];
        modale.style.display = "none";
    })
}

export {displayModaleEvent};
export {submitFormEvent};
export {closeModaleEvent};