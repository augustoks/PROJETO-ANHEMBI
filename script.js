// o elemento que representa o Mario
const mario = document.querySelector('.mario');

// elemento que representa o tubo
const pipe = document.querySelector('.pipe');

// altura do pulo
const jumpHeight = 150;

// vai definir a velocidade do pulo
const jumpSpeed = 370 ;

// Variável que indica se o Mario está pulando
let isJumping = false;

// Função que vai fazer o Mario pular
function jump() {
  if (!isJumping) {
    isJumping = true;
    // Anima o Mario para cima
    mario.style.transform = `translateY(-${jumpHeight}px)`;
    mario.style.transition = `transform ${jumpSpeed}ms`;

    // Aguarda o fim da animação
    setTimeout(() => {
      // Anima o Mario para baixo
      mario.style.transform = `translateY(0px)`;
      mario.style.transition = `transform ${jumpSpeed}ms`;
      isJumping = false;
    }, jumpSpeed);
  }
}

// Adiciona um evento de teclado para detectar a tecla espaço
document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    jump();
  }
});



























