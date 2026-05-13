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


// SECTION REVEAL
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

revealSections();


// MOBILE CARD EFFECT
document.querySelectorAll('.project-card').forEach(card => {

    card.addEventListener('click', () => {

        card.classList.add('active');

        clearTimeout(card.timeout);

        card.timeout = setTimeout(() => {

            card.classList.remove('active');

        }, 1500);

    });

});


// MOUSE GLOW
const glow = document.createElement('div');

glow.classList.add('glow');

document.body.appendChild(glow);

document.addEventListener('mousemove', e => {

    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';

});
