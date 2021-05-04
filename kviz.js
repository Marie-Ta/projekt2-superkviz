/*Data pro kvíz jsou uložena v poli otazky. 
Každa otázka je objekt, který obsahuje otázku, obrázek k otázce, pole možných odpovědí a index správné odpovědi.*/

let otazky = [
    {   otazka: "Kdo slaví svátek 2. května?",
        obrazek: "obrazky/pivo.jpg",
        moznosti: ["Karel",  "Zikmund", "Václav"],
        spravneIndex: 1
    },

    {   otazka: "Které ovoce připomíná svým vzhledem ostružinu?",
        obrazek: "obrazky/ovoce.jpg",
        moznosti: ["Mouruše", "Moduše", "Moruše"],
        spravneIndex: 2
    }
    
];

//NEFUNGUJE SPRÁVNĚ Zobrazení čísla otázky
let poradi = document.querySelector("#poradi");
poradi.textContent = 'Otázka '+ otazky.indexOf('otazka') + ' / ' + otazky.length;

// Zobrazení otázky na stránce
let otazka = document.querySelector("#otazka");
function zobrazOtazku(i){
    otazka.textContent = otazky[i].otazka;
}

zobrazOtazku(0);

// Zobrazení obrázku u otázky na stránce
let y = 0;
let obrazek = document.querySelector("#obrazek");
obrazek.src = otazky[y].obrazek;

// Zobrazení možných odpovědí na otázku na stránce 
//let novaOdpoved = document.createElement('li');
//let seznamOdpovedi = document.querySelector('ul');

function pridejOdpoved(y, i){ 
   let novaOdpoved = document.createElement('li');
   let seznamOdpovedi = document.querySelector('ul');
    
   seznamOdpovedi.appendChild(novaOdpoved);
        //novaOdpoved + 'data-odpoved' + i ; //myslím si, že přidává třídu k li, podobně, jak je napsáno v Readme
    novaOdpoved.textContent = otazky[y].moznosti[i];
}

for (let i=0; i<otazky[y].moznosti.length; i=i+1){
    pridejOdpoved(y, i);
}


//Přepnutí na další otázku
//Je potřeba ještě ODEBRAT PŮVODNÍ ODPOVĚDI a ZOBECNIT, aby fungovala i třetí otázka
let moznost = document.querySelector("ul"); //je potřeba, aby slyšel, na které jednotlivé li je kliknuto, ne jen ul
moznost.addEventListener('click', function(){
    y=y+1;
    
    for (let i=0; i<otazky[y].moznosti.length; i=i+1){
        pridejOdpoved(y, i);
    }

    zobrazOtazku(1);

    obrazek.src = otazky[y].obrazek;

    
}) 










