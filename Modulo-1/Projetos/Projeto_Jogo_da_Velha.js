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

function novaRodada(matriz, placar) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            matriz[i][j] = ' ';
        }
    }
    imprimeMatriz(matriz, placar);
}

function lerPosicao(num) {
    return [Math.floor((num - 1) / 3), (num - 1) % 3];
}

function darPosicao(i, j) {
    return 1 + 3 * i + j;
}

function checaAI(matriz) {
    let sequencia = '';
    //  AI Checa para garantir VITÓRIA
    for (let i = 0; i < matriz.length; i++) {
        sequencia += matriz[i][0] + matriz[i][1] + matriz[i][2];
        if (sequencia === 'OO ' || sequencia === 'O O' || sequencia === ' OO')
            return darPosicao(i, sequencia.indexOf(' '));
        else sequencia = '';
    }
    for (let j = 0; j < matriz.length; j++) {
        sequencia += matriz[0][j] + matriz[1][j] + matriz[2][j];
        if (sequencia === 'OO ' || sequencia === 'O O' || sequencia === ' OO')
            return darPosicao(sequencia.indexOf(' '), j);
        else sequencia = '';
    }

    sequencia = matriz[0][0] + matriz[1][1] + matriz[2][2];
    if (sequencia === 'OO ' || sequencia === 'O O' || sequencia === ' OO')
        return darPosicao(sequencia.indexOf(' '), sequencia.indexOf(' '));
    else sequencia = '';
    sequencia = matriz[0][2] + matriz[1][1] + matriz[2][0];
    if (sequencia === ' OO' || sequencia === 'O O' || sequencia === 'OO ')
        return darPosicao(sequencia.indexOf(' '), 2 - sequencia.indexOf(' '));
    else sequencia = '';

    //  AI Checa para evitar DERROTA
    for (let i = 0; i < matriz.length; i++) {
        sequencia += matriz[i][0] + matriz[i][1] + matriz[i][2];
        if (sequencia === 'XX ' || sequencia === 'X X' || sequencia === ' XX')
            return darPosicao(i, sequencia.indexOf(' '));
        else sequencia = '';
    }
    for (let j = 0; j < matriz.length; j++) {
        sequencia += matriz[0][j] + matriz[1][j] + matriz[2][j];
        if (sequencia === 'XX ' || sequencia === 'X X' || sequencia === ' XX')
            return darPosicao(sequencia.indexOf(' '), j);
        else sequencia = '';
    }

    sequencia = matriz[0][0] + matriz[1][1] + matriz[2][2];
    if (sequencia === 'XX ' || sequencia === 'X X' || sequencia === ' XX')
        return darPosicao(sequencia.indexOf(' '), sequencia.indexOf(' '));
    else sequencia = '';
    sequencia = matriz[0][2] + matriz[1][1] + matriz[2][0];
    if (sequencia === ' XX' || sequencia === 'X X' || sequencia === 'XX ')
        return darPosicao(sequencia.indexOf(' '), 2 - sequencia.indexOf(' '));

    return null;
}

function validaPosicao(num, matriz) {
    const [i, j] = lerPosicao(num);
    if (matriz[i][j] === ' ') return true;
    else return false;
}

function computadorJoga(matriz) {
    while (true) {
        const _jogada = checaAI(matriz) || Math.floor(Math.random() * 9 + 1);
        if (validaPosicao(_jogada, matriz)) return _jogada;
    }
}

function lerJogada(matriz) {
    while (true) {
        try {
            const jogada = parseInt(prompt(`Jogar em qual posição? `));
            if (isNaN(jogada) || jogada < 1 || jogada > 9)
                throw '\t\t\t\tposição inválida... [1:9]';
            else if (!validaPosicao(jogada, matriz))
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
    const [i, j] = lerPosicao(num);
    matriz[i][j] = marca;
}

function checaVencedor(matriz) {
    let vencedor = false;

    for (let linha = 0; linha < matriz.length; linha++) {
        if (
            matriz[linha][0] != ' ' &&
            matriz[linha][0] === matriz[linha][1] &&
            matriz[linha][0] === matriz[linha][2]
        )
            vencedor = matriz[linha][0];
    }

    for (let coluna = 0; coluna < matriz.length; coluna++) {
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
                novaRodada(matriz, placar);
                indica_turno = (indica_turno % 2) + 1;
                continue loopPrincipal;
            } else break loopPrincipal;
        }

        indica_turno++;
        imprimeMatriz(matriz, placar);
    }
    anunciaCampeao(placar);
}

main();
