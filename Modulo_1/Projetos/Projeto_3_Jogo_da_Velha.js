const prompt = require('prompt-sync')();
console.clear();

function iniciaMatriz(matriz) {
    for (let i = 0; i < 3; i++) {
        const linha = [' ', ' ', ' '];
        matriz.push(linha);
    }
}

function imprimeMatriz(matriz, placar) {
    console.clear();
    console.log('\t\tPLACAR');
    console.log(
        `\tJOGADOR ${placar.Jogador} x ${placar.Computador} COMPUTADOR\n`,
    );
    console.log('  Posições\t\t    JOGO');
    console.log(
        ` ${1} | ${2} | ${3}\t\t ${matriz[0][0]} | ${matriz[0][1]} | ${
            matriz[0][2]
        }`,
    );
    console.log(`---+---+---\t\t---+---+---`);
    console.log(
        ` ${4} | ${5} | ${6}\t =>\t ${matriz[1][0]} | ${matriz[1][1]} | ${
            matriz[1][2]
        }`,
    );
    console.log(`---+---+---\t\t---+---+---`);
    console.log(
        ` ${7} | ${8} | ${9}\t\t ${matriz[2][0]} | ${matriz[2][1]} | ${
            matriz[2][2]
        }\n`,
    );
}

function anunciaVencedor(vencedor, matriz, placar) {
    let mensagem;
    if (vencedor === 'X') {
        mensagem = '\tVOCÊ VENCEU!!!\t☜(ﾟヮﾟ☜)\n';
        placar['Jogador'] += 1;
    } else if (vencedor === 'O') {
        mensagem = '\tO COMPUTADOR VENCEU!!!\t(╯°□°）╯︵ ┻━┻\n';
        placar['Computador'] += 1;
    } else mensagem = '\tDEU VELHA!!!\t¯_(ツ)_/¯\n';
    imprimeMatriz(matriz, placar);
    console.log(mensagem);
}

function anunciaCampeao(placar) {
    let mensagem;
    console.log(
        `\n\tJOGADOR ${placar.Jogador} x ${placar.Computador} COMPUTADOR\n`,
    );
    if (placar['Jogador'] > placar['Computador']) {
        mensagem = '\tVOCÊ FOI O GRANDE CAMPEÃO!!!\t☜(ﾟヮﾟ☜)\n';
    } else if (placar['Jogador'] < placar['Computador']) {
        mensagem = '\tO COMPUTADOR FOI O GRANDE CAMPEÃO!!!\t(╯°□°）╯︵ ┻━┻\n';
    } else mensagem = '\tEMPATOU!!! NÃO TEMOS UM CAMPEÃO!!!\t¯_(ツ)_/¯\n';
    console.log(mensagem);
}

function novaRodada(matriz, vencedor, placar) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            matriz[i][j] = ' ';
        }
    }
    vencedor = false;
    imprimeMatriz(matriz, placar);
}

function lerPosicao(num) {
    if (num < 3) return [0, num];
    else if (num < 6) return [1, num - 3];
    else return [2, num - 6];
}

function validaPosicao(num, matriz) {
    const [i, j] = lerPosicao(num - 1);
    if (matriz[i][j] === ' ') return false;
    else return true;
}

function computadorJoga(matriz) {
    while (true) {
        const _jogada = Math.floor(Math.random() * 9 + 1);
        if (!validaPosicao(_jogada, matriz)) return _jogada;
    }
}

function lerJogada(matriz) {
    while (true) {
        try {
            const jogada = parseInt(prompt(`Jogar em qual posição? `));
            if (isNaN(jogada) || jogada < 1 || jogada > 9)
                throw '\t\t\t\tposição inválida... [1:9]';
            else if (validaPosicao(jogada, matriz))
                throw '\t\t\t\tposição ocupada... [1:9]';
            return jogada;
        } catch (error) {
            console.log(`${error}`);
        }
    }
}

function jogarNovamente() {
    while (true) {
        try {
            const menu = prompt(`Jogar mais uma rodada? `).trim().toLowerCase();
            if (menu === 's' || menu === 'sim') return true;
            else if (menu === 'n' || menu === 'nao') return false;
            else throw '\t\t\t\tresponda com Sim ou Nao...';
        } catch (error) {
            console.log(`${error}`);
        }
    }
}

function escreveJogada(num, matriz, marca) {
    const [i, j] = lerPosicao(num - 1);
    matriz[i][j] = marca;
}

function checaVencedor(matriz) {
    let vencedor = false;

    for (let linha = 0; linha < 3; linha++) {
        if (
            matriz[linha][0] != ' ' &&
            matriz[linha][0] === matriz[linha][1] &&
            matriz[linha][0] === matriz[linha][2]
        )
            vencedor = matriz[linha][0];
    }

    for (let coluna = 0; coluna < 3; coluna++) {
        if (
            matriz[0][coluna] != ' ' &&
            matriz[0][coluna] === matriz[1][coluna] &&
            matriz[0][coluna] === matriz[2][coluna]
        )
            vencedor = matriz[0][coluna];
    }

    if (
        matriz[0][0] != ' ' &&
        matriz[0][0] === matriz[1][1] &&
        matriz[0][0] === matriz[2][2]
    )
        vencedor = matriz[0][0];

    if (
        matriz[1][1] != ' ' &&
        matriz[1][1] === matriz[0][2] &&
        matriz[1][1] === matriz[2][0]
    )
        vencedor = matriz[1][1];
    return vencedor;
}

function matrizCheia(matriz) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] === ' ') return false;
        }
    }
    return true;
}

function main() {
    let matriz = [];
    let placar = { Jogador: 0, Computador: 0 };
    let vencedor = false;
    let indica_turno = Math.floor(Math.random() * 2);
    iniciaMatriz(matriz);
    imprimeMatriz(matriz, placar);

    loopPrincipal: while (true) {
        if (indica_turno % 2 === 0)
            escreveJogada(lerJogada(matriz), matriz, 'X');
        else escreveJogada(computadorJoga(matriz), matriz, 'O');

        vencedor = checaVencedor(matriz);

        if (vencedor || matrizCheia(matriz)) {
            anunciaVencedor(vencedor, matriz, placar);
            if (jogarNovamente()) {
                novaRodada(matriz, vencedor, placar);
                continue loopPrincipal;
            } else break loopPrincipal;
        }

        indica_turno++;
        imprimeMatriz(matriz, placar);
    }
    anunciaCampeao(placar);
}

main();
