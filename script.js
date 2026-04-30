/* ===============================
   🎬 SMOOTH SCROLL
================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


/* ===============================
   🎬 SCROLL FADE-IN ANIMATION
================================= */
const sections = document.querySelectorAll('.section');

function revealSections() {
    const triggerPoint = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealSections);

// Run once on load
revealSections();


/* ===============================
   🎧 HOVER SOUND (SAFE VERSION)
================================= */
function playSound() {
    const sound = document.getElementById("hoverSound");

    if (sound) {
        sound.volume = 0.2;
        sound.currentTime = 0;

        // Prevent browser autoplay errors
        sound.play().catch(() => {});
    }
}
