const notas =[7.5, 8.2, 9.6, 3.2];
let soma = 0;

for (i = 0; i < notas.length; i++){
    soma = soma + notas[1];
}

const media = soma / notas.length;

console.log("A soma das notas é: " + soma.toFixed(2));
console.log("A média do aluno é: " + media.toFixed(2));