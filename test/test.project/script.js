let currentPokemonIndex = 0; // Beispielindex des aktuellen Pokémon
const totalPokemon = 150; // Beispielhafte Anzahl der Pokémon im Pokédex

function navigateLeft() {
    if (currentPokemonIndex > 0) {
        currentPokemonIndex--;
        // Funktion zum Aktualisieren der Pokémon-Informationen
        updatePokemonInfo();
        hideMessage();
    } else {
        showMessage("Das ist das erste Pokémon. Es gibt keine weiteren Pokémon auf der linken Seite.");
    }
}

function navigateRight() {
    if (currentPokemonIndex < totalPokemon - 1) {
        currentPokemonIndex++;
        // Funktion zum Aktualisieren der Pokémon-Informationen
        updatePokemonInfo();
        hideMessage();
    } else {
        showMessage("Das ist das letzte Pokémon. Es gibt keine weiteren Pokémon auf der rechten Seite.");
    }
}

function showMessage(message) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    messageDiv.classList.add("visible");
}

function hideMessage() {
    const messageDiv = document.getElementById("message");
    messageDiv.classList.remove("visible");
}

function updatePokemonInfo() {
    // Logik zum Aktualisieren der Pokémon-Informationen basierend auf currentPokemonIndex
}
