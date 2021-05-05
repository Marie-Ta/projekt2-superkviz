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
    },

    {   otazka: "Z jablek se vyrabí: ",
        obrazek: "obrazky/snehurka.jpg",
        moznosti: ["Žížaly", "Křížaly", "Píďalky"],
        spravneIndex: 1
    }
];

let i = 0;
let y = 0;
let obrazek = document.querySelector("#obrazek");

//NEFUNGUJE SPRÁVNĚ Zobrazení čísla otázky
let poradi = document.querySelector("#poradi");
poradi.textContent = 'Otázka '+ otazky.indexOf('otazka') + ' / ' + otazky.length;

// Zobrazení otázky na stránce
let otazka = document.querySelector("#otazka");

function zobrazOtazku(i){
    odpovedi.innerHTML = "";

    otazka.textContent = otazky[i].otazka;
    obrazek.src = otazky[y].obrazek;
    
    for (let i=0; i<otazky[y].moznosti.length; i=i+1) { 
        let novaOdpoved = document.createElement('li');
        let seznamOdpovedi = document.querySelector('ul');
        
        seznamOdpovedi.appendChild(novaOdpoved);
        novaOdpoved.textContent = otazky[y].moznosti[i];
    }
    
}

zobrazOtazku(i);

// Přepnutí na další otázku
let moznost = document.querySelector("ul"); //je potřeba, aby slyšel, na které jednotlivé li je kliknuto, ne jen ul
moznost.addEventListener('click', function(){
    y=y+1;
    i=i+1;
     
    zobrazOtazku(i);
        
}) 







// Zobrazení možných odpovědí na otázku na stránce 
//let novaOdpoved = document.createElement('li');
//let seznamOdpovedi = document.querySelector('ul');

/*function pridejOdpoved(y, i){ 
   let novaOdpoved = document.createElement('li');
   let seznamOdpovedi = document.querySelector('ul');
    
   seznamOdpovedi.appendChild(novaOdpoved);
        //novaOdpoved + 'data-odpoved' + i ; //myslím si, že přidává třídu k li, podobně, jak je napsáno v Readme
    novaOdpoved.textContent = otazky[y].moznosti[i];
}

for (let i=0; i<otazky[y].moznosti.length; i=i+1){
    pridejOdpoved(y, i);
}*/





