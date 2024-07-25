
function operacoes(num1, num2, callback) {
    
    return callback(num1, num2)
}


function somar(a, b) {
    return a + b
}


function subtrair(a, b) {
    return a - b
}

let num1 = 10
let num2 = 5


let resultadoSoma = operacoes(num1, num2, somar)
console.log(`Resultado da soma: ${resultadoSoma}`)


let resultadoSub = operacoes(num1, num2, subtrair)
console.log(`Resultado da subtração: ${resultadoSub}`)
