/*Data pro kvíz jsou uložena v poli otazky. 
Každa otázka je objekt, který obsahuje otázku, obrázek k otázce, pole možných odpovědí a index správné odpovědi.*/

let otazky = [
    {   otazka: "Kdo slaví svátek 2. května?",
        obrazek: "obrazky/pivo.jpg",
        moznosti: ["Karel",  "Zikmund", "Václav"],
        spravnyIndex: 1
    },

    {   otazka: "Které ovoce připomíná svým vzhledem ostružinu?",
        obrazek: "obrazky/ovoce.jpg",
        moznosti: ["Mouruše", "Moduše", "Moruše"],
        spravnyIndex: 2
    },

    {   otazka: "Z jablek se vyrabí: ",
        obrazek: "obrazky/snehurka.jpg",
        moznosti: ["Žížaly", "Křížaly", "Píďalky"],
        spravnyIndex: 1
    }
];

let i = 0;
let y = 0;
let obrazek = document.querySelector("#obrazek");
let vysledek = document.querySelector('.vysledek');
let otazka = document.querySelector("#otazka");
let vyhodnoceni = document.querySelector("#vyhodnoceni");
let odpovedi = document.querySelector("#odpovedi");
let zvoleneOdpovedi = [];

let tvojeOdpoved = document.querySelector("#tvojeOdpoved");
let otazkaVyhodnoceni = document.querySelector("#otazkaVyhodnoceni");

        

/*Zkusila bych oddělit to, co se zobrazuje uživateli a to, co je uložené v rámci programu v proměnných. 
Takže co tam konkrétně chybí je proměnná, do které budeš ukládat zvolené odpovědi, něco jako let odpovedi = [], na místě, kde ted děláš console.log potom do toho pole přidáš zvolenou odpověd odpovedi.push(), mezi ty závorky vložíš vybranou odpověd.
Tady je prostor pro datatset. Když tu otázku tvoříš, tak každému li můžeš nastavit dataset, novaOdpoved.dataset.odpoved = i, takže si tam uložíš pořadové číslo odpovědi. To pak použiješ v tom .push(event.target.dataset.odpoved).
Až uplně nakonec použiješ tohle naplněné pole odpovědí pro vygenerování seznamu, který zobrazíš. */

// Zobrazení otázky na stránce
function zobrazOtazku(i){
    let poradi = document.querySelector("#poradi");

    poradi.textContent = 'Otázka '+ (y+1) + ' / ' + otazky.length;
    odpovedi.innerHTML = "";
   
    otazka.textContent = otazky[i].otazka;
    obrazek.src = otazky[y].obrazek;

    /*otazkaVyhodnoceni.textContent = otazky[i].otazka; - Tady jsem si myslela, že bude zapisovat otázku do divu otazka_vyhodoceni.*/

      
    for (let i=0; i<otazky[y].moznosti.length; i=i+1) { 
        let novaOdpoved = document.createElement('li');
        let seznamOdpovedi = document.querySelector('ul');
        
        seznamOdpovedi.appendChild(novaOdpoved);
        novaOdpoved.textContent = otazky[y].moznosti[i];
        novaOdpoved.dataset.odpoved = i; // vytváří dataset a přiřazuje mu pořadové číslo odpovědi
        
        novaOdpoved.addEventListener('click', function(){
            
            //zobrazení otázky a vybrané odpovědi v konzoli
            console.log((y+1) + '. ' + otazka.textContent),
            console.log('Tvoje odpověď: ' + novaOdpoved.innerText)
            
            
            //přidání zvolené odpovědi do pole zvoleneOdpovedi a přidání data setu odpoved 
            zvoleneOdpovedi.push(event.target.dataset.odpoved);

            /*tvojeOdpoved.innerHTML = 'Tvoje odpověď ' + zvoleneOdpovedi[i]; - tady tím jsem chtěla zapsat zvolenou odpověď to divu tvoje_odpoved*/
        
            console.log(zvoleneOdpovedi);
            
        });
    }
}

zobrazOtazku(i);

//otazkaVyhodnoceni.innerHTML = otazky[i].otazka;

// Přepnutí na další otázku
let moznost = document.querySelector("ul");

moznost.addEventListener('click', function(){
    y=y+1;
    i=i+1;
 
    if (y<otazky.length){

        zobrazOtazku(i); 
       
    }

    else{
        zobrazHodnoceni();
    }
}) 


function zobrazHodnoceni(){
    
    vysledek.style.display='flex';

    let kviz = document.querySelector('.kviz');
    kviz.style.display='none';
}
