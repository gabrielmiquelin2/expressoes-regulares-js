//Expressão Regulares - Usado para encontrar/consultar padrões de texto,número, caracteres... 

//FLAG
// g - global (encontra Globalmente)
// i - insensive ou seja vai procurar Maiuscula e minuscula 
// () - Grupos 
// | - OU
const {texto} = require("./base")

const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;
const found = regExp1.exec(texto)

if(found){
  console.log(found[0])
  console.log(found[1])
  console.log(found[2])
}

