
function soma(num1) {
    
    return function(num2) {
        return num1 + num2;
    };
}

let somar = soma(5);

let resultado = somar(3);

console.log(`Resultado da soma: ${resultado}`)