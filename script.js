// Sélectionner l'élément audio
const audio = document.getElementById('meuhSound');

// Détection du mouvement
window.addEventListener('devicemotion', (event) => {
    // Ajuster le seuil en fonction de la sensibilité souhaitée
    const seuil = 10;

    // Vérifier si l'accélération dépasse le seuil
    if (Math.abs(event.accelerationIncludingGravity.x) > seuil ||
        Math.abs(event.accelerationIncludingGravity.y) > seuil ||
        Math.abs(event.accelerationIncludingGravity.z) > seuil) {
        audio.play();
    }
});