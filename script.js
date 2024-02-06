const perguntas = [
    {
      pergunta: "O que significa 'DOM' em JavaScript?",
      respostas: [
          "Documento Orientado a Modelos",
          "Documento de Objeto Móvel",
          "Modelo de Objeto de Documento"
      ],
      correta: 2
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
          "var",
          "const",
          "let"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
          "remove()",
          "delete()",
          "pop()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
          "Comparação estrita de igualdade",
          "Atribuição",
          "Comparação de igualdade"
      ],
      correta: 0
    },
    {
      pergunta: "Como você define uma função em JavaScript?",
      respostas: [
          "def myFunction() {}",
          "fun myFunction() {}",
          "function myFunction() {}"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de linha única em JavaScript?",
      respostas: [
          "/* Comentário */",
          "// Comentário",
          "<!-- Comentário -->"
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
      respostas: [
          "toString()",
          "parseInt()",
          "parseFloat()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão 10 + '5' em JavaScript?",
      respostas: [
          "'105'",
          "15",
          "'15'"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '&&' em JavaScript?",
      respostas: [
          "Ou",
          "E",
          "Não"
      ],
      correta: 1
    },
    {
      pergunta: "Como você acessa o primeiro elemento de um array em JavaScript?",
      respostas: [
          "array[1]",
          "array.first()",
          "array[0]"
      ],
      correta: 2
    }
  ];
  
  // Exemplo de acesso a uma pergunta:
  console.log(perguntas[0].pergunta);
  console.log(perguntas[0].respostas);
  console.log(perguntas[0].correta);

  const quiz = document.querySelector("#quiz")
  const template = document.querySelector('template')


  // Loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    // Faz com que a 'Resposta A' se clone ao total de repostas de cada pergunta 
    //e crie cada resposta com seu perspectivo texto
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector("span").textContent = resposta


      quizItem.querySelector('dl').appendChild(dt)

    }

    // Remove o 'Resposta A'
    quizItem.querySelector('dl dt').remove()

    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  

