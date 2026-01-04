// 1. Sélection des éléments du DOM
const inputX = document.getElementById("x");
const inputY = document.getElementById("y");
const btn = document.getElementById("btnCalcul");
const feedback = document.getElementById("feedback");
const output = document.getElementById("output");

// 2. Fonction pour afficher une erreur
function afficherErreur(message) {
    feedback.textContent = message;
    output.innerHTML = "";
}

// 3. Fonction pour calculer et afficher les résultats
function afficherResultats(x, y) {
    output.innerHTML = `
        <strong>Somme :</strong> ${x + y} <br>
        <strong>Différence :</strong> ${x - y} <br>
        <strong>Produit :</strong> ${x * y} <br>
        <strong>Quotient :</strong> ${(x / y).toFixed(2)}
    `;
}

btn.addEventListener("click", () => {
    // Conversion des valeurs en nombres
    const x = Number(inputX.value);
    const y = Number(inputY.value);

    // Réinitialisation du message d'erreur
    feedback.textContent = "";

    // Vérification si les champs sont vides
    if (inputX.value === "" || inputY.value === "") {
        afficherErreur("Tous les champs sont obligatoires.");
        return;
    }

    // Vérification si l'utilisateur entre des nombres
    if (isNaN(x) || isNaN(y)) {
        afficherErreur("Veuillez entrer uniquement des nombres entiers.");
        return;
    }

    // Vérification de la division par zéro
    if (y === 0) {
        afficherErreur("Erreur : on ne divise jamais un nombre par zéro.");
        output.innerHTML = `
            <strong>Somme :</strong> ${x + y} <br>
            <strong>Différence :</strong> ${x - y} <br>
            <strong>Produit :</strong> ${x * y} <br>
            <strong>Quotient :</strong> Impossible
        `;
        return;
    }

    // Affichage des résultats
    afficherResultats(x, y);
});
