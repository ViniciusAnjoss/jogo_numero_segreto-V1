alert("Olá Jogador, esta com sorte hoje?");

let quantidadeMaxima = 1000;
let numeroSecreto = parseInt(Math.random() * quantidadeMaxima + 1);
let tentativa;
let numeroTentativas = 1;

while (tentativa != numeroSecreto) {
    tentativa = prompt(`Digite um numero entre 1 a ${quantidadeMaxima}`);

    if (numeroSecreto == tentativa) {
        break;
    } else {
        if (tentativa > numeroSecreto) {
            alert(`O numero Segreto é menor que ${tentativa}`);
        } else {
            alert(`O numero Segreto é maior que ${tentativa}`);
        }
    }
    numeroTentativas++;
}

let palavraTentativa =
    numeroTentativas > 1 ? "tentativas RealIzadas." : "tentativa Realizada.";
alert(
    `Voce acertou, o numero Segreto é: ${numeroSecreto} com ${numeroTentativas} ${palavraTentativa}`
);
