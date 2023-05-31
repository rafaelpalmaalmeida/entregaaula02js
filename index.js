let faixaIdade = prompt("Qual a sua idade?")

if (faixaIdade <= 12) {
    console.log("Você é uma criança");
    alert("Você é uma criança");
} else if (faixaIdade <= 17) {
    console.log("Você é um adolecente");
    alert("Você é uma adolecente");
} else if (faixaIdade <= 59) {
    console.log("Você é um adulto");
    alert("Você é uma adulto");
} else if (faixaIdade >= 60) {
    console.log("Você é um idoso");
    alert("Você é um idoso");
}