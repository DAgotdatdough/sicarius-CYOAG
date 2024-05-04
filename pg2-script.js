document.addEventListener('DOMContentLoaded', function() {
    const dialogue = document.getElementById('arrival');
    const text = "You arrive under the cloak of twilight at the sprawling mansion, its ornate gardens aglow with lanterns that cast a golden hue across the opulent estate, located on the quiet outskirts of the capital city. The air hums with the sound of the masquerade ball, where guests adorned in elaborate costumes and masks mingle in decadent revelry. The mansion is heavily guarded, each sentinel's eyes sharp and searching. As you take in the scene, you must decide: how will you infiltrate the festivities and accomplish your mission?";
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


