

const contarVogais = (frase) => {
    let vogais = 0;
    for (let i = 0; i < frase.length; i++) {
      if (frase[i].toLowerCase() === "a" || frase[i].toLowerCase() === "e" || frase[i].toLowerCase() === "i" || frase[i].toLowerCase() === "o" || frase[i].toLowerCase() === "u") {
        vogais += 1
      }
    }
    return vogais
  };
  
  console.log(contarVogais('amanda'))