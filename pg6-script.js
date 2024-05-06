document.addEventListener('DOMContentLoaded', function() {
    const dialogue = document.getElementById('Information');
    const text = "Silently, you arrive at the heavy oak door of Lord Veridan's study. You knock lightly, mimicking the manner of a butler, despite your lack of proper attire. A gruff Enter responds from the other side. Taking a deep breath to brace yourself, you gently turn the knob and push the door open, stepping into a scene that feels ripped from a clandestine tale. The room is dimly lit, illuminated only by a few candles casting long shadows against the walls. At a large, ornate desk sits Lord Veridan, his back to you, the air around him heavy with the metallic scent of blood. He is counting coins stained with crimson, each clink echoing ominously in the quiet room.";
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