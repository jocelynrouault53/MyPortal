boutton = document.getElementById("ButtonJaiJoue");
cache = document.getElementById("cache");
batonnets = document.getElementById("batonnets");
enlevé = document.getElementById("enlevés");
joueurElt = document.getElementById("joueur");
batonRetires = 0;
batonRestant = 0;

jeu = function (nb, signe) {
    batonRestant = nb;
    switch (signe) {
        case -1:
            if (batonRetires <= 2) {
                batonRestant -= 1;
                batonRetires += 1;
                boutton.innerHTML= "J'ai joué";
                boutton.hidden = false;
            }
            break;
        case 1:
            if (batonRetires >= 2) {
                batonRestant += 1;
                batonRetires -= 1;
                boutton.innerHTML= "J'ai joué";
                boutton.hidden = false;
            }
            break;
    }
    showResults();
}

nextPlayer = function () {
    switch (batonRestant) {
        case 0:
            alert("You are just very stupid, guy! Il fallait laisser la dernière à l'adversaire! tu as perdu...");
            initialisationBat();
            break;
        case 1:
            alert('Bravo ' + joueurElt.innerHTML + ' !');
            initialisationBat();
            break;
        default:
            if (batonRetires > 0) {
                batonRetires = 0;
                enlevé.innerHTML = 'batonnets retirés : ' + 0;
                if (joueurElt.innerHTML == "joueur 1") {
                    joueurElt.innerHTML = "joueur 2";
                }
                else {
                    joueurElt.innerHTML = "joueur 1";
                }
                boutton.hidden = true;
            }
    }
}

initialisationBat = function () {
    document.getElementById("IA").hidden = false;
    document.getElementById("player").hidden = false;
    document.getElementById("init").value = '';
    joueurElt.innerHTML = "";
    boutton.hidden = true;
    boutton.innerHTML = "IA commence";
    batonnets.innerHTML = "";
    enlevé.innerHTML = "";
    batonRetires = 0;
    batonRestant = 0;
    cache.hidden = true;
}

IA = function () {
    joueurElt.innerHTML = "IA";
    boutton.hidden = true;
    boutton.innerHTML = "J'ai joué";
    enlevé.innerHTML = 'batonnets retirés : ' + 0;
    cache.hidden = false;
    window.setTimeout(function () {
        if (batonRestant % 4 == 1) {
            if (batonRestant == 1) {
                alert('Bravo Joueur !');
                initialisationBat();
            }
            else {
                batonRetires = Math.ceil(Math.random() * 3);
                résultatIA();
            }
        }
        else {
            if (batonRestant == 0) {
                alert("You are just very stupid, guy! Il fallait laisser la dernière à l'adversaire! tu as perdu...");
                initialisationBat();
            }
            else {
                batonRetires = (batonRestant - 1) % 4;
                résultatIA();
            }
        }
    }, 1100);
}

choix = function (player) {
    document.getElementById("jeuDuMorpion").hidden = true;
    document.getElementById("init").hidden = false;
    document.getElementById("lblInit").hidden = false;
    document.getElementById("IA").hidden = true;
    document.getElementById("player").hidden = true;
    document.getElementById("reglesBatonnets").hidden = true;
    switch (player) {
        case 'IA':
            boutton.onclick = function () { IA() };
            document.getElementById("init").onchange = function () {
                document.getElementById("ButtonJaiJoue").hidden = false;
                jeu(this.value);
                this.hidden=true;
                document.getElementById('lblInit').hidden = true;
                document.getElementById('joueur').innerHTML = 'joueur 1';
            }
            break;
        case 'nextPlayer':
            boutton.onclick = function () { nextPlayer() };
            document.getElementById("init").onchange = function () {
                jeu(this.value);
                this.hidden=true;
                document.getElementById('lblInit').hidden = true;
                document.getElementById('joueur').innerHTML = 'joueur 1';
            }
            break;
    }
}

showResults=function(){
    batonnets.innerHTML = "Batonnets restants : ";
    enlevé.innerHTML = "batonnets retirés : ";
    for (i = 0; i < batonRestant; i++) {
        batonnets.innerHTML += '<img src="images/boutons/batonnet.png" style="height: 50px;" onclick="jeu(' + batonRestant + ',-1);">';
    }
    for (i = 0; i < batonRetires; i++) {
        enlevé.innerHTML += '<img src="images/boutons/batonnet.png" style="height: 50px;" onclick="jeu(' + batonRestant + ',1);">';
    }
    batonnets.innerHTML += batonRestant;
    enlevé.innerHTML += batonRetires;
}

résultatIA = function () {
    batonRestant -= batonRetires;
    showResults();
    window.setTimeout(function () {
        batonRetires = 0;
        showResults();
        if (batonRestant == 1) {
            window.setTimeout(function () {
                alert("J'ai gagné, try again");
                initialisationBat();
            }, 1000);
        }
        else {
            joueurElt.innerHTML = "joueur";
            cache.hidden = true;
        }
    }, 1000);
}