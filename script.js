document.getElementById('help-btn').addEventListener('click', function() {
    var helpSection = document.getElementById('help-section');
    if (helpSection.classList.contains('hidden')) {
        helpSection.classList.remove('hidden');
    } else {
        helpSection.classList.add('hidden');
    }
});

// Consider adding more functionality here for starting or loading games.