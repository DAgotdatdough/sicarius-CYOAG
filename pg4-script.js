document.addEventListener('DOMContentLoaded', function() {
    const assassin = document.getElementById('assassin');
    const assassinHealthEl = document.getElementById('assassin-health');
    const guardHealthEl = document.getElementById('guard-health');
    const gameMessage = document.getElementById('game-message');
    const attackButton = document.getElementById('attack-button');

    let assassinHealth = 100;
    let guardHealth = 100;

    attackButton.addEventListener('click', function() {
        assassin.style.animation = 'attackAnimation 1s forwards';
        setTimeout(performAttack, 500); // Align this with the peak of the animation
    });

    function performAttack() {
        const assassinDamage = Math.floor(Math.random() * 10) + 10;
        const guardDamage = Math.floor(Math.random() * 5) + 5;

        guardHealth -= assassinDamage;
        assassinHealth -= guardDamage;

        updateHealthDisplay();

        if (guardHealth <= 0 || assassinHealth <= 0) {
            endGame();
        }
        setTimeout(() => assassin.style.animation = '', 1000); // Reset animation
    }

    function updateHealthDisplay() {
        assassinHealthEl.textContent = Math.max(0, assassinHealth);
        guardHealthEl.textContent = Math.max(0, guardHealth);
    }

    function endGame() {
        attackButton.disabled = true;
        if (assassinHealth > 0) {
            gameMessage.textContent = "Assassin wins!";
        } else {
            gameMessage.textContent = "Guard wins!";
        }
    }
});

