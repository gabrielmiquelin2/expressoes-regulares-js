const {cpfs,ips} = require("./base")

//CPF

console.log(cpfs)
//Encontrar cpf seguindo o padrão do cp 000.000.000-00
console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));
console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));//SEGUNDA Maneira
console.log(cpfs.match(/(\d{3}\.)\d{3}\.\d{3}\-\d{2}/g));//Terceira MANEIRA
console.log(cpfs.match(/\d.\S+/g)) //Quarta Forma

//IP

console.log(ips)
// ^ -> começa COM
// const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;
const ipRegExp = /(\d{1,3}\.){3}\d{1,3}/g;//Segunda forma 

for(let i = 0; i <= 300;i++){
  const ip = `${i}.${i}.${i}.${i}.`
  console.log(ip,ip.match(ipRegExp))
}
console.log(ips);
console.log(ips.match(ipRegExp));

