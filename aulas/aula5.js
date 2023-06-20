const {alfabeto} = require("./base")

// [abc] -> Conjunto [^] -> Negação
// [0-9]
// [min-maxQUALQUERCOISA] 
// [^min-maxQUALQUERCOISA] -> Tudo menos isso

// console.log(alfabeto)

// console.log(alfabeto.match(/[^abc123]/g))//^ -> circonflexo siginifca que quero tudo menos o que está dentro dos colchetes[]

// console.log(alfabeto.match(/[0-9]+/g)); //O + siginfica que ele tá encontrando na sequencia
// c
// console.log(alfabeto.match(/[A-Z]+/g));
// console.log(alfabeto.match(/[^a-zA-Z0-9]+/g));//NEGAÇÂO
// console.log(alfabeto.match(/[a-zA-Z0-9çã]+/g));//çã -> para ele executar a palavara "atenção" que esta no obj alfabeto
//  console.log(alfabeto.match(/[\uOOAO-\uOOBA]+/g));

//  console.log(alfabeto.match(/[a-zA-Z0-9]/g))
//  //AO INVÉS DE USAR ISSO 
//  //USE ISSO   \w -> Vai pegar TODOS OS CARACTERES
//  // \w quando o barra W for MAIUSCULO SIGINIFICA NEGAÇÂO 
//  console.log(alfabeto.match(/[\w]/g))

// /d procura todos os números
// console.log(alfabeto.match(/[\d]/));// d maisculo nega ou seja tudo menos os numeros