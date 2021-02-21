function hide(id){
    var page=document.getElementById(id);
    page.style.display="none"
}

function show(id){
    document.getElementById(id).style.display="";
}

function hideAllPages(){
    hide("about");
    hide("skills");
    hide("contact");
}
function showAbout(){
    hideAllPages();
    show("about");
}

function showSkills(){
    hideAllPages();
    show("skills");
}

function showContact(){
    hideAllPages();
    show("contact");
    }

function showHome(){
    hideAllPages();
    show("home");
}