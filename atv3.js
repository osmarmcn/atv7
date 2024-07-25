

function converterTemperatura(c) {
    let f = (c * 9/5) + 32
    return f
}



let cel = Number(prompt('digite a temperatura: '))


let fah = converterTemperatura(cel);
console.log(`${cel}°C é igual a ${fah.toFixed(2)}°F`)