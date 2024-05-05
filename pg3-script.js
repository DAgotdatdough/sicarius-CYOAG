document.addEventListener('DOMContentLoaded', function() {
    const dialogue = document.getElementById('spotted');
    const text = "As you stealthily approach the dimly lit servant's entrance at the rear of the mansion, the muffled sounds of laughter and music from the ball grow fainter, replaced by the soft clinking of dishes and the low murmur of kitchen staff. Your hand is just about to grasp the cold metal of the door handle when the door suddenly swings open. A guard, looking more surprised than you, stands in the threshold. His eyes widen as they lock onto yours, a mix of confusion and alarm flickering across his face. Instinct kicks in for both of you, but only one can act first. What will you do?";
    let index = 0;
    dialogue.innerText = '';
    const optionsContainer = document.getElementById('options-container');
    let delay = 4000; // Initial delay before showing the first option

    function typeWriter() {
        if (index < text.length) {
            dialogue.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 18); // Typing speed in milliseconds
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
