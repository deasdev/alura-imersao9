

[
    {
      "pergunta": "Qual é o nome verdadeiro do Homem de Ferro?",
      "respostas": [
        "Bruce Banner",
        "Tony Stark",
        "Steve Rogers",
        "Peter Parker"
      ],
      "respostaCorreta": 1 // Tony Stark
    },
    {
      "pergunta": "Qual é o nome do martelo do Thor?",
      "respostas": [
        "Stormbreaker",
        "Mjolnir",
        "Gungnir",
        "Jarnbjorn"
      ],
      "respostaCorreta": 1 // Mjolnir
    },
    {
      "pergunta": "Qual é o nome do planeta natal do Thanos?",
      "respostas": [
        "Xandar",
        "Titan",
        "Asgard",
        "Knowhere"
      ],
      "respostaCorreta": 1 // Titan
    },
    {
      "pergunta": "Qual é o nome da irmã da Viúva Negra?",
      "respostas": [
        "Gamora",
        "Nebula",
        "Yelena Belova",
        "Valkyrie"
      ],
      "respostaCorreta": 2 // Yelena Belova
    },
    {
      "pergunta": "Qual é o nome da joia da mente que estava na testa do Visão?",
      "respostas": [
        "Joia do Espaço",
        "Joia da Realidade",
        "Joia do Tempo",
        "Joia da Mente"
      ],
      "respostaCorreta": 3 // Joia da Mente
    }
  ]




const perguntaContainer = document.getElementById('pergunta-container');
const respostasContainer = document.getElementById('respostas-container');
const proximaPerguntaButton = document.getElementById('proxima-pergunta');
const pontuacaoContainer = document.getElementById('pontuacao-container');

let perguntas = [];
let perguntaAtual = 0;
let pontuacao = 0;

fetch('perguntas.json')
  .then(response => response.json())
  .then(data => {
    perguntas = data;
    mostrarPergunta();
  });

function mostrarPergunta() {
  const pergunta = perguntas[perguntaAtual];
  perguntaContainer.textContent = pergunta.pergunta;

  respostasContainer.innerHTML = '';
  pergunta.respostas.forEach((resposta, index) => {
    const respostaButton = document.createElement('button');
    respostaButton.textContent = resposta;
    respostaButton.addEventListener('click', () => verificarResposta(index));
    respostasContainer.appendChild(respostaButton);
  });
}

function verificarResposta(respostaSelecionada) {
  const pergunta = perguntas[perguntaAtual];
  if (respostaSelecionada === pergunta.respostaCorreta) {
    pontuacao++;
  }

  perguntaAtual++;

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarPontuacao();
  }
}

function mostrarPontuacao() {
  perguntaContainer.style.display = 'none';
  respostasContainer.style.display = 'none';
  proximaPerguntaButton.style.display = 'none';

  pontuacaoContainer.textContent = `Sua pontuação final é ${pontuacao} de ${perguntas.length}`;
}