const {texto, arquivos} = require("./base")

// * (opcionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// \ Caractere de escape
// {n,m} mínimo e máximo
// {10,} no mínimo 10
// {,10} de 0 a 10
// {5,10} de 5 a 10
// {10}

//Criando uma expressão regular par filtrar SOMENTE arq JPG
const regExp2 = /\.jpe?g/gi//? é um caractere especial que siginfica que a letra atrás dele pode aparecer ou não

for (const arquivo of arquivos){
  console.log(arquivo,arquivo.match(regExp2))
}


