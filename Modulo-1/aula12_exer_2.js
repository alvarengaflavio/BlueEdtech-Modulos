/*
    Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por `3` e retorne `true` ou `false`.
*/
function divisivelTres(n) {
    if (n % 3) return false;
    return true;
}

for (let index = 0; index < 31; index++) {
    console.log(index, divisivelTres(index));
}
