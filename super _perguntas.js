
const progresso = document.querySelector('.progresso');
const pergunta = document.querySelector('.pergunta');
const respostas = document.querySelector('.respostas');
const fim = document.querySelector('.fim');
const reiniciar = document.getElementById('reiniciar');
const resultado = fim.querySelector('span');

let perguntas = [
    {
        pergunta: 'Qual a capital do Brasil?',
        respostas: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],
        respostaCorreta: 1
    },
    {
        pergunta: 'Quanto é 2 + 2?',
        respostas: ['3', '4', '5', '6'],
        respostaCorreta: 1
    },
    {
        pergunta: 'Qual é o maior planeta do sistema solar?',
        respostas: ['Terra', 'Marte', 'Júpiter', 'Saturno'],
        respostaCorreta: 2
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta() {
    if (perguntaAtual < perguntas.length) {
        progresso.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
        pergunta.textContent = perguntas[perguntaAtual].pergunta;
        respostas.innerHTML = '';

        perguntas[perguntaAtual].respostas.forEach((resposta, index) => {
            const botaoResposta = document.createElement('button');
            botaoResposta.textContent = resposta;
            botaoResposta.addEventListener('click', () => verificarResposta(index));
            respostas.appendChild(botaoResposta);
        });
    } else {
        mostrarResultado();
    }
}

function verificarResposta(respostaSelecionada) {
    if (respostaSelecionada === perguntas[perguntaAtual].respostaCorreta) {
        pontuacao++;
    }
    perguntaAtual++;
    carregarPergunta();
}

function mostrarResultado() {
    pergunta.textContent = '';
    respostas.innerHTML = '';
    progresso.textContent = '';
    resultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
}

function reiniciarJogo() {
    perguntaAtual = 0;
    pontuacao = 0;
    carregarPergunta();
}

reiniciar.addEventListener('click', reiniciarJogo);

carregarPergunta();