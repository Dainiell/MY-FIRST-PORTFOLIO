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


  
  








