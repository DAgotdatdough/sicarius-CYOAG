document.addEventListener('DOMContentLoaded', function() {
    const dialogue = document.getElementById('arrival');
    const text = "You arrive under the cloak of twilight at the sprawling mansion, its ornate gardens aglow with lanterns that cast a golden hue across the opulent estate, located on the quiet outskirts of the capital city. The air hums with the sound of the masquerade ball, where guests adorned in elaborate costumes and masks mingle in decadent revelry. The mansion is heavily guarded, each sentinel's eyes sharp and searching.";
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

function toggleMute() {
    const audio = document.querySelector("#gameMusic");
    const isMuted = localStorage.getItem('muted') === 'true';
    if (isMuted) {
        localStorage.setItem('muted', 'false');
        audio.volume = 0.5; // Set your desired volume
        audio.play(); // Attempt to play the audio
    } else {
        localStorage.setItem('muted', 'true');
        audio.pause();
    }
    // Update mute button image
    loadMuteImg();
}

function loadMuteImg() {
    const isMuted = localStorage.getItem('muted') === 'true';
    document.getElementById('mute_img').src = isMuted ? 'images/music-off.png' : 'images/music-on.png';
    if (isMuted) {
        document.querySelector("audio").pause();
    } else {
        document.querySelector("audio").play();
    }
}

window.onload = function () {
    loadMuteImg(); // Set the correct image for the mute button but don't play audio automatically
};


