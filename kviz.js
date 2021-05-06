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
let vysledek = document.querySelector('.vysledek');
let otazka = document.querySelector("#otazka");
let vyhodnoceni = document.querySelector("#vyhodnoceni");

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
   
        novaOdpoved.addEventListener('click', function(){
        
        //zobrazení otázky a vybrané odpovědi v konzoli
        console.log((y+1) + '. ' + otazka.textContent),
        console.log('Tvoje odpověď: ' + novaOdpoved.innerText)
        
        //vyhodnoceni.textContent = otazka.textContent
       });
    }
}

zobrazOtazku(i);

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

  // let presunutaOtazka = event.target;
  //  console.log(presunutaOtazka)
  
}) 

function zobrazHodnoceni(){
    
    vysledek.style.display='flex';

    let kviz = document.querySelector('.kviz');
    kviz.style.display='none';
}

//vysledek.innerHTML = 'otazka'

/*let varianta = document.querySelector('li');

varianta.addEventListener('click', function(){
    console.log(varianta.innerText);
})
*/