//typed js
    var typed = new Typed(".typing-text", {
        strings: ["Fullstack Web Developer"],
        loop: true,
        typeSpeed: 50,
		backSpeed: 25,
		backDelay: 500,
    });
 
//SCROLL REVEAL ANIMATION
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

//Home
srtop.reveal('.home .content h3',{delay: 200}); 
srtop.reveal('.home .content p',{delay: 200}); 
srtop.reveal('.home .content .btn',{delay: 200}); 
srtop.reveal('.home .image',{delay: 400}); 
srtop.reveal('.home .linkedin',{interval: 600}); 
srtop.reveal('.home .github',{interval: 800});
srtop.reveal('.home .fas fa-envelope',{interval:800});

//About
srtop.reveal('.about .content h3',{delay: 300});
srtop.reveal('.about .content .tag',{delay: 400}); 
srtop.reveal('.about .content p',{delay: 300}); 
srtop.reveal('.about .content .box-container',{delay: 300}); 
srtop.reveal('.about .content .resumebtn',{delay: 300}); 

//Skills
srtop.reveal('.skills .container',{interval: 200}); 
srtop.reveal('.skills .container .bar',{delay: 400}); 

//Education
srtop.reveal('.education .box',{interval: 200}); 

//Projects
srtop.reveal('.project .box',{interval: 200}); 

//Contact
srtop.reveal('.contact .container',{delay: 400});
srtop.reveal('.contact .container .form-group',{delay: 400});