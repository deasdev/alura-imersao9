const cartas = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
let cartasViradas = [];
let paresEncontrados = 0;

function embaralharCartas() {
  cartas.sort(() => Math.random() - 0.5);
}

function criarTabuleiro() {
  const tabuleiro = document.getElementById('tabuleiro');
  tabuleiro.innerHTML = ''; // Limpa o tabuleiro antes de criar novas cartas
  for (let i = 0; i < cartas.length; i++) {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.dataset.valor = cartas[i];
    carta.addEventListener('click', virarCarta);
    tabuleiro.appendChild(carta);
  }
}

function virarCarta(evento) {
  const carta = evento.target;
  if (cartasViradas.length < 2 && !carta.classList.contains('virada')) {
    carta.classList.add('virada');
    cartasViradas.push(carta);

    if (cartasViradas.length === 2) {
      verificarPares();
    }
  }
}

function verificarPares() {
  const carta1 = cartasViradas[0];
  const carta2 = cartasViradas[1];

  if (carta1.dataset.valor === carta2.dataset.valor) {
    paresEncontrados++;
    if (paresEncontrados === cartas.length / 2) {
      print('Você venceu!');
    }
    cartasViradas = [];
  } else {
    setTimeout(() => {
      carta1.classList.remove('virada');
      carta2.classList.remove('virada');
      cartasViradas = [];
    }, 1000);
  }
}

function reiniciarJogo() {
  cartasViradas = [];
  paresEncontrados = 0;
  embaralharCartas();
  criarTabuleiro();
}

embaralharCartas();
criarTabuleiro();

document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);