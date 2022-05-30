/*
    Construa uma função que receba uma data no formato _DD/MM/AAAA_ e devolva uma string no formato '_D de mesPorExtenso de AAAA_'. 
    Valide a data e retorne NULL caso a data seja inválida.
*/
const prompt = require('prompt-sync')();
console.clear();

function dataExtensa(data) {
    const data_ext = data.split('/');
    const [dia, mes, ano] = data_ext;
    const meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];
    return `${dia} de ${meses[parseInt(mes) - 1]} de ${ano}`;
}

function dataHoje() {
    let dateObj = new Date();
    let day = dateObj.getUTCDate();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let year = dateObj.getUTCFullYear();

    return `${day}/${month}/${year}`;
}

let data1 = '24/03/1984';

console.log(dataExtensa(data1));
console.log(dataExtensa(dataHoje()));
