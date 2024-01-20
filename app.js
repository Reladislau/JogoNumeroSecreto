alert("Bem Vindo ao nosso Jogo do numero secreto!");
let numeroMaximo = 5000;
let numeroScreto = parseInt(Math.random() * 100 + 1);
let numero;
let tentativas = 1;

while(numero != numeroScreto){
    numero = prompt(`Digite um número de 1 a ${numeroMaximo}`);
    if (numeroScreto == numero) {
        break
    } else {
        alert("Você errou!");
        if (numeroScreto > numero) {
            alert("O chute é maior que o numero secreto");
        } else {
            alert("O chute é menor que o numero secreto");
        }

        tentativas++
    
    }

    
}

//Operador ternário
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"

    alert(`Isso você acertou! O numero foi ${numeroScreto}, você acertou com ${tentativas} ${palavraTentativa}`)