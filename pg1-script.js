document.addEventListener('DOMContentLoaded', function() {
    const dialogue = document.getElementById('dialogue');
    const text = dialogue.innerText;
    const typingSpeed = 30; // milliseconds
    let index = 0;
    const acceptMissionButton = document.getElementById('accept-mission');

    dialogue.innerText = ''; // Clear initial text

    function typeWriter() {
        if (index < text.length) {
            dialogue.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            acceptMissionButton.style.display = 'inline-block'; // Show the button only after the dialogue has finished
        }
    }

    acceptMissionButton.addEventListener('click', function() {
        window.location.href = 'pg2.html'; // Navigate to the next page when the button is clicked
    });

    typeWriter(); // Initialize the typewriter effect
});



