let nomeHeroi = "Gil";
let vitorias = 200;
let derrotas = 60;
let saldoHeroi = calcularSaldoHeroi(vitorias, derrotas)
let resultado = raquearNivelHeroi(vitorias,derrotas)

console.log("O Herói " + nomeHeroi + " tem saldo de " + saldoHeroi +  " e está no nível " + nivelHeroi) 

function calcularSaldoHeroi(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

function raquearNivelHeroi(){
    let resultado = vitorias - derrotas
    if(resultado <= 10){nivelHeroi = "Ferro"}
    else if(resultado >= 11 && resultado <= 20){nivelHeroi = "Bronze"}
    else if(resultado >= 21 && resultado <= 50){nivelHeroi = "Prata"}
    else if(resultado >= 51 && resultado <= 80){nivelHeroi = "Ouro"}
    else if(resultado >= 81 && resultado <= 90){nivelHeroi = "Diamante"}
    else if(resultado >= 91 && resultado <= 100){nivelHeroi = "Lendário"}
    else {nivelHeroi = "Imortal"} 
    return resultado
}
