/*
    Dm0-5 Jogo Jokenpô: Utilizando os conceitos aprendidos até estruturas de repetição, crie um programa que jogue pedra, papel e tesoura (Jokenpô) com você.
    Permitir que eu decida quantas rodadas iremos fazer;
    Ler a minha escolha (Pedra, papel ou tesoura);
    Decidir de forma aleatória a decisão do computador;
    Mostrar quantas rodadas cada jogador ganhou;
    Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
    Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa.
*/
var prompt = require('prompt-sync')();

console.log("#####################################");
console.log("#####   PEDRA PAPEL & TESOURA   #####");
console.log("#####################################\n");

console.log("\nSeja Bem-Vindo ao nosso jogo");
let rodadas = parseInt(prompt("Quantas Rodadas iremos jogar: "));
let placar = [0, 0];                                                // 0 = jogador, 1 = AI

let pc_ppt = 0                                                      // 0 = pedra, 1 = papel, 2 = tesousa
console.log("[0] Pedra\n[1] Papel\n[2] Tesoura\nDeseja jogar [0], [1] ou [2]: ");

for (let i = 0; i < rodadas; i++) {

    let jogador_ppt = parseInt(prompt("Qual é a sua Jogada [0, 1, 2]: "));
    pc_ppt = Math.floor(Math.random() * 3);                         // 0 = pedra, 1 = papel, 2 = tesousa

    if (pc_ppt == jogador_ppt) {
        console.log("\nJogador: " + jogador_ppt + "\tAI: " + pc_ppt + "\t= Empate");
        
    } else if (jogador_ppt == 0) {                                  // Se JOGADOR = PEDRA
        if (pc_ppt == 1) {                                          // se AI = PAPEL
            console.log("\nJogador: " + jogador_ppt + "\tAI: " + pc_ppt + "\t= Vitória para a AI");
            placar[1]++;
        } else {                                                    // senão AI = tesoura
            console.log("\nJogador: " + jogador_ppt + "\tAI: " + pc_ppt + "\t= Vitória para o JOGADOR");
            placar[0]++;
        }
    }
    else if (jogador_ppt == 1) {                                    // Se JOGADOR = PAPEL
        if (pc_ppt == 0) {                                          // se AI = PEDRA
            console.log("\nJogador: " + jogador_ppt + "\tAI: " + pc_ppt + "\t= Vitória para o JOGADOR");
            placar[0]++;
        } else {                                                    // senão AI = tesoura
            console.log("\nJogador: " + jogador_ppt + "\tAI: " + pc_ppt + "\t= Vitória para a AI");
            placar[1]++;
        }    
    }
    else {                                                          // senão JOGADOR = tesoura
        if (pc_ppt == 0) {                                          // se AI = PEDRA
            console.log("Jogador: " + jogador_ppt + "\tAI: " + pc_ppt + "\t= Vitória para a AI");
            placar[1]++;
        } else {                                                    // Senao AI = PAPEL
            console.log("Jogador: " + jogador_ppt + "\tAI: " + pc_ppt + "\t= Vitória para o JOGADOR");
            placar[0]++;
        }                                                           
    }
}   
console.log("\nComputando resultado...");
console.log("\nNo final de " + rodadas + " rodadas temos como placar final: JOGADOR " + placar[0] + " x " + placar[1] + " COMPUTADOR");
if (placar[0] > placar[1]) {
    console.log("Vitória do JOGADOR por " + placar[0] + " x " + placar[1]);
    console.log("\n");
} else if (placar [1] > placar [0]){
    console.log("Vitória do COMPUTADOR por " + placar[1] + " x " + placar[0]);
    console.log("\n");
} else {
    console.log("A Partida Terminou EMPATADA!!!\n\n");
}
