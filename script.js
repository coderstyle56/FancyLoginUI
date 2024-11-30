// Handle the end of the cover image animation
document.querySelector('.cover img').addEventListener('animationend', function(event) {
    if (event.animationName === 'zoomInFadeIn') {
        // Show the form with an animation
        document.getElementById('loginForm').classList.add('show-form');

        // Show form content with the bottom-up effect
        document.querySelector('.form-content').classList.add('show-form');

        // Slide in the right section
        document.querySelector('.right-section').classList.add('show-right-section');
    }

    // Reset classes after the reverse cover animation completes
    if (event.animationName === 'reverseToLeft') {
        // Remove form hiding and reverse-cover animation classes after they are done
        document.getElementById('loginForm').classList.remove('show-form', 'hide-form');
        document.querySelector('.cover img').classList.remove('reverse-cover');
    }
});

// // Handle login button click
// document.querySelector('.btn-login').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent form submission for demo purposes

//     // First, hide the form with animation
//     document.getElementById('loginForm').classList.add('hide-form');

//     // After hiding the form, trigger the cover to move back to full screen
//     setTimeout(function() {
//         document.querySelector('.cover img').classList.add('reverse-cover');

//     }, 300); // Delay to ensure form hiding animation completes first
// });



