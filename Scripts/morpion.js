lignes:{
	ligneA:A1 + A2 + A3;
	ligneB:B1 + B2 + B3;
	ligneC:C1 + C2 + C3;
};

colonnes:{
	colonne1:A1 + B1 + C1;
	colonne2:A2 + B2 + C2;
	colonne3:A3 + B3 + C3;
};

diagonales:{
	diag1:A1 + B2 + C3;
	diag2:A3 + B2 + C1;
};

joueurElt = document.getElementById("joueur");
A1Elt=document.getElementById("A1");
A2Elt=document.getElementById("A2");
A3Elt=document.getElementById("A3");
B1Elt=document.getElementById("B1");
B2Elt=document.getElementById("B2");
B3Elt=document.getElementById("B3");
C1Elt=document.getElementById("C1");
C2Elt=document.getElementById("C2");
C3Elt=document.getElementById("C3");
joueur="1";
croix = '<img src="images/boutons/croix.png" style="height:40px;">';
rond = '<img src="images/boutons/rond.png" style="height:40px;">';
ligneA=A1+A2+A3;
ligneB=B1+B2+B3;
ligneC=C1+C2+C3;
colonne1=A1+B1+C1;
colonne2=A2+B2+C2;
colonne3=A3+B3+C3;
diag1=A1+B2+C3;
diag2=A3+B2+C1;


initialisation = function () {
    document.getElementById("jeuDesBatonnets").hidden = true;
    document.getElementById("commencer").hidden = true;
    document.getElementById("grille").hidden = false;
    document.getElementById("reglesMorpion").hidden = true;
    A1Elt.onclick = function () { play(this) };
    A2Elt.onclick = function () { play(this) };
    A3Elt.onclick = function () { play(this) };
    B1Elt.onclick = function () { play(this) };
    B2Elt.onclick = function () { play(this) };
    B3Elt.onclick = function () { play(this) };
    C1Elt.onclick = function () { play(this) };
    C2Elt.onclick = function () { play(this) };
    C3Elt.onclick = function () { play(this) };
    A1Elt.innerHTML = "";
    A2Elt.innerHTML = "";
    A3Elt.innerHTML = "";
    B1Elt.innerHTML = "";
    B2Elt.innerHTML = "";
    B3Elt.innerHTML = "";
    C1Elt.innerHTML = "";
    C2Elt.innerHTML = "";
    C3Elt.innerHTML = "";
    joueurElt.innerHTML = "joueur 1";
    joueur = "1";
}

play = function (element) {
    switch(element.id+joueur){
		case "A11":
			A1="X";
			break;
		case "A12":
			A1="O";
			break;
		case "A21":
			A2="X";
			break;
		case "A22":
			A2="O";
			break;
		case "A31":
			A3="X";
			break;
		case "A32":
			A3="O";
			break;
		case "B11":
			B1="X";
			break;
		case "B12":
			B1="O";
			break;
		case "B21":
			B2="X";
			break;
		case "B22":
			B2="O";
			break;
		case "B31":
			B3="X";
			break;
		case "B32":
			B3="O";
			break;
		case "C11":
			C1="X";
			break;
		case "C12":
			C1="O";
			break;
		case "C21":
			C2="X";
			break;
		case "C22":
			C2="O";
			break;
		case "C31":
			C3="X";
			break;
		case "C32":
			C3="O";
			break;
		default:
			alert(element.id+joueur);
			break;
	}
    switch (joueur) {
        case "1":
            element.innerHTML = croix;
            joueurElt.innerHTML = "joueur 2";
            joueur = "2";
            //aiMorpion();
            break;
        case "2":
            element.innerHTML = rond;
            joueurElt.innerHTML = "joueur 1";
            joueur = "1";
            break;
    }
	element.onclick = "";
    AIMorpion();
}

AIMorpion=function(){
	if((A1Elt.innerHTML==croix && A2Elt.innerHTML==croix && A3Elt.innerHTML==croix)||(B1Elt.innerHTML==croix && B2Elt.innerHTML==croix && B3Elt.innerHTML==croix)||(C1Elt.innerHTML==croix && C2Elt.innerHTML==croix && C3Elt.innerHTML==croix)||(A1Elt.innerHTML==croix && B1Elt.innerHTML==croix && C1Elt.innerHTML==croix)||(A2Elt.innerHTML==croix && B2Elt.innerHTML==croix && C2Elt.innerHTML==croix)||(A3Elt.innerHTML==croix && B3Elt.innerHTML==croix && C3Elt.innerHTML==croix)||(A1Elt.innerHTML==croix && B2Elt.innerHTML==croix && C3Elt.innerHTML==croix)||(A3Elt.innerHTML==croix && B2Elt.innerHTML==croix && C1Elt.innerHTML==croix) ){
		alert("Joueur 1 à gagné!");
		initialisation();
	}
	else if((A1Elt.innerHTML==rond && A2Elt.innerHTML==rond && A3Elt.innerHTML==rond)||(B1Elt.innerHTML==rond && B2Elt.innerHTML==rond && B3Elt.innerHTML==rond)||(C1Elt.innerHTML==rond && C2Elt.innerHTML==rond && C3Elt.innerHTML==rond)||(A1Elt.innerHTML==rond && B1Elt.innerHTML==rond && C1Elt.innerHTML==rond)||(A2Elt.innerHTML==rond && B2Elt.innerHTML==rond && C2Elt.innerHTML==rond)||(A3Elt.innerHTML==rond && B3Elt.innerHTML==rond && C3Elt.innerHTML==rond)||(A1Elt.innerHTML==rond && B2Elt.innerHTML==rond && C3Elt.innerHTML==rond)||(A3Elt.innerHTML==rond && B2Elt.innerHTML==rond && C1Elt.innerHTML==rond) ){
		alert("Joueur 2 à gagné!");
		initialisation();
	}
    else if(A1Elt.innerHTML!=""&&A2Elt.innerHTML!=""&&A3Elt.innerHTML!=""&&B1Elt.innerHTML!=""&&B2Elt.innerHTML!=""&&B3Elt.innerHTML!=""&&C1Elt.innerHTML!=""&&C2Elt.innerHTML!=""&&C3Elt.innerHTML!=""){
		alert("Partie nulle!");
		initialisation();
    }
}

test = function () {
    alert("plop");
    /*for (i in lignes) {
        alert(i);
    }*/
}