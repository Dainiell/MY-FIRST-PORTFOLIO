window.addEventListener('load', () => {
    document.body.classList.add('loaded'); 
});


window.addEventListener('load', () => {
    const text1 = document.querySelector('.text1');
    text1.style.animation = 'slideInFromLeft 2s cubic-bezier(0.25, 1, 0.5, 1) forwards';
});


window.addEventListener('load', () => {
    const subtext = document.querySelector('.subtext');
    subtext.style.animation = 'slideInFromLeft 2s ease-out forwards';
});

window.addEventListener('load', () => {
    const subtext = document.querySelector('.rectangle');
    subtext.style.animation = 'slideInFromLeft 1s ease-out forwards';
});

document.addEventListener("DOMContentLoaded", () => {
    const texts = document.querySelectorAll(".descriptext");
    texts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = 1; 
        }, index * 500); 
    });
});

window.addEventListener('load', () => {
    document.querySelectorAll('.button, .Btnig, .Btnlink, .Btngit').forEach(button => {
      button.style.animation = 'slideUp 1s ease-out forwards';
    });
});


// TILT EFFECT 

document.addEventListener('DOMContentLoaded', () => {
    const profile = document.querySelector('.profile');
    const container = document.querySelector('.image-container');
    let isHovering = false;

    const handleMouseMove = (e) => {
        if (!isHovering) return;
        
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const tiltX = ((mouseY / rect.height) - 0.5) * 20;
        const tiltY = ((mouseX / rect.width) - 0.5) * 20;
        
        // Updated transform to maintain scale
        profile.style.transform = `scale(1.5) rotateX(${-tiltX}deg) rotateY(${tiltY}deg)`;
    };

    container.addEventListener('mouseenter', () => {
        isHovering = true;
    });

    container.addEventListener('mousemove', handleMouseMove);

    container.addEventListener('mouseleave', () => {
        isHovering = false;
        profile.style.transition = 'transform 0.5s ease-out';
        profile.style.transform = 'scale(1.5)';
    });
});












