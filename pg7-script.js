document.addEventListener('DOMContentLoaded', function() {
    const dialogue = document.getElementById('Death');
    const text = "The final scene unfolds in the shadow-laden study of Lord Veridan, a room steeped in an air of opulence now marred by the grim tableau of death. The assassin stands solemnly over Veridan's lifeless body, sprawled across the rich, dark wood floor amidst a chaotic spread of blood-stained coins. Candlelight flickers from ornate holders, casting unsettling shadows against the walls lined with books, their titles indiscernible in the dim, eerie glow. A large stained-glass window looms overhead, its intricate design offering no solace, only the ghostly moonlight that filters through, illuminating the scene with an otherworldly silver sheen. The air is thick with the metallic scent of blood and the faint crackle of candles burning low. Every surface, from the grand desk to the lush, velvet curtains, whispers tales of power, now silenced by the finality of the blade's whisper.";
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