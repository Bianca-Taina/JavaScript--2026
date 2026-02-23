function calculaJurosCompostos(capital, taxa, tempo){
    let juros = capital * (taxa/100) * tempo;
    let montante = capital * (1 + taxa/100) ** tempo;
    return montante;
}

let conta1 = calculaJurosCompostos(5000, 4, 6);
console.log("O montante é R$" + conta1.toFixed(2));