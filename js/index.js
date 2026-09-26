const boutonnb = document.querySelectorAll(".btnnb");
const boutonop = document.querySelectorAll(".btnop");
const boutonctrl = document.querySelector(".btnctrl");
const boutonreset = document.querySelector(".btnreset");
const ecran = document.querySelector(".ecran h2");
const ecranjuste = document.querySelector(".ecran");
const hbg = document.querySelector(".hbg"); 
let num1 = "";
let operateur = "";
let num2 = "";

// Pour les boutons de 0 à 9
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

        if (operateur === "")
        {
            num1 += valbouton;
            ecran.textContent = num1;
        }
        
        else{
            num2 += valbouton;
            ecran.textContent = num2;
        }
    })
})

// Pour les boutons opérateurs
boutonop.forEach(b => {
    b.addEventListener("pointerdown", (event) =>{
        const valbuton = event.target.textContent;
        
        if (valbuton === "=")
        {
            ecran.textContent = calculer(ecran.textContent);
        }
        else {
            if (ecran.textContent === "" && valbouton !== "-") {
                ecran.textContent = "0" + valbouton;
            }
            if (ecran.textContent === "0" || ecran.textContent === "Erreur")
            {
                ecran.textContent = valbuton;
            }
            else{
                ecran.textContent += valbuton;
            }
        }
        
    })
})


// Pour le bouton qui efface le dernier caractère
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

// Pour le bouton reset
boutonreset.addEventListener("pointerdown", () => {
    ecran.textContent = "0";
})

// Pour changer de thème
let ld = 1;
hbg.addEventListener("pointerdown", () => {
    ld++;

    hbg.textContent = ld%2 === 0
    ? "Sombre" 
    : "Clair" 
    document.body.style.backgroundColor = ld%2 === 0
    ? "#1f1d1d" 
    : "white" 
    ecran.style.backgroundColor = ld%2 === 0
    ? "#1f1d1d" 
    : "white"
    ecranjuste.style.backgroundColor = ld%2 === 0
    ? "#1f1d1d" 
    : "white"

    document.body.style.color = ld%2 === 1
    ? "#1f1d1d" 
    : "white"



    // ----- bouton num ----------------------------------------------------- bouton num -----
    boutonnb.forEach(b => {
        b.style.backgroundColor = ld%2 === 0
    ? "#1f1d1d" 
    : "#cfcfcf"

        b.style.color = ld%2 === 1
            ? "#1f1d1d" 
            : "white" 
    })

    // ----- bouton operateur ----------------------------------------------------- bouton operateur -----
    boutonop.forEach(b => {
        b.style.backgroundColor = ld%2 === 0
            ? "#1f1d1d" 
            : "#b3b4b4"

        b.style.color = ld%2 === 1
            ? "#1f1d1d" 
            : "white" 
    })

    // ----- bouton ctrl ----------------------------------------------------- bouton ctrl -----
    boutonctrl.style.backgroundColor = ld%2 === 0
        ? "#1f1d1d" 
        : "#929090"
    boutonctrl.style.color = ld%2 === 1
        ? "#1f1d1d" 
        : "white" 

    // ----- bouton reset ----------------------------------------------------- bouton reset -----
    boutonreset.style.backgroundColor = ld%2 === 0
        ? "#1f1d1d" 
        : "#e4e0e0"
    boutonreset.style.color = ld%2 === 1
        ? "#1f1d1d" 
        : "white" 
})


/// ----- Fonction ------------------------------------------------------------------------------------------------------- Fonction -----

function calculer(text) {
    try {

        // Là le replace() sert à rechercher le caractère qui est en premier paramètre "x", et on remplace par le deuxième paramètre "*"
        // n.replace( (ce qu'on recherche) g("global" pour tous les caratères) , "(par ce qu'on va remplacer)" )
        let texte = text.replace(/x/g, "*");

        const resultat = Function(`'use strict'; return (${texte})`) ();
        return resultat !== undefined ? resultat : "0";
    }
    catch (erreur) {
        return "Erreur";
    }
}
