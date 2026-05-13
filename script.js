// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// Hover Sound
function playSound() {

    let sound = document.getElementById("hoverSound");

    sound.volume = 0.2;
    sound.currentTime = 0;
    sound.play();

}


// MOBILE CARD EFFECT
document.querySelectorAll('.project-card').forEach(card => {

    card.addEventListener('click', () => {

        // activate
        card.classList.add('active');

        // reset timer
        clearTimeout(card.timeout);

        card.timeout = setTimeout(() => {

            card.classList.remove('active');

        }, 1500);

    });

});
