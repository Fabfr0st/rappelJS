const prenomRappel = ["paul", "jean", "jacques"];

console.log("<<<<<<<<<<<<<< Rappel >>>>>>>>>>>>>");

console.log("------for------");
for (let indFor = 0; indFor <= 10; indFor++) {
    console.log(indFor);
};

console.log("------while------");
let indWhile = 0;
while (indWhile <= 10) {
    console.log(indWhile);
    indWhile++;
};

console.log("------foreach------");
prenomRappel.forEach(function (element) {
    console.log(element);
});

//fonctions
//declaration de fonction
console.log("-------Fonctions------");
function bjr() {
    console.log("Bonjour");
};

bjr();

//fct a param
function bjrP(prenom) {
    console.log("Bonjour " + prenom + "!");
};

bjrP("Michel")