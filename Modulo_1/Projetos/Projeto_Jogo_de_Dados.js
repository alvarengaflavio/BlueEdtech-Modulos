/*
    Jogo de dados: Crie um programa onde jogadores joguem um dado e tenham resultados aleatórios. O programa tem que:
	* Perguntar quantas rodadas você quer fazer;
	* Perguntar quantos jogadores vão jogar;
	* Criar um objeto pra cada jogador com nome e número tirado;
	* Guarda todos os objetos em uma lista;
	* Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado.
	* Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão.
*/
const prompt = require('prompt-sync')();
console.clear();

class jogador {
    constructor(nome) {
        this.nome = nome;
        this.dado = [];
        this.vitoria = 0;
    }

    imprimeJogador() {
        console.log(`${this.nome}, venceu ${this.vitoria}`);
        console.log(`Rolagens -> ${this.dado.join(', ')}\n`);
    }
}

function criaJogador(jogadores, num) {
    while (true) {
        try {
            let nome = prompt(`Nome do ${num}º Jogador : `)
                .trim()
                .toLowerCase();
            if (nome.length < 3) throw 'nome deve conter 3 caracteres';
            nome = nome.charAt(0).toUpperCase() + nome.slice(1);
            jogadores.push(new jogador(nome));
            return console.log('\t\t\t\t\tjogador criado!');
        } catch (error) {
            console.log('\t\t\t\t\tInválido!', error);
        }
    }
}

function resetaJogadores(jogadores) {
    jogadores.forEach(jogador => {
        [jogador.dado, jogador.vitoria] = [[], 0];
    });
}

function validaInteiro(opcao) {
    while (true) {
        try {
            const numero = parseInt(+prompt(`Nº de ${opcao}: `));

            if (opcao === 'Rodadas') {
                if (numero < 1 || numero > 20 || isNaN(numero))
                    throw `\t\t\t\t\tinválido! ${opcao} = [1:20]`;
            } else if (opcao === 'Jogadores') {
                if (numero < 1 || numero > 5 || isNaN(numero))
                    throw `\t\t\t\t\tinválido! ${opcao} = [1:5]`;
            }
            return numero;
        } catch (error) {
            console.log(error);
        }
    }
}

function continuarJogando() {
    while (true) {
        try {
            const menu = prompt('Continuar jogando? ').trim().toLowerCase();

            if (menu === 's' || menu === 'sim') return true;
            else if (menu === 'n' || menu === 'nao') return false;
            else throw '\t\t\t\t\tinválido! [Sim ou Nao]';
        } catch (error) {
            console.log(error);
        }
    }
}

function defineVencedor(jogadores) {
    let maior = 0;
    for (const jogador of jogadores) {
        if (jogador.dado[0] > maior) maior = jogador.dado[0];
    }
    jogadores.forEach(jogador => {
        if (jogador.dado[0] === maior) jogador.vitoria += 1;
    });
}

function defineCampeao(jogadores) {
    let maior = 0;
    for (const jogador of jogadores) {
        if (jogador.vitoria > maior) maior = jogador.vitoria;
    }
    console.log(`\nCom ${maior} vitórias o GRANDE CAMPEÃO foi...`);
    jogadores.forEach(jogador => {
        if (jogador.vitoria === maior) console.log(`${jogador.nome}`);
    });
    console.log();
}

function main() {
    console.log('######################################');
    console.log('#####       JOGO DOS DADOS       #####');
    console.log('######################################\n');

    let jogadores = [];
    const rolarDado = () => Math.floor(Math.random() * 6 + 1);
    const n_jogadores = validaInteiro('Jogadores');

    for (let index = 0; index < n_jogadores; index++) {
        criaJogador(jogadores, index + 1);
    }

    loopPrincipal: while (true) {
        console.log();
        const n_rodadas = validaInteiro('Rodadas');
        console.log();

        for (let r = 0; r < n_rodadas; r++) {
            jogadores.forEach(jogador => {
                jogador.dado.unshift(rolarDado());
            });
            defineVencedor(jogadores);
        }

        jogadores.forEach(jogador => {
            jogador.imprimeJogador();
        });
        defineCampeao(jogadores);

        if (continuarJogando()) {
            resetaJogadores(jogadores);
            continue loopPrincipal;
        } else {
            console.log(jogadores);
            break loopPrincipal;
        }
    }
}
main();
