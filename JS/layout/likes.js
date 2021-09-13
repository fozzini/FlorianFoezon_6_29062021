
let likes = [];
/* calcul du total des likes par media */
const totalLike = () => {
    const nbr = document.getElementsByClassName("likesP");
    let Sum = 0;
    for (let index = 0; index < nbr.length; index++) {
        Sum += parseInt(nbr[index].innerHTML,10);
    };
    return Sum;
};
/* event pour incrementer un like */
const incrementLikesEvent = () => {
    const container = document.getElementsByClassName("fas fa-heart");
    const nbr = document.getElementsByClassName("likesP");
    const totalLikes = document.getElementById("likes-total");
    totalLikes.innerHTML = totalLike();
    for (let i = 0; i < container.length; i++) {
        container[i].addEventListener("click", () =>{
        nbr[i].innerHTML = parseInt(nbr[i].innerHTML,10)+1;
            if (likes[i] == 1) {
                nbr[i].innerHTML = parseInt(nbr[i].innerHTML,10)-2;
                likes[i] = 0;            
            } else {
                likes[i] = 1;
            }
        totalLikes.innerHTML = totalLike();
        })
        container[i].addEventListener("keydown", (e) => {if(e.key === "Enter"){
        nbr[i].innerHTML = parseInt(nbr[i].innerHTML,10)+1;
            if (likes[i] == 1) {
                nbr[i].innerHTML = parseInt(nbr[i].innerHTML,10)-2;
                likes[i] = 0;            
            } else {
                likes[i] = 1;
            }
        totalLikes.innerHTML = totalLike();}
        })
    }
}
export {incrementLikesEvent}


