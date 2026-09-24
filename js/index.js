const boutonnb = document.querySelectorAll(".btnnb");
const boutonop = document.querySelectorAll(".btnop");
const boutonctrl = document.querySelector(".btnctrl");
const boutonreset = document.querySelector(".btnreset");
const ecran = document.querySelector(".ecran h2");

boutonnb.forEach(b => {
    b.addEventListener("pointerdown", (event) => {
        const valbuton = event.target.textContent;

        // Si le texte est déjà 0 alors il ne rajoutera pas d'autre zéro
        if (ecran.textContent === "0")
        {
            ecran.textContent = valbuton;
        }
        // sinon il affiche en plus
        else {
            ecran.textContent += valbuton;
        }
        
    })
})

boutonop.forEach(b => {
    b.addEventListener("pointerdown", (event) =>{
        const valbuton =  event.target.textContent;
        ecran.textContent += valbuton;
    })
})

boutonctrl.addEventListener("pointerdown", () => {
    const textActuel  = ecran.textContent;

    // si la taille du texte est sup à 1 il va juste retirer caractère
    if (textActuel.length > 1) {
        ecran.textContent = textActuel.slice(0,-1);
    }
    // sinon il remplace juste le texte par 0
    else {
        ecran.textContent = "0";
    }
})

boutonreset.addEventListener("pointerdown", () => {
    ecran.textContent = "0";
})