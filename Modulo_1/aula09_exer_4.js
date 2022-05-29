/*
    Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. 
    Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.
*/
const prompt = require('prompt-sync')();
console.clear();

let num_eleitores,
    candidatos = [0, 0, 0];

while (true) {
    num_eleitores = parseInt(prompt(`Quantos eleitores? `));
    if (isNaN(num_eleitores) || num_eleitores < 1)
        console.log('\t\t\t\t\t\tInválido, entre com um Inteiro positivo');
    else break;
}

console.log('\n#####   Eleições 2022 MasterBlue   #####\n');
console.log('Canditados');
console.log(
    '[1] Claramente Um Péssimo Canditado\n[2] Claramente Um Bom Candidato\n[3] O Velho Fingindo ser Novo\n',
);
console.log('Vote pelo [Número] do candidato\n');
for (let i = 0; i < num_eleitores; i++) {
    let voto;
    while (true) {
        voto = parseInt(prompt(`Voto do ${i + 1}º eleitor: `));
        if (isNaN(voto) || voto < 1 || voto > 3)
            console.log('\t\t\t\t\t\tCandidato Inválido! tente novamente...');
        else break;
    }
    candidatos[voto - 1] += 1;
}

console.log(`\nNº de Votos de cada candidato:`);
console.log(`Claramente Um Péssimo Canditado: ${candidatos[0]}`);
console.log(`Claramente Um Bom Candidato:\t ${candidatos[1]}`);
console.log(`O Velho Fingindo ser Novo:\t ${candidatos[2]}\n`);
