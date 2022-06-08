const prompt = require('prompt-sync')();
console.clear();

// SE clima bom Pablo Vilar vai sair

// SE clima ruim Pablo Vilar vai JOGAR GAMES NO TWITCH DESLOCADAO NERDOLA

// famoso if { } else { }

let nome = 'Pablo Vilar';
let tempo = ['sol', 'chovendo', 'sol', 'nevando', 'sol', 'nublado'];

aleatorio = Math.floor(Math.random() * tempo.length);

if (tempo[aleatorio] == 'sol') {
    console.log(
        `${nome} vai sair de casa. Pois hoje está o está com ${tempo[aleatorio]}.`,
    );
} else {
    console.log(
        `${nome} vai jogar GAMES ONLINE com sua turminha RADICAL! Pois hoje está ${tempo[aleatorio]}.`,
    );
}
console.log(aleatorio);

let soma = 10 + 10;
console.log(soma);

let teste = 10 > 5;
console.log(teste);

console.log(typeof soma);
console.log(typeof teste);
if (teste) {
    console.log(`É TRUE`);
}

teste = 10 < 5;
if (teste) {
    console.log(`É TRUE`);
} else if (!teste) {
    console.log(`É FALSE`);
}
