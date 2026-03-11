const readline = require('readline-sync');

let corSemaforo = readline.question('Digite a cor do semáforo (verde, amarelo ou vermelho): ').toLowerCase();
let veiculoEmergenciaInput = readline.question('Há veículo de emergência? (sim/não): ').toLowerCase();
let veiculoEmergencia = veiculoEmergenciaInput === 'sim'; 


if (veiculoEmergencia === true){
    console.log("ALERTA: Ambulância detectada! Todos os sinais fechados. CRUZAMENTO LIVRE.");
}
else if (corSemaforo === "verde"){
    console.log("Pode passar! Siga com cuidado.");
}
else if (corSemaforo === "amarelo"){
    console.log("Atenção! Reduza a velocidade e prepare-se para parar.");
}
else if (corSemaforo === "vermelho"){
    console.log("PARE! Aguarde o sinal verde.");
}
else {
    console.log("Cor inválida! Digite apenas verde, amarelo ou vermelho.");
}


