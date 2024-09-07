// Function to toggle the visibility of sections
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === 'None') {
            section.style.display = 'Block';
        }
        else {
            section.style.display = 'None';
        }
    }
}
window.onload = function () {
    console.log('Resume loaded successfully!');
};
