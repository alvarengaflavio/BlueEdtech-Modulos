/*  Projeto 2 - Jokenpô 
    O Jokenpô é o popular jogo do "pedra, papel e tesoura". A premissa é simples, você tem 3 elementos para escolher, e cada um deles vence de um, e perde para o outro.
    * Pedra ganha da tesoura, mas perde para o papel;
    * Tesoura ganha do papel, mas perde para a pedra;
    * Papel ganha da pedra, mas perde para a tesoura.
    E para esse projeto você deve desenvolver um programa capaz de:
    * Receber o elemento escolhido pelo usuário;
    * Escolher um elemento aleatório para o computador;
    * Comparar os dois elementos e declarar um vencedor.
    Requisitos:
    1. Permitir que eu decida quantas rodadas iremos fazer;
    2. Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
    3. Decidir de forma aleatória a decisão do computador;
    4. Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
    5. Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
    6. Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
    7. Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
    8. Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.
*/
const prompt = require('prompt-sync')();
console.clear();

function setValor(jogada) {
    // Pedra = 0, Papel = 1, Tesoura = 2
    if (jogada === 'pedra') {
        return 0;
    } else if (jogada === 'papel') {
        return 1;
    } else {
        return 2;
    }
}

function setRodadas(rodadas) {
    while (true) {
        try {
            const _rodadas = parseInt(prompt(`Quantas Rodadas? `));
            if (isNaN(_rodadas) || _rodadas < 1)
                throw 'Nº de rodadas deve ser inteiro positivo...';
            return _rodadas;
        } catch (error) {
            console.log(`\n${error}\n`);
        }
    }
}

function atualizaPlacar(vencedor, placar) {
    if (vencedor) placar[vencedor] += 1;
    placar['Rodadas'] += 1;
}

function zeraPlacar(placar) {
    placar['Jogador'] = 0;
    placar['Computador'] = 0;
    placar['Rodadas'] = 0;
    return setRodadas();
}

function jogarNovamente() {
    while (true) {
        try {
            const rejogar = prompt(`Deseja Jogar Novamente? `)
                .trim()
                .toLowerCase();
            if (rejogar === 'sim' || rejogar === 's') return true;
            else if (rejogar === 'nao' || rejogar === 'n') return false;
            throw 'Digite SIM ou NAO ...';
        } catch (error) {
            console.log(`\n${error}\n`);
        }
    }
}

function imprimePlacar(placar) {
    console.log(`\n###### PLACAR FINAL ######`);
    console.log(`Rodadas Disputadas:     ${placar['Rodadas']}`);
    console.log(`Vitórias do Jogador:    ${placar['Jogador']}`);
    console.log(`Vitórias do Computador: ${placar['Computador']}`);
    if (placar['Jogador'] > placar['Computador']) {
        console.log(`\nE O Grande Campeão foi... JOGADOR!!!\n`);
    } else if (placar['Computador'] > placar['Jogador']) {
        console.log(`\nE O Grande Campeão foi... COMPUTADOR!!!\n`);
    } else {
        console.log(`\nEMPATE!!! Não tivemos um Grande Campeão desta vez.\n`);
    }
}

function getJogada(placar) {
    while (true) {
        try {
            let jogada = prompt(`${placar['Rodadas'] + 1}ª Jogada: `)
                .trim()
                .toLowerCase();
            if (
                jogada === 'pedra' ||
                jogada === 'papel' ||
                jogada === 'tesoura'
            )
                return setValor(jogada);
            else if (jogada === '0' || jogada === '1' || jogada === '2')
                return parseInt(jogada);
            throw 'Jogada Inválida, Digite Novamente...';
        } catch (error) {
            console.log(`\n${error}\n`);
        }
    }
}

function jokenpo(jogador, placar) {
    // Gera jogada_COMPUTADOR-> (0 Pedra), (1 Papel), (2 Tesoura)
    const computador = Math.floor(Math.random() * 3);
    // Jogador VENCE SE: (Pedra - Tesoura = -2) || (Papel - Pedra = 1) || (Tesoura - Papel = 1)
    if (jogador === computador) {
        atualizaPlacar(false, placar);
        console.log('Empate! Ninguém venceu essa rodada.\n');
    } else if (jogador - computador === -2 || jogador - computador === 1) {
        atualizaPlacar('Jogador', placar);
        console.log('Jogador venceu essa rodada\n');
    } else {
        atualizaPlacar('Computador', placar);
        console.log('Computador venceu essa rodada\n');
    }
}

// MAIN
function main() {
    let placar = { Jogador: 0, Computador: 0, Rodadas: 0 };
    let rodadas = zeraPlacar(placar);

    console.log('\n#####\t\tJOKENPÔ \t#####\n');
    console.log('\n#####\tDigite Sua Jogada\t#####');
    console.log('Entradas: Pedra, Papel ou Tesoura\n');

    loopPrincipal: while (true) {
        const jogada_jogador = getJogada(placar);
        jokenpo(jogada_jogador, placar);

        if (rodadas === placar['Rodadas']) {
            imprimePlacar(placar);
            if (jogarNovamente()) {
                rodadas = zeraPlacar(placar);
            } else {
                console.log('\nObrigado por Jogar JOKENPÔ!!!\n\n');
                break loopPrincipal;
            }
        }
    }
}
main();
