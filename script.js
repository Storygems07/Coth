const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle{

    constructor(){

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 2 + 1;

        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;

        this.opacity = Math.random();

    }

    update(){

        this.x += this.speedX;
        this.y += this.speedY;

        if(this.x > canvas.width){
            this.x = 0;
        }

        if(this.x < 0){
            this.x = canvas.width;
        }

        if(this.y > canvas.height){
            this.y = 0;
        }

        if(this.y < 0){
            this.y = canvas.height;
        }

    }

    draw(){

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;

        ctx.fill();

    }

}

function initParticles(){

    particlesArray = [];

    for(let i = 0; i < 180; i++){

        particlesArray.push(new Particle());

    }

}

function animateParticles(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particlesArray.forEach((particle)=>{

        particle.update();

        particle.draw();

    });

    requestAnimationFrame(animateParticles);

}

initParticles();

animateParticles();

window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

    initParticles();

});

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click",()=>{

    document.getElementById("timeline").scrollIntoView({

        behavior:"smooth"

    });

});

const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");

let musicPlaying = false;

musicBtn.addEventListener("click",()=>{

    if(!musicPlaying){

        bgMusic.play();

        musicBtn.innerText = "Pause Music";

        musicPlaying = true;

    }

    else{

        bgMusic.pause();

        musicBtn.innerText = "Play Music";

        musicPlaying = false;

    }

});

const secretBtn = document.getElementById("secretBtn");

const hiddenMessage = document.getElementById("hiddenMessage");

secretBtn.addEventListener("click",()=>{

    hiddenMessage.classList.toggle("show");

});

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        nav.style.background = "rgba(2,6,23,0.85)";

        nav.style.boxShadow =
        "0 0 30px rgba(0,0,0,0.3)";

    }

    else{

        nav.style.background =
        "rgba(2,6,23,0.45)";

        nav.style.boxShadow = "none";

    }

});

const revealElements = document.querySelectorAll(

    ".timeline-item, .memory-card, .secret-card, .glass-card"

);

revealElements.forEach((element)=>{

    element.style.opacity = "0";

    element.style.transform = "translateY(80px)";

    element.style.transition = "1s ease";

});

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach((element)=>{

        const revealTop =
        element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

const daysCounter =
document.getElementById("daysCounter");

const startDate =
new Date("July 22, 2025 00:00:00");

const currentDate = new Date();

const difference =
currentDate - startDate;

const totalDays =
Math.floor(

    difference /
    (1000 * 60 * 60 * 24)

);

daysCounter.innerText = totalDays;

function createHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML = "🤍";

    heart.style.position = "fixed";

    heart.style.left =
    Math.random() * window.innerWidth + "px";

    heart.style.top =
    window.innerHeight + "px";

    heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

    heart.style.opacity = Math.random();

    heart.style.zIndex = "999";

    heart.style.pointerEvents = "none";

    heart.style.transition =
    "transform 6s linear, opacity 6s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform =
        `translateY(-${window.innerHeight + 200}px)`;

        heart.style.opacity = "0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,900);

const cursorGlow =
document.createElement("div");

cursorGlow.style.width = "25px";

cursorGlow.style.height = "25px";

cursorGlow.style.borderRadius = "50%";

cursorGlow.style.position = "fixed";

cursorGlow.style.background =
"rgba(255,255,255,0.3)";

cursorGlow.style.pointerEvents = "none";

cursorGlow.style.backdropFilter = "blur(5px)";

cursorGlow.style.zIndex = "99999";

cursorGlow.style.transform =
"translate(-50%,-50%)";

document.body.appendChild(cursorGlow);

window.addEventListener("mousemove",(e)=>{

    cursorGlow.style.left =
    e.clientX + "px";

    cursorGlow.style.top =
    e.clientY + "px";

});

const memoryCards =
document.querySelectorAll(".memory-card");

memoryCards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,0.2),
        rgba(255,255,255,0.04))`;

    });

    card.addEventListener("mouseleave",()=>{

        if(card.classList.contains("card1")){

            card.style.backgroundImage =
            "url('images/memory1.jpg')";

        }

        if(card.classList.contains("card2")){

            card.style.backgroundImage =
            "url('images/memory2.jpg')";

        }

        if(card.classList.contains("card3")){

            card.style.backgroundImage =
            "url('images/memory3.jpg')";

        }

        if(card.classList.contains("card4")){

            card.style.backgroundImage =
            "url('images/beach.jpg')";

        }

    });

});

const finalHeading =
document.querySelector(".final-section h1");

finalHeading.style.opacity = "0";

finalHeading.style.transform =
"translateY(80px)";

finalHeading.style.transition =
"1s ease";

window.addEventListener("scroll",()=>{

    const position =
    finalHeading.getBoundingClientRect().top;

    if(position < window.innerHeight - 100){

        finalHeading.style.opacity = "1";

        finalHeading.style.transform =
        "translateY(0px)";

    }

});

function createStar(){

    const star =
    document.createElement("div");

    star.style.position = "fixed";

    star.style.width = "2px";

    star.style.height = "2px";

    star.style.borderRadius = "50%";

    star.style.background = "white";

    star.style.left =
    Math.random() * window.innerWidth + "px";

    star.style.top =
    Math.random() * window.innerHeight + "px";

    star.style.opacity = Math.random();

    star.style.zIndex = "-1";

    document.body.appendChild(star);

}

for(let i = 0; i < 150; i++){

    createStar();

}

console.log(

`
Happy 10 Months Shonamuniii 🤍

Made with love by Aashu ✨
`

);
