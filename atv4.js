function calcularCubo(numero) {
    return numero ** 3;
}


function usarCallback(numero, call) {
    
    return call(numero);
}



let numero = Number(prompt('digite um numero: '));


let cuboDoNumero = usarCallback(numero, calcularCubo);


console.log(`O cubo de ${numero} é ${cuboDoNumero}`);