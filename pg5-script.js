document.addEventListener('DOMContentLoaded', function() {
    const dialogue = document.getElementById('Information');
    const text = "As the distant bell tolls, marking the stroke of midnight, the once tense air is now punctuated by its somber chime. You stand over the guard, his uniform stained with blood that seeps into the cold cobblestone beneath him. His breaths are shallow, his gaze filled with a mix of fear and resignation. With a calculated tone, you offer him mercy in exchange for crucial information. Clutching his side, he winces and nods, desperation clear in his eyes. Lord Veridan, he rasps, his voice barely above a whisper, he's always in his study at this hour, at the top of the mansion. Please, just let me live. Armed with this new knowledge, you decide to take this oppurtinity at once.";
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