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
let ok = 0;

let otazkaVyhodnoceni = document.querySelector("#otazkaVyhodnoceni");

// Zobrazení otázky na stránce
function zobrazOtazku(i){
    let poradi = document.querySelector("#poradi");

    poradi.textContent = 'Otázka '+ (y+1) + ' / ' + otazky.length;
    odpovedi.innerHTML = "";
   
    otazka.textContent = otazky[i].otazka;
    obrazek.src = otazky[y].obrazek;
   
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
    
    vysledek.style.display='block';

    let kviz = document.querySelector('.kviz');
    kviz.style.display='none';

    for (let i=0; i<zvoleneOdpovedi.length; i=i+1){
        
        let novyNadpis = document.createElement('h3');
        vysledek.appendChild(novyNadpis);
        novyNadpis.textContent = i+1 +". " + otazky[i].otazka; 
        
        let tvojeOdpoved = document.createElement('p');
        vysledek.appendChild(tvojeOdpoved);
        tvojeOdpoved.textContent = "Tvoje odpověď: " + otazky[i].moznosti[zvoleneOdpovedi[i]] + '\n';

        let spravnost = document.createElement('p');
        vysledek.appendChild(spravnost);
         '\n';      

        if(zvoleneOdpovedi[i] == otazky[i].spravnyIndex ){
            spravnost.textContent = "To je SPRÁVNĚ!"
            ok = ok+1;
            console.log("ok "+ ok);
        }

        else{
            spravnost.textContent = "Správná odpověď: " + otazky[i].moznosti[otazky[i].spravnyIndex] + '\n';
        }
    }

    let celkemOK = document.createElement('h2');
    vysledek.appendChild(celkemOK);
    celkemOK.textContent = "SPRÁVNĚ " + ok + " ZE " + otazky.length + " OTÁZEK. ÚSPĚŠNOST " + (Math.round(ok/otazky.length * 100)) + " %.";
}

