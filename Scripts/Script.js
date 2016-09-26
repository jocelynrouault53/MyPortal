lisic = function (lisicProf) {
    var sousDossier=document.getElementById("sousDossier");
    switch (lisicProf) {
        case 'ahmad':
            sousDossier.value = "sdweb";
            break;
        case 'bouneffa':
            sousDossier.value = "BDR";
            break;
        case 'dehos':
            sousDossier.value = "enseignements/EIL3Info_RV";
            break;
    }
}

afficherAgrandi = function (monElement) {
    var display = document.getElementById('display');
    display.hidden = false;
    display.src = monElement.firstChild.src;
    //document.getElementById('lisic').hidden = true;
    document.getElementById('sopra').hidden = true;
    document.body.style.backgroundImage = 'url("images/photos/lignes.jpg")';
    document.body.style.backgroundPosition = '0px 0px';
}

masquerAgrandi = function () {
    document.getElementById('display').hidden = true;
}

psychedelique = function () {
    document.body.style.backgroundImage = 'url("images/gif-psychedelique-hypnose-animation-12.gif")';
    document.body.style.backgroundPosition = '0px +80%';
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("text");
    ev.preventDefault();
    ev.target.appendChild(document.getElementById(data));
}

function selection(){
    var select=document.getElementById("select");
    select.focus();
    select.select();
}

load = function () {
    var currentDate = new Date();
    var dateNaissance = new Date(1989, 11, 23);
    var timeDifference = d.getTime() - dateNaissance.getTime();
    var yearDifferencePlusOrigin = new Date(timeDifference);
    var age = document.getElementById("age");
    age.innerHTML = yearDifferencePlusOrigin.getFullYear() - 1970;
}
