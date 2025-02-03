// Start background music automatically (if allowed by browser)
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('backgroundMusic');
    music.volume = 0.3; // Lower volume for subtlety
    music.play().catch(() => {
        // If autoplay is blocked, add a click-to-play button
        const container = document.querySelector('.container');
        const playButton = document.createElement('button');
        playButton.textContent = "Click here to start music 🎵";
        playButton.style.marginTop = "20px";
        playButton.onclick = () => music.play();
        container.appendChild(playButton);
    });
});

// Handle "Yes" button click
document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').textContent = "Yay! You've made me the happiest person, Jaweria! 💖";
    document.getElementById('noButton').style.display = 'none'; // Remove the "No" button
});

// Make the "No" button move randomly when hovered
document.getElementById('noButton').addEventListener('mouseover', function() {
    const noButton = this;
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    // Calculate new random position within the container
    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
});
