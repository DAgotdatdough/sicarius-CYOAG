document.addEventListener('DOMContentLoaded', function() {
    const dialogue = document.getElementById('dialogue');
    const text = "Good evening. I trust you've come prepared for what I'm about to propose. Your mission, should you choose to accept it, involves the elimination of Lord Veridan during his annual masquerade ball tonight. This is no ordinary social gathering; it’s a confluence of the kingdom’s most influential figures, draped in secrecy and extravagance.";
    let index = 0;
    dialogue.innerText = '';
    const optionsContainer = document.getElementById('options-container');
    let delay = 4000; // Initial delay before showing the first option

    function typeWriter() {
        if (index < text.length) {
            dialogue.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 30); // Typing speed in milliseconds
        } else {
            // Once the dialogue is complete, start showing options
            showOptions();
        }
    }

    function showOptions() {
        let options = document.querySelectorAll('.option');
        options.forEach(function(option) {
            setTimeout(function() {
                option.style.display = 'block';
                option.style.opacity = 1;
            }, delay);
            delay += 4000; // Increment delay for the next option
        });
    }

    typeWriter(); // Initialize the typewriter effect
});


function navigate(url) {
    window.location.href = url; // Redirect to the specified URL
}



