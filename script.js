const canvas = document.querySelector('.fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 8;
        this.speedY = (Math.random() - 0.5) * 8;
        this.life = 100;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
    }

    draw() {
        ctx.globalAlpha = this.life / 100;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function createFirework(x, y) {
    const colors = ['#ff5733', '#ffc300', '#c70039', '#900c3f', '#581845'];
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        if (particle.life <= 0) {
            particles.splice(index, 1);
        } else {
            particle.update();
            particle.draw();
        }
    });
    requestAnimationFrame(animate);
}

canvas.addEventListener('click', (e) => {
    createFirework(e.clientX, e.clientY);
});

animate();
