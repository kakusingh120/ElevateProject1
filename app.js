document.querySelector('.follow-btn').addEventListener('click', function() {
    if (this.textContent.includes('Follow')) {
        this.textContent = 'Following ✔️';
        this.style.backgroundColor = '#2a9d8f';
    } else {
        this.textContent = 'Follow 👤';
        this.style.backgroundColor = '#e63946';
    }
});


// let tl = gsap.timeline();


gsap.from(".card-header",{
    y: -200,
    delay: 0.2,
    duration: 1,
})

gsap.from("#post",{
    x: -400,
    duration: 1,
    // stagger: 0.3
})

gsap.from("#project",{
    x: -400,
    // delay: 0.5,
    duration: 1,
    // stagger: 0.3
})

gsap.from("#pen",{
    x: -400,
    // delay: 0.5,
    duration: 0.7,
    // stagger: 0.3
})

gsap.from(".card-skills",{
    y: 400,
    delay: 0.2,
    duration: 1,
})

gsap.from(".skill-level",{
    x: -140,
    delay: 0.8,
    duration: 0.7, 
})

