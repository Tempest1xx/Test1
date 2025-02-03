document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').textContent = "Yay! You've made me the happiest person, Jaweria! 💖";
    document.getElementById('noButton').style.display = 'none'; // Hide the "No" button
});

document.getElementById('noButton').addEventListener('click', function() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    // Randomize the position of the "No" button within the container
    const randomX = Math.random() * (containerRect.width - noButton.offsetWidth);
    const randomY = Math.random() * (containerRect.height - noButton.offsetHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
