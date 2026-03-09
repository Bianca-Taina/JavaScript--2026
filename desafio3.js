let nomeHeroi = "Aragorn";
let pontosXP = "750";

let nome = readline.question("Qual é o nome do seu heroi? ");
let pontos = readline.question("Quantos pontos possui? ");
let rank = readline.question("Qual é sua categoria? ");

if (pontosXP < 100) {
            categoria = "Iniciante";
        } else if (pontosXP < 500) {
            categoria = "Guerreiro";
        } else if (pontosXP < 1000) {
            categoria = "Mestre";
        } else {
            categoria = "Lenda Viva";
        }
