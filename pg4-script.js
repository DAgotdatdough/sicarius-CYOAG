document.addEventListener('DOMContentLoaded', function() {
    const assassin = document.getElementById('assassin');
    const guard = document.getElementById('guard');
    const assassinHealthEl = document.getElementById('assassin-health');
    const guardHealthEl = document.getElementById('guard-health');
    const assassinHealthBar = document.getElementById('assassin-health-bar');
    const guardHealthBar = document.getElementById('guard-health-bar');
    const gameMessage = document.getElementById('game-message');
    const attackButton = document.getElementById('attack-button');

    let assassinHealth = 100;
    let guardHealth = 100;

    attackButton.addEventListener('click', function() {
        triggerAnimations();
        setTimeout(() => {
            performAssassinAttack();
            setTimeout(() => {
                performGuardAttack();
                setTimeout(checkEndGame, 500); // Check end game status after all updates
            }, 1000); // Time after assassin's attack to start guard's attack
        }, 10); // Triggering the animations immediately after button click
    });

    function performAssassinAttack() {
        const damage = Math.floor(Math.random() * 10) + 10;
        guardHealth = Math.max(0, guardHealth - damage);
        updateHealthDisplay();
    }

    function performGuardAttack() {
        const damage = Math.floor(Math.random() * 5) + 5;
        assassinHealth = Math.max(0, assassinHealth - damage);
        updateHealthDisplay();
    }

    function updateHealthDisplay() {
        assassinHealthEl.textContent = assassinHealth;
        guardHealthEl.textContent = guardHealth;

        const assassinHealthPercent = (assassinHealth / 100) * 100;
        const guardHealthPercent = (guardHealth / 100) * 100;

        assassinHealthBar.style.width = `${assassinHealthPercent}%`;
        guardHealthBar.style.width = `${guardHealthPercent}%`;
    }

    function endGame() {
        attackButton.disabled = true;
        gameMessage.textContent = (assassinHealth > 0) ? "Assassin wins!" : "Guard wins!";
        document.getElementById('next-page-button').style.display = 'block';
        document.getElementById('next-page-button').addEventListener('click', function() {
            window.location.href = 'pg5.html'; 
        });
    }

    function triggerAnimations() {
        assassin.style.animation = 'none';
        guard.style.animation = 'none';

        setTimeout(() => {
            assassin.style.animation = 'attackAnimation 1s forwards';
        }, 10);

        setTimeout(() => {
            guard.style.animation = 'guardAttackAnimation 1s forwards';
        }, 1100); // Delay long enough for the assassin's animation to finish
    }

    function checkEndGame() {
        if (guardHealth <= 0 || assassinHealth <= 0) {
            endGame();
        }
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


