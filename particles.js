// Seleccionar el canvas y su contexto
const canvas = document.getElementById('particlesCanvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Crear una clase para las partículas
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    // Método para actualizar la posición de la partícula
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Rebotar si sale del canvas
        if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
    }

    // Método para dibujar la partícula en el canvas
    draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

// Crear un array de partículas
const particlesArray = [];
const numberOfParticles = 100;

for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
}

// Función para animar las partículas
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

// Iniciar la animación
animate();
