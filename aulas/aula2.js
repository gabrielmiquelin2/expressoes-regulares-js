const {texto} = require("./base")

const regExp1 = /João|Maria/gi;

// console.log(texto)
// console.log(texto.match(regExp1))
// console.log(texto.replace(/João/gi , "Lukinha"  )) //replace - pedi para o js subistituir todo João por Lukinha

console.log(texto.replace(/João|Maria/gi , '<b>$1</b>'  ))//$1 = grupo 1 de ()