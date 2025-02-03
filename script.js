// Auto-play music with click fallback
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('music');
    music.volume = 0.3; // Set volume to 30%

    // Try to autoplay music
    const playMusic = () => {
        music.play().catch(() => {
            // If autoplay is blocked, show a fallback message
            const fallback = document.createElement('div');
            fallback.className = 'music-fallback';
            fallback.textContent = "Click anywhere to start music! 💖";
            document.body.appendChild(fallback);

            // Start music on user interaction
            document.body.addEventListener('click', () => {
                music.play();
                fallback.remove();
            }, { once: true });
        });
    };

    playMusic();
});

// Yes button response
document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "YAY! 💖<br>You just made my heart do backflips!";
    document.getElementById('noButton').remove();
});

// No button movement magic
document.getElementById('noButton').addEventListener('mousedown', function(e) {
    e.preventDefault(); // Prevent the button from being clicked
    const button = this;
    const container = button.parentElement;

    // Random angle and distance
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 100 + 50;

    // Calculate new position
    const newX = Math.cos(angle) * distance;
    const newY = Math.sin(angle) * distance;

    // Apply movement
    button.style.transform = `translate(${newX}px, ${newY}px)`;

    // Reset position after 1 second
    setTimeout(() => {
        button.style.transform = 'translate(0, 0)';
    }, 1000);
});
