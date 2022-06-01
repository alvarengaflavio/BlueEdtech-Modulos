/*
    Crie uma função que calcula a quantidade mínima de passos que o MB precisa dar para atravessar uma `rua qualquer`, com os seguintes requisitos:
	O `MB` deseja atravessar uma `rua qualquer`. Inicialmente, `MB` está localizado em uma posição X, e deseja chegar a uma posição >= Y. 
    A cada passo que `MB` dá, ele percorre uma distância fixa Z. Nossa função deve:
	* Contar a quantidade mínima de passos que `MB` precisa dar para atravessar a rua, ou seja, sair da posição X e chegar ou ultrapassar à posição Y;
	* Possuir 3 parâmetros (3 números inteiros X, Y e Z);
	* Retornar um número mínimo de passos que inicie da posição X e vá para uma posição maior ou igual a Y.
    Exemplo de saída do programa:
    * Dando como exemplo os números de entrada:
        * X = 5;
        * Y = 40;
        * D = 1.
    * Ao dar um passo, deve ser somada a distância inicial + a distância do passo dado, ou seja:
        * Ao dar um passo = 5 + 1;
        * Dois passos: 5 + 1 + 1.
    * E assim, sucessivamente, até chegar ou passar à distância final de 40.
*/
function passosMB(x = 5, y = 40, z = 1) {
    let p0 = x;
    let pt = 0;
    for (x; x < y; x += z) {
        p0 += y;
        pt++;
    }
    return pt;
}

console.log(passosMB());
console.log(passosMB(1, 10, 1));
console.log(passosMB(3, 50, 7));
console.log(passosMB(2, 37, 3), `\n`);
