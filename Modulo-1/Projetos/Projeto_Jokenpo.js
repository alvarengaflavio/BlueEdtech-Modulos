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
