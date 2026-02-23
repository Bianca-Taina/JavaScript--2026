function calculaJurosSimples(capital, taxa, tempo){
    let juros = capital * taxa * tempo;
    let montante = capital + juros;

    return montante;
}

let conta1 = calculaJurosSimples(5000, 4, 6);
console.log("O montante é R$" + conta1);
