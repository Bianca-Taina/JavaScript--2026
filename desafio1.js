const readline = require('readline-sync');

let nome = readline.question("Qual é o seu nome? ");
let idade = readline.question("Qual é sua idade?");
let temCupom = true;

let PRECO_CHEIO = 30;

console.log("Tentando comprar ingresso .....")

if (idade >= 60){
   console.log(" seu cupom de desconto é de 50%");
}
else if (idade <18 && temCupom == true){
    console.log(`Seu cupom é de 20% e seu ingresso custou ${PRECO_CHEIO * 0.8}`);
}
else{
    console.log("Você não tem cupom, seu valor será de 30 reais");
}
