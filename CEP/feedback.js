function submitFeedback() {
    const feedbackText = document.getElementById('feedbackText').value;
    const feedbackDisplay = document.getElementById('feedbackDisplay');
    
    if (feedbackText.trim() === '') {
        document.querySelector('.meme-container')
            .innerHTML = `<img src="images/say-name.jpg">`
        return;
    }
    else if(feedbackText.trim() === 'heisenberg' || feedbackText.trim() === 'Heisenberg') {
        document.querySelector('.meme-container')
            .innerHTML = `<img src="images/right.png">`
    }
    
    feedbackDisplay.textContent = `Annonymous: ${feedbackText}`;
    feedbackDisplay.style.display = 'block';
    
    document.getElementById('feedbackText').value = '';
}