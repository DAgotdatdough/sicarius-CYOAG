
document.getElementById('help-btn').addEventListener('click', function() {
    var helpSection = document.getElementById('help-section');
    if (helpSection.classList.contains('hidden')) {
        helpSection.classList.remove('hidden');
    } else {
        helpSection.classList.add('hidden');
    }
});


function toggleMute() {
    const audio = document.querySelector("audio");
    const isMuted = localStorage.getItem('muted') === 'true';
    localStorage.setItem('muted', !isMuted);
    document.getElementById('mute_img').src = isMuted ? 'images/music-on.png' : 'images/music-off.png';
    if (isMuted) {
        audio.volume = 0.2;
        audio.play();
    } else {
        audio.pause();
    }
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

window.onload = loadMuteImg;





