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

        // remove active from all cards
        document.querySelectorAll('.project-card').forEach(c => {
            c.classList.remove('active');
        });

        // activate clicked card
        card.classList.add('active');

        // auto reset after 2 sec
        setTimeout(() => {
            card.classList.remove('active');
        }, 2000);

    });

});
