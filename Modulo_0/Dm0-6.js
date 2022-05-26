/*
    Dm0-6 Jogo de dados: Crie um programa onde jogadores joguem um dado e tenham resultados aleatórios. O programa tem que:
    Perguntar quantas rodadas você quer fazer;
    Perguntar quantos jogadores vão jogar;
    Criar um objeto pra cada jogador com nome e número tirado;
    Guarda todos os objetos em uma lista;
    Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado.
    Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão.
*/
// vou fazer com "dicionário ordenando pelo valor e não pela chave"
var prompt = require('prompt-sync')();

console.log("######################################");
console.log("#####       JOGO DOS DADOS       #####");
console.log("######################################\n");

console.log("\nSeja Bem-Vindo ao nosso JOGO\n");
let jogadores = [];
let rodadas = [];                                                
let menu = 'sim';

do {
    num_rodadas = parseInt(prompt("Quantos Rodadas iremos JOGAR? "));
} while (isNaN(num_rodadas));

do {
    num_jogadores = parseInt(prompt("Quantos Jogadores irão JOGAR? "));
} while (isNaN(num_jogadores));

for (let i = 0; i < num_jogadores; i++) {
    const element = prompt("Qual o nome do jogador " + (i+1) + " : ");
    var jogador = {
        Nome: element,
        Numeros: [],
        Vitorias: parseInt(0)
      };
    jogadores.push(jogador); 
}

do {
    for (let r = 0; r < num_rodadas; r++) {
        for (let j = 0; j < num_jogadores; j++) {
            const element = parseInt(Math.floor(Math.random() * 6) + 1);
            jogadores[j].Numeros.push(element);
        }
    }

    for (let r = 0;  r < num_rodadas; r++) {                                            // Gera os dados e guarda no array rodadas
        const element = [];
        for (let j = 0; j < num_jogadores; j++) {
            element.push(jogadores[j].Numeros[r]);       
        }
        rodadas.push(element);                                                          // rodadas agora contém listas com os valores dos dados na mesma ordem dos jogadores
    }

    for (let r = 0; r < rodadas.length; r++) {                                          // Pega o maior valor de cada rodada e incrementa vitórias no jogador que contém aquele valor
        // console.log(rodadas[r])
        const maiorlocal = Math.max(...rodadas[r]);
        for (let j = 0; j < rodadas[r].length; j++) {
            // console.log(rodadas[r][j], maiorlocal);
            if (rodadas[r][j] == maiorlocal ) {
                jogadores[j].Vitorias++;
            }
            
        }
    }

    var porVitoria = jogadores.slice(0);
    porVitoria.sort(function(a,b) {
        return b.Vitorias - a.Vitorias;
    });

    console.log("\nO VENCEDOR É...\t" + porVitoria[0].Nome);
    console.log("\nObteve um total de " + porVitoria[0].Vitorias + " Vitória(s) em " + rodadas.length + " Rodada(s)");
    console.log("PARABÉNS!!!!\n");

    //console.log(porVitoria);
    for (let i = 0; i < porVitoria.length; i++) {
        console.log( (i+1)+"º Colocado - " + porVitoria[i].Nome + "\tRolagens: " + porVitoria[i].Numeros);
    }

    menu = (prompt("Deseja Jogar Novamente [S]im ou [N]ão ? ")).toLowerCase();
    if (menu[0]!='n') {
        rodadas = [];
        for (let j = 0; j < jogadores.length; j++) {
            jogadores[j].Numeros = [];
            jogadores[j].Vitorias = parseInt(0);
        }
    }
} while (menu[0]!='n');

// console.log(num_jogadores, num_rodadas, jogadores);
// console.log(rodadas);