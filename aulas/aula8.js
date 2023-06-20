const {html2} = require("./base")

// $1 $2 $3 <- Retrovisores
console.log(html2);
console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g));

console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HIHIHI $3 HOHOHO $4'));
//[\s\S] -> para selecionar todos os espaços em branco