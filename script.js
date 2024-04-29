document.getElementById('help-btn').addEventListener('click', function() {
    var helpSection = document.getElementById('help-section');
    if (helpSection.classList.contains('hidden')) {
        helpSection.classList.remove('hidden');
    } else {
        helpSection.classList.add('hidden');
    }
});
// Example of a simple script to handle initial game setup or decisions
document.addEventListener('DOMContentLoaded', function() {
    alert("Your adventure begins now!");
});
