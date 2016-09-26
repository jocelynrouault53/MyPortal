//initialisation
var grille = [
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
];
var joueur = 1;
var compteur = 0;
var mess = "";
var partie = 0;
var J1 = 0;
var J2 = 0;

//fonction permettant au jeu d'anticiper certains pieges
//fonction active unquement quand la case de difficulté est cochée
function super_ordi() {
    if (compteur == 1) {
        var chance = Math.floor(2 * Math.random());
        if (((grille[0][0][2] == 1) || (grille[0][2][2] == 1) || (grille[2][0][2] == 1) || (grille[2][2][2] == 1)) || ((chance == 0) && (grille[1][1][2] == 0))) {
            i = 1;
            j = 1;
            return (100 + (10 * i + j));
        } else if (grille[1][0][2] == 1) {
            var azar = 2 * Math.floor(2 * Math.random());
            i = azar;
            j = 2;
            return (100 + (10 * i + j));
        } else if (grille[0][1][2] == 1) {
            var azar = 2 * Math.floor(2 * Math.random());
            i = 2;
            j = azar;
            return (100 + (10 * i + j));
        } else if (grille[1][2][2] == 1) {
            var azar = 2 * Math.floor(2 * Math.random());
            i = azar;
            j = 0;
            return (100 + (10 * i + j));
        } else if (grille[2][1][2] == 1) {
            var azar = 2 * Math.floor(2 * Math.random());
            i = 0;
            j = azar;
            return (100 + (10 * i + j));
        } else {
            return false;
        }
    } else if (compteur == 3) {
        if (((grille[2][2][2] == 1) && (grille[0][0][2] == 1)) || ((grille[2][0][2] == 1) && (grille[0][2][2] == 1))) {
            var azar = Math.floor(4 * Math.random());
            if (azar == 0) {
                i = 0;
                j = 1;
                return (100 + (10 * i + j));
            } else if (azar == 1) {
                i = 1;
                j = 2;
                return (100 + (10 * i + j));
            } else if (azar == 2) {
                i = 2;
                j = 1;
                return (100 + (10 * i + j));
            } else if (azar == 3) {
                i = 1;
                j = 0;
                return (100 + (10 * i + j));
            }
        } else if ((grille[0][0][2] == 1) && ((grille[1][2][2] == 1) || (grille[2][1][2] == 1)) && (grille[2][2][2] == 0)) {
            i = 2;
            j = 2;
            return (100 + (10 * i + j));
        } else if ((grille[0][2][2] == 1) && ((grille[1][0][2] == 1) || (grille[2][1][2] == 1)) && (grille[2][0][2] == 0)) {
            i = 2;
            j = 0;
            return (100 + (10 * i + j));
        } else if ((grille[2][2][2] == 1) && ((grille[1][0][2] == 1) || (grille[0][1][2] == 1)) && (grille[0][0][2] == 0)) {
            i = 0;
            j = 0;
            return (100 + (10 * i + j));
        } else if ((grille[2][0][2] == 1) && ((grille[0][1][2] == 1) || (grille[1][2][2] == 1)) && (grille[0][2][2] == 0)) {
            i = 0;
            j = 2;
            return (100 + (10 * i + j));
        } else {
            return false;
        }
    } else {
        return false;
    }
}

