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
otazka.textContent = otazky[0].otazka;

// Zobrazení obrázku u otázky na stránce
let obrazek = document.querySelector("#obrazek");
obrazek.src = otazky[0].obrazek;

// Zobrazení možných odpovědí na otázku na stránce 

function pridejOdpoved(i){ 
let novaOdpoved = document.createElement('li');
let seznamOdpovedi = document.querySelector('ul');
seznamOdpovedi.appendChild(novaOdpoved);

novaOdpoved.textContent = otazky[0].moznosti[i];
}

for (let i=0; i<otazky[0].moznosti.length; i=i+1){
        pridejOdpoved(i);
}




