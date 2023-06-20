// Encontra todas as palavras
const palavrasRegEx = /([\wÀ-ú]+)/g;

// Valida CPF
const cpfRegExp = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;

// Valida telefones
const validaTelefone = /^\(\d{2}\)\s?\d{4}-\d{4}$/;

// Validar senhas fortes
const validaSenhasFortes = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%\]\)]).{8,}$/;

// Validar e-mails
const validaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Exemplo de uso:
const texto = "Olá! Meu e-mail é example@example.com e meu CPF é 123.456.789-00.";
const palavras = texto.match(palavrasRegEx);
const cpfs = texto.match(cpfRegExp);
const telefoneValido = validaTelefone.test("(11) 91234-5678");
const senhaForteValida = validaSenhasFortes.test("Senha@123");
const emailValido = validaEmail.test("example@example.com");

console.log("Palavras:", palavras);
console.log("CPFs:", cpfs);
console.log("Telefone válido:", telefoneValido);
console.log("Senha forte válida:", senhaForteValida);
console.log("E-mail válido:", emailValido);
