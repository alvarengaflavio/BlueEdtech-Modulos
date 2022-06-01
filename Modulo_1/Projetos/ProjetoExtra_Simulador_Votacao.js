/*
    A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no módulo até este momento.
    O programa deve:
        * Receber votos até que o usuário diga que não tem mais ninguém para votar;
        * Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional" ou "Obrigatório";
        * Ter uma função chamada votacao(autorizacao, voto) que valida e contabiliza o voto (número entre 1 e 5) 
          ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado;
        * Contabilizar os votos de acordo com os significados:
        * 1 = Candidato 1
        * 2 = Candidato 2
        * 3 = Candidato 3
        * 4 = Voto Nulo
        * 5 = Voto em Branco
        * Ter uma função chamada exibirResultados() que deve mostrar:
            * O total de votos para cada candidato
            * O total de votos nulos
            * O total de votos em branco
            * Qual candidato venceu a votação
*/
const prompt = require('prompt-sync')();
console.clear();
let votos = [0, 0, 0, 0, 0];

function autorizaVoto(anoNascimento) {
    const idade = new Date().getFullYear() - anoNascimento;
    if (idade < 16) return 'Negado';
    else if (idade < 18 || idade > 70) return 'Opcional';
    else return 'Obrigatório';
}

function votacao(autorizacao, voto) {
    console.log(autorizacao);
    if (!(autorizacao === 'Negado')) votos[voto - 1] += 1;
}

function exibirResultados() {
    let maior = 0,
        vencedor = [];
    for (let c = 0; c < 3; c++) {
        if (votos[c] > maior) {
            maior = votos[c];
            vencedor = [];
            vencedor.push(c + 1);
        } else if (votos[c] === maior) vencedor.push(c + 1);
    }
    console.log(`\nApuração das Eleições 2022`);
    console.log(`Candidato 1:\t${votos[0]} votos`);
    console.log(`Candidato 2:\t${votos[1]} votos`);
    console.log(`Candidato 3:\t${votos[2]} votos`);
    console.log(`Votos Nulos:\t${votos[3]} votos`);
    console.log(`Votos Brancos:  ${votos[4]} votos\n`);
    console.log('Vendedor(es) das Eleições:');
    for (const c of vencedor) {
        console.log(`Candidato ${c}`);
    }
    console.log();
}

function lerDado(info) {
    while (true) {
        const dado = +parseInt(prompt(`Entre com o ${info}: `));
        if (!isNaN(dado)) {
            if (info === 'Voto' && dado > 0 && dado < 6) {
                return dado;
            } else if (
                info != 'Voto' &&
                dado < new Date().getFullYear() &&
                dado > 0
            )
                return dado;
        }
        console.log(`\t\t\t${info} inválido. Tente novamente...`);
    }
}

console.log(`\n\t\tELEIÇÕES 2022\t\t\n`);
console.log(`Para votar entre com o NÚMERO da opção desejada:`);
console.log(`[1] Candidato 1\t[2] Candidato 2`);
console.log(`[3] Candidato 3\t[4] Votar Nulo`);
console.log(`[5] Votar em Branco\n`);

Votacao: while (true) {
    const ano = lerDado('Ano de Nascimento');
    const voto = lerDado('Voto');
    votacao(autorizaVoto(ano), voto);

    while (true) {
        const menu = prompt('Receber Mais Votos? ').trim().toLowerCase();
        if (menu === 'nao' || menu === 'n') {
            exibirResultados();
            break Votacao;
        } else if (menu === 'sim' || menu === 's') continue Votacao;
        console.log('\t\tOpção inválida. sim ou nao?');
    }
}
