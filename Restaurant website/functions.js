function hide(id){
    var page=document.getElementById(id);
    page.style.display="none"
}

function show(id){
    document.getElementById(id).style.display="";
}

function hideAllPages(){
    hide("home");
    hide("restaurant");
    hide("menu");
    hide("contact");
}
function showHome(){
    hideAllPages();
    show("home");
}

function showRestaurant(){
    hideAllPages();
    show("restaurant");
}

function showMenu(){
    hideAllPages();
    show("menu");
}

function showContact(){
    hideAllPages();
    show('contact');
}


let allBreakfast = [];

function getHtmlBreakfast(breakfast) {
     return breakfast.map(meniu => {
        return `
        <table>
        <th>${meniu.dish}</th>
        <td>${meniu.name}</td>
        <td>${meniu.price}</td>
       </table>
        
        `
     }).join("")
}

function showDishes(breakfast) {
    const html = getHtmlBreakfast(breakfast);
    
    const show = document.querySelector("table");
    show.innerHTML = html;
}

fetch("breakfast.json")
.then( response =>  response.json())
.then(breakfast => {
  allBreakfast = breakfast;
  showDishes(breakfast);
  });
  

 let allAppetizer=[];

 function getHtmlAppetizer(appetizer){
     return appetizer.map(app =>{
         return `
         <table>
            <th>${app.dish}</th>
            <td>${app.name}</td>
            <td>${app.price}</td>
         </table>
         `
     }).join("")
 }

 function showApp(appetizer){
     const html= getHtmlAppetizer(appetizer);

     const show = document.querySelector(".menu2");
    show.innerHTML = html;
 }

fetch("appetizer.json")
.then(response => response.json())
.then(appetizer =>{
    allAppetizer=appetizer;
    showApp(appetizer);
});


let allSoup=[];

function getHtmlSoup(soup){
    return soup.map(s =>{
        return `
        <table>
            <th>${s.dish}</th>
            <td>${s.name}</td>
            <td>${s.price}</td>
        </table>
        `
     }).join("")
};

function showS(soup){
    const html = getHtmlSoup(soup);

    const show = document.querySelector(".menu3")
    show.innerHTML=html;
}

fetch("soup.json")
.then(response => response.json())
.then(soup =>{
    allSoup=soup;
    showS(soup);
});

let allSalads=[];

function getHtmlSalads(salads){
    return salads.map(salad => {
        return `
            <table>
                <th>${salad.dish}</th>
                <td>${salad.name}</td>
                <td>${salad.price}</td>
            </table>
        `
     }).join("")
}

function showSalads(salads){
    const html= getHtmlSalads(salads);

    const show=document.querySelector(".menu4")
    show.innerHTML=html;
}

fetch("salad.json")
.then(response => response.json())
.then(salads => {
    allSalads=salads;
    showSalads(salads);
});

let allMainDish=[];

function getHtmlMainDish(maindish){
    return maindish.map(main => {
        return  `
            <table>
                <th>${main.dish}</th>
                <td>${main.name}</td>
                <td>${main.price}</td>
            </table>
        `
    }).join("")
}

function showMain(maindish){
    const html = getHtmlMainDish(maindish);

    const show=document.querySelector(".menu5")
    show.innerHTML=html;
}

fetch("maindish.json")
.then(response => response.json())
.then(maindish =>{
    allMainDish=maindish;
    showMain(maindish);
});

let allPasta=[];

function getHtmlPasta(pasta){
    return pasta.map(p=>{
        return `
        <table>
             <th>${p.dish}</th>
             <td>${p.name}</td>
             <td>${p.price}</td>
         </table>
        `
    }).join("")
}

function showPasta(pasta){
    const html= getHtmlPasta(pasta);

    const show=document.querySelector(".menu6")
    show.innerHTML=html;
}

fetch("pasta.json")
.then(response => response.json())
.then(pasta => {
    allPasta=pasta;
    showPasta(pasta);
});

let allDeserts=[];

function getHtmlDesert(deserts){
    return deserts.map(d=>{
        return `
        <table>
            <th>${d.dish}</th>
            <td>${d.name}</td>
            <td>${d.price}</td>
        </table>
        `
    }).join("")
};

function showDeserts(deserts){
    const html = getHtmlDesert(deserts);

    const show=document.querySelector(".menu7")
    show.innerHTML=html;
};

fetch("desert.json")
.then(response => response.json())
.then(deserts => {
    allDeserts=deserts;
    showDeserts(deserts)
});

let allDrinks=[];

function getHtmlDrinks(drinks){
    return drinks.map(drink=>{
        return `
        <table>
            <th>${drink.drink}</th>
            <td>${drink.name}</td>
            <td>${drink.price}</td>
        </table>`
    }).join("")
};

function showDrinks(drinks){
    const html=getHtmlDrinks(drinks)

    const show=document.querySelector(".menu8")
    show.innerHTML=html;
}

fetch("drinks.json")
.then(response => response.json())
.then(drinks=>{
    allDrinks=drinks;
    showDrinks(drinks);
});


