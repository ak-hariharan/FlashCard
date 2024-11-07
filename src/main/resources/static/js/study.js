let flashcards = [];
let index = 0;

async function loadFlashcards() {
    try {
        const response = await fetch('http://localhost:8080/api/flashcards');
        flashcards = await response.json();
        if (flashcards.length > 0) {
            displayFlashcard();
        } else {
            document.getElementById('study-word').textContent = 'No flashcards available!';
            document.getElementById('study-definition').textContent = '';
        }
    } catch (error) {
        console.error("Error loading flashcards:", error);
    }
}

function displayFlashcard() {
    const wordElement = document.getElementById('study-word');
    const definitionElement = document.getElementById('study-definition');
    wordElement.textContent = flashcards[index].word;
    definitionElement.textContent = flashcards[index].definition;
}

function nextFlashcard() {
    if (flashcards.length > 0) {
        index = (index + 1) % flashcards.length; // Cycle to the next flashcard
        displayFlashcard();
    }
}

window.onload = loadFlashcards;