//intelligence de base du jeu
//cette fonction cherche si l'ordi peut gagner a ce tour
//si elle ne trouve pas elle cherche si elle peut perdre a ce tour
function ordi() {
    for (a = 2; a > 0; a--) {
        if ((grille[1][1][2] == 0) && (((grille[0][0][2] == a) && (grille[2][2][2] == a)) || ((grille[2][0][2] == a) && (grille[0][2][2] == a)) || ((grille[1][0][2] == a) && (grille[1][2][2] == a)) || ((grille[0][1][2] == a) && (grille[2][1][2] == a)))) {
            i = 1;
            j = 1;
            joue(i, j);
            return;
        } else if ((grille[0][0][2] == 0) && (((grille[0][1][2] == a) && (grille[0][2][2] == a)) || ((grille[1][1][2] == a) && (grille[2][2][2] == a)) || ((grille[1][0][2] == a) && (grille[2][0][2] == a)))) {
            i = 0;
            j = 0;
            joue(i, j);
            return;
        } else if ((grille[0][2][2] == 0) && (((grille[0][0][2] == a) && (grille[0][1][2] == a)) || ((grille[2][0][2] == a) && (grille[1][1][2] == a)) || ((grille[1][2][2] == a) && (grille[2][2][2] == a)))) {
            i = 0;
            j = 2;
            joue(i, j);
            return;
        } else if ((grille[2][2][2] == 0) && (((grille[2][0][2] == a) && (grille[2][1][2] == a)) || ((grille[0][0][2] == a) && (grille[1][1][2] == a)) || ((grille[1][2][2] == a) && (grille[0][2][2] == a)))) {
            i = 2;
            j = 2;
            joue(i, j);
            return;
        } else if ((grille[2][0][2] == 0) && (((grille[0][0][2] == a) && (grille[1][0][2] == a)) || ((grille[0][2][2] == a) && (grille[1][1][2] == a)) || ((grille[2][1][2] == a) && (grille[2][2][2] == a)))) {
            i = 2;
            j = 0;
            joue(i, j);
            return;
        } else if ((grille[0][1][2] == 0) && (((grille[0][2][2] == a) && (grille[0][0][2] == a)) || ((grille[2][1][2] == a) && (grille[1][1][2] == a)))) {
            i = 0;
            j = 1;
            joue(i, j);
            return;
        } else if ((grille[1][2][2] == 0) && (((grille[0][2][2] == a) && (grille[2][2][2] == a)) || ((grille[1][0][2] == a) && (grille[1][1][2] == a)))) {
            i = 1;
            j = 2;
            joue(i, j);
            return;
        } else if ((grille[2][1][2] == 0) && (((grille[2][0][2] == a) && (grille[2][2][2] == a)) || ((grille[0][1][2] == a) && (grille[1][1][2] == a)))) {
            i = 2;
            j = 1;
            joue(i, j);
            return;
        } else if ((grille[1][0][2] == 0) && (((grille[0][0][2] == a) && (grille[2][0][2] == a)) || ((grille[1][1][2] == a) && (grille[1][2][2] == a)))) {
            i = 1;
            j = 0;
            joue(i, j);
            return;
        }
    }
    if (document.score.niveau.checked) {
        var c = super_ordi();
    } else {
        var c = false;
    }
    if (c == false) {
        do {
            var i = Math.floor(3 * Math.random());
            var j = Math.floor(3 * Math.random());
        } while (grille[i][j][2] != 0)
    } else {
        i = Math.floor((c - 100) / 10);
        j = c - 100 - 10 * i;
    }
    joue(i, j);
}


function gagne(winner) {
    document.score.partie.value = ++partie;
    if (winner == 0) {
        document.score.nul.value = partie - (J1 + J2);
        mess = "partie terminée, pas de vainqueur...\nveux-tu rejouer?";
    } else if (winner == 1) {

        document.score.J1.value = ++J1;
        mess = "tu as gagné!\nveux-tu rejouer?";
    } else {
        document.score.J2.value = ++J2;
        mess = "tu as perdu! (mdr)\nveux-tu rejouer?";

    }
    var rejouer = confirm(mess)
    if (rejouer) {
        init();
    } else {
        init();
        close();
    }
}


//verifie si un des joueurs a gagné
function verif() {
    compteur++;
    for (b = 1; b < 3; b++) {
        for (a = 0; a < 3; a++) {
            if ((grille[a][0][2] == b) && (grille[a][1][2] == b) && (grille[a][2][2] == b)) {
                gagne(b);
                return true;
            }
            if ((grille[0][a][2] == b) && (grille[1][a][2] == b) && (grille[2][a][2] == b)) {
                gagne(b);
                return true;
            }
        }
        if (((grille[0][0][2] == b) && (grille[1][1][2] == b) && (grille[2][2][2] == b)) || ((grille[0][2][2] == b) && (grille[1][1][2] == b) && (grille[2][0][2] == b))) {
            gagne(b);
            return true;
        }
    }
    if (compteur == 9) {
        gagne(0);
        return true;
    }
    return false;
}

//affichage des croix et des ronds
function joue(ligne, colonne) {
    if (grille[ligne][colonne][2] == 0) {
        grille[ligne][colonne][2] = joueur;
        var croix = "document.getElementById(\"img" + grille[ligne][colonne][0] + "" + grille[ligne][colonne][1] + "\").src='images/boutons/croix.png';";
        var rond = "document.getElementById(\"img" + grille[ligne][colonne][0] + "" + grille[ligne][colonne][1] + "\").src='images/boutons/rond.png';";
        if (joueur == 1) {
            eval(croix);
        } else {
            eval(rond);
        }
        if (verif()) {
            return;
        } else {
            joueur = (3 - joueur);
            if (joueur == 2) {
                ordi();
            }
        }
    } else {
        alert("abruti(e)! es-tu si con(ne) que tu ne sais pas jouer au morpion?\ncette case est deja prise, tu ne peux pas la rejouer");
        return;
    }
}

function init() {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            var vide = "document.getElementById(\"img" + i + "" + j + "\").src='images/boutons/vide.gif';";
            eval(vide);
            grille[i][j][2] = 0;
        }
    }
    joueur = 1;
    compteur = 0;
    mess = "";
}

for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        var cel = (i + "" + j);
        grille[i][j][0] = i;
        grille[i][j][1] = j;
        grille[i][j][2] = 0;
    }
}