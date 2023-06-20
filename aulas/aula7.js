const {cpfs,cpfs2} = require("./base")

// ^ -> Começa com
// $ -> Termina com
// [^] -> Negação
// m - multiline

const cpf = "223.232.323-42"
const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpfs2)
console.log(cpfs2.match(cpfRegExp))
