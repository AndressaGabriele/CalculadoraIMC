const inputDoUsuario = require("readline-sync");

let pesoAtual=inputDoUsuario.question("Escreva aqui seu peso atual");
let alturaAtual=inputDoUsuario.question("Escreva aqui sua altura atual")
let calculoImc=pesoAtual/(alturaAtual*alturaAtual)
console.log(pesoAtual, alturaAtual)
console.log(calculoImc)
