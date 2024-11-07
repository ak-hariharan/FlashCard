const apiUrl = 'http://localhost:8080/api/flashcards';

async function getFlashcards() {
    const response = await fetch(apiUrl);
    const flashcards = await response.json();
    const list = document.getElementById('flashcard-list');
    list.innerHTML = flashcards.map(flashcard =>
        `<li>${flashcard.word}: ${flashcard.definition}</li>`
    ).join('');
}

async function addFlashcard(event) {
    event.preventDefault();
    const word = document.getElementById('word').value;
    const definition = document.getElementById('definition').value;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ word, definition })
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Clear the form fields
        document.getElementById('word').value = '';
        document.getElementById('definition').value = '';

        // Show success message
        const messageDiv = document.getElementById('message');
        messageDiv.innerText = 'Flashcard added successfully!';
        messageDiv.style.color = 'green'; // Optional: Change message color to green

        // Refresh the list of flashcards
        getFlashcards();
    } catch (error) {
        console.error('Error adding flashcard:', error);
        const messageDiv = document.getElementById('message');
        messageDiv.innerText = 'Failed to add flashcard.';
        messageDiv.style.color = 'red'; // Optional: Change message color to red
    }
}

document.getElementById('flashcard-form').addEventListener('submit', addFlashcard);
window.onload = getFlashcards;
