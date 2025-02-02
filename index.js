//array(lista) com todas as perguntas em forma de objeto
const perguntas = [
  {
    pergunta:
      "Qual é a maneira correta de declarar uma variável em JavaScript?",
    respostas: ["var variavel;", "dim variavel;", "let variavel;"],
    correta: 2,
  },
  {
    pergunta:
      "Qual método pode ser usado para converter uma string em um número?",
    respostas: ["parseInt()", "toString()", "concat()"],
    correta: 0,
  },

  {
    pergunta: "Qual é a saída do seguinte código: console.log(typeof null);?",
    respostas: ["'null'", "'object'", "'undefined'"],
    correta: 1,
  },
  {
    pergunta: "Como você pode detectar o tipo de uma variável em JavaScript?",
    respostas: ["typeof", "getType", "checkType"],
    correta: 0,
  },
  {
    pergunta: "Qual método pode ser usado para unir dois arrays?",
    respostas: ["merge()", "concat()", "append()"],
    correta: 1,
  },
  {
    pergunta: "Como você adiciona um comentário em JavaScript?",
    respostas: [
      "// Isto é um comentário",
      "' Isto é um comentário",
      "<!-- Isto é um comentário -->",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é a sintaxe correta para uma instrução condicional em JavaScript?",
    respostas: ["if i == 5 then", "if (i == 5)", "if i = 5"],
    correta: 1,
  },
  {
    pergunta: "Como você cria uma função em JavaScript?",
    respostas: [
      "function:myFunction()",
      "function myFunction()",
      "create myFunction()",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é o resultado de '2' + 2 em JavaScript?",
    respostas: ["22", "4", "undefined"],
    correta: 0,
  },
  {
    pergunta: "Qual operador é usado para atribuir um valor a uma variável?",
    respostas: ["=", "==", "==="],
    correta: 0,
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const corretas = new Set()
const totalPerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas

for(const item of perguntas) { 
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector("input").setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + " de " + totalPerguntas;
    }



    quizItem.querySelector('dl').appendChild(dt)
  }
  //remove a questao de exemplo
  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}