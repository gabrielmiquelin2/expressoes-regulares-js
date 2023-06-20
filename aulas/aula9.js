const {lookahead} = require("./base")

// console.log(lookahead)
//RETORNAR SOMENTE FRASES COM "ACTIVE"
// console.log(lookahead.match(/.+[^in]active/gim))//pesquisando somente"active"

//POSITIVE LOOKAHEAD  
//Retornar apeanas as frases, sem o "active/inactive"
// console.log(lookahead.match(/.+(?=[^in]active)/gim))

//Retornar apeanas as frases que tem o "inactive"
// console.log(lookahead.match(/.+(?=inactive)/gim))

//NEGATIVE LOOKAHEAD
//RETORNAR APENAS FRASES SEM O "active"
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))

//RETORNAR APENAS FRASES COM O "active"
// console.log(lookahead.match(/^(?!.+inactive).+$/gim))

//POSITIVE LOOKBENHIND
//BUSCAR FRASES QUE TÊM "ONLINE"
// console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim))

//NEGATIVE LOOKBENHIND
//BUSCAR FRASES QUE NÂO COMEÇA COM "ONLINE"
// console.log(lookahead.match(/^.+(?<!^ONLINE.+)$/gim))

const cpf = `
012.250.796-10
000.000.000-01
111.111.111-11
999.999.999-99
555.555.555-55
147.285.963-10
aaa.bbb.ccc-dd
`
//SÒ VAI PEGAR CPF VÀLIDOS
console.log(cpf.match(/^(?!.*(\d)\1\1)(?!.*([a-zA-Z])\2\2)\d{3}\.\d{3}\.\d{3}-\d{2}$/gm));

