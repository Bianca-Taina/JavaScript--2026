let nomeHeroi = "Aragorn";    
let pontosXP = 750;           

let categoria = "";         

if (pontosXP < 100) {
    categoria = "Iniciante";
} else if (pontosXP < 500) {
    categoria = "Guerreiro";
} else if (pontosXP < 1000) {
    categoria = "Mestre";
} else {
    categoria = "Lenda Viva";
}

console.log(`O herói ${nomeHeroi} possui ${pontosXP} de experiência e seu rank atual é: ${categoria}`);