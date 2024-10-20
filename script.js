const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';

}

var mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


const canvasOne = document.querySelector('.canvasOne');

const ctx = canvasOne.getContext('2d');

canvasOne.width = window.innerWidth
canvasOne.height = window.innerHeight

addEventListener('resize', () => {
    canvasOne.width = window.innerWidth
    canvasOne.height = window.innerHeight
})
canvasOne.addEventListener('mousedown', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
})

canvasOne.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    for (let i = 0; i < 3; i++) {
        particleArray.push(new Particle());
    }
})

const mouse = {
    x: undefined,
    y: undefined
}
const particleArray = []
let hue = 0;

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'dodgerblue';
    }
    draw() {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.stroke()
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) {
            this.size -= 0.1;
        }

        this.draw();
    }
}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvasOne.width, canvasOne.height);

    particleArray.forEach((particle, index) => {
        particle.update()
        if (particle.size <= 0.3) {
            particleArray.splice(index, 1);
            console.log(particleArray.length);
        }
    })
    hue += 5
}

animate();