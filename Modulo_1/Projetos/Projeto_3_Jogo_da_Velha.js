const prompt = require('prompt-sync')();
console.clear();

function iniciaMatriz(matriz) {
    for (let i = 0; i < 3; i++) {
        const linha = [' ', ' ', ' '];
        matriz.push(linha);
    }
}

function imprimeMatriz(matriz) {
    console.clear();
    console.log('  Posições\t\t    JOGO\n');
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

function anunciaVencedor(vencedor, matriz) {
    imprimeMatriz(matriz);
    if (vencedor === 'X') console.log('\n\tVOCÊ VENCEU!!!\t☜(ﾟヮﾟ☜)\n');
    else if (vencedor === 'O')
        console.log('\n\tO COMPUTADOR VENCEU!!!\t(╯°□°）╯︵ ┻━┻\n');
    else console.log('\n\tDEU VELHA!!!\t¯_(ツ)_/¯\n');
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
    let vencedor = false;
    let indica_turno = Math.floor(Math.random() * 2);
    iniciaMatriz(matriz);
    imprimeMatriz(matriz);

    loopPrincipal: while (true) {
        if (indica_turno % 2 === 0)
            escreveJogada(lerJogada(matriz), matriz, 'X');
        else escreveJogada(computadorJoga(matriz), matriz, 'O');

        vencedor = checaVencedor(matriz);

        if (vencedor) {
            anunciaVencedor(vencedor, matriz);
            break loopPrincipal;
        } else if (matrizCheia(matriz)) {
            anunciaVencedor('velha', matriz);
            break loopPrincipal;
        }
        indica_turno++;
        imprimeMatriz(matriz);
    }
}

main();
