const audio = document.getElementById('meuhSound');
const messageElement = document.getElementById('message');

// Initialisation du message
messageElement.textContent = "Secousse non détectée";

window.addEventListener('devicemotion', (event) => {
    const seuil = 10; // Ajustez le seuil selon vos besoins

    if (Math.abs(event.accelerationIncludingGravity.x) > seuil ||
        Math.abs(event.accelerationIncludingGravity.y) > seuil ||
        Math.abs(event.accelerationIncludingGravity.z) > seuil) {
        audio.play();
        messageElement.textContent = "Secousse détectée !";
    }
});
