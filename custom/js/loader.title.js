window.addEventListener('load', function() {
    setTimeout(() => {
        var loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden'); // Add the 'hidden' class  
    }, 500);
});
function marqueeTitle() {
    var title = document.title;
    var words = title.split(" "); // Split title into words
    var firstWord = words.shift(); // Remove the first word
    words.push(firstWord); // Add the first word at the end
    document.title = words.join(" "); // Reconstruct title with spaces
    setTimeout(marqueeTitle, 2000); // Adjust the speed (in milliseconds) here
}
// Start the marquee effect when the page loads
window.onload = function() {
    marqueeTitle();
};