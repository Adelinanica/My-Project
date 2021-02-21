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



