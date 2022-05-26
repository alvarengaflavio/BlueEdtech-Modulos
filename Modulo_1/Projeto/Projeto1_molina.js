console.clear();
const prompt = require('prompt-sync')();
//Imprimindo a história
console.log(
    'Você acorda e levanta para tomar o seu café da manhã, para iniciar o dia, e percebe que não terá nada para fazer na janta, tendo apenas um pacote de pão e um pote de margarina. Sendo assim, você já planeja passar no mercado a noite, após o trabalho. Conversando com sua companheira, vocês decidem fazer uma noite de hamburguer. Voces pegam e fazem uma lista do que precisa para ser feito. Na lista vocês colocam, hamburguer, queijo, maionese, verduras e pão de hamburguer. Após o café você se prepara para ir trabalhar e sai de casa. No caminho para o trabalho percebe que esqueceu o seu celular em casa, junto com a lista, mas como você não o utiliza para trabalhar, acaba por decidir não voltar em casa. Após o longo e cansativo dia de trabalho, você sai do trabalho e se direciona ao mercado. Chegando lá, fica tentando se lembrar das coisas que estavam na lista. Você paga a conta e vai para casa. Sua companheira resolve ver se você realmente se lembrou de tudo e começa e te fazer algumas perguntas:',
);

//Realizando as perguntas e se a resposta for diferente de sim ou nao, o programa nao continua até ter a resposta

let pergunta1 = prompt('Você comprou o hamburguer?').toLowerCase();
while (pergunta1 != 'sim' && pergunta1 != 'nao') {
    console.log('Favor responder apenas com sim ou nao.');
    pergunta1 = prompt('Você comprou o hamburguer?');
    pergunta1 = pergunta1.toLowerCase();
}

let pergunta2 = prompt('Você comprou o queijo?').toLowerCase();
while (pergunta2 != 'sim' && pergunta2 != 'nao') {
    console.log('Favor responder apenas com sim ou nao.');
    pergunta2 = prompt('Você comprou o queijo?').toLowerCase();
}

let pergunta3 = prompt('Você comprou a maionese?').toLowerCase();
while (pergunta3 != 'sim' && pergunta3 != 'nao') {
    console.log('Favor responder apenas com sim ou nao.');
    pergunta3 = prompt('Você comprou a maionese?').toLowerCase();
}

let pergunta4 = prompt('Você comprou as verduras?').toLowerCase();
while (pergunta4 != 'sim' && pergunta4 != 'nao') {
    console.log('Favor responder apenas com sim ou nao.');
    pergunta4 = prompt('Você comprou as verduras?').toLowerCase();
}

let pergunta5 = prompt('Você comprou o pão?').toLowerCase();
while (pergunta5 != 'sim' && pergunta5 != 'nao') {
    console.log('Favor responder apenas com sim ou nao.');
    pergunta5 = prompt('Você comprou o pão?').toLowerCase();
}

//Declarando o contador de sim

let sim = 0;

//Usando o if para adicionar aos contadores os numeros de resposta de casa achado.

if (pergunta1 === 'sim') {
    sim++;
}
if (pergunta2 === 'sim') {
    sim++;
}
if (pergunta3 === 'sim') {
    sim++;
}
if (pergunta4 === 'sim') {
    sim++;
}
if (pergunta5 === 'sim') {
    sim++;
}
// Imprimindo os resultados de acordo com o número de respostas sim
if (sim === 0) {
    console.log(
        'Infelizmente você terá que se contentar em comer um pão velho com margarina e ainda ouvir reclamações, pois você fracassou no mercado!',
    );
} else if (sim === 1 || sim === 2) {
    console.log(
        'Você pode não comer bem, mas também não irá dormir com fome. Reclamações serão ouvidas.',
    );
} else if (sim === 3) {
    console.log(
        'A noite de hamburguer foi afetada, mas não irá ouvir tanta reclamação pois você lembrou de alguns ingredientes e conseguirá montar um sanduiche!',
    );
} else if (sim === 4) {
    console.log(
        'Seu sanduiche ficará bom, mesmo com o ingrediente faltante, você comerá bem e vai dormir satisfeito!',
    );
} else {
    console.log(
        'Sua noite de hamburguer ta garantida! Você praticamente pode abrir uma hamburgueria! Sua memória é incrível!',
    );
}
