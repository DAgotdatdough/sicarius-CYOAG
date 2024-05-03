document.addEventListener('DOMContentLoaded', function() {
    let options = document.querySelectorAll('.option');
    let delay = 0;

    options.forEach(function(option, index) {
        setTimeout(function() {
            option.style.display = 'block'; // Change display to block
            option.style.opacity = 1; // Animate opacity to 1 to fade in
        }, delay);
        delay += 3000; // Increment delay for the next option
    });
});

