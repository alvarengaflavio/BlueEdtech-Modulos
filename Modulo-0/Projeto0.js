/*
    Detetive 
    * O programa deve fazer 5 perguntas ao usuario com respostas de sim ou não
    * Caso o usuario responda sim a 4 perguntas ou mais, devemos retornar que ele é culpado
    * Caso o usuario responda sim a 3 perguntas, devemos retornar que ele é suspeito
    * Caso o usuario responda sim a 2 perguntas ou menos, devemos retornar que ele é inocente
    Critérios de Aceitação:
    * Precisa retornar resposta para todas as possibilidades de culpado,suspeito ou inocente.
    * Precisa ter condicionais.
*/
const prompt = require('prompt-sync')();
console.clear();

let conta_sim = 0; //inicia contador de sim's
let nome = ''; //inicia nome como string
let respostas = ['', '', '', '', '']; //inicia respostas como array de strings

// Plano de Fundo do Caso
console.log('\n\n\tUm CRIME na véspera do Natal!\n');
console.log(
    '\tOdete Roitman, uma empresária currupta que colecionava inimigos, teve sua vida ceifada na véspera do Natal de 1988.',
);
console.log(
    '\tO assassinato ocorreu na residência da vítima que foi morta com três tiros à queima-roupa.\n',
);
console.log('\tE agora o Brasil inteiro quer saber...\n');
console.log('\n\tQUEM MATOU ODETE ROITMAN???\n\n');
console.log(
    'O Sr.(a) é um dos suspeitos e acaba de ser chamado para o interrogatório...\n',
);

while (!nome) {
    // Enquando o Nome não for TRUE (FALSE) consitnuar pedindo nome
    nome = prompt(
        'Antes de iniciarmos o interrogatório, por favor, informe o nome do INTERROGADO(A): ',
    ); // Lendo o Nome do Suspeito
}

console.log('\nOK! Vamos iniciar o Interrogatória do(a) Sr.(a)', nome); // Nome Tem um valor!
console.log('Lembre-se de Responder escrevendo apenas SIM ou NÃO');

// PRIMEIRA PERGUNTA
console.log('\n[PRIMEIRA PERGUNTA]');
while (respostas[0] != 'sim' && respostas[0] != 'nao') {
    //confere se a resposta foi `sim` ou `nao`
    respostas[0] = String(prompt('O(A) Sr.(a) conhecia Odete Roitman? '))
        .replace(/\s/g, '')
        .toLowerCase(); //retira espaços e converte tudo para caixa baixa
}

// SEGUNDA PERGUNTA
console.log('\nOK... Vamos para a...');
console.log('\n[SEGUNDA PERGUNTA]');
while (respostas[1] != 'sim' && respostas[1] != 'nao') {
    //confere se a resposta foi `sim` ou `nao`
    respostas[1] = String(
        prompt(
            'É verdade que o Sr.(a) esteve no mesmo local que Odete Roitman na noite do crime? ',
        ),
    )
        .replace(/\s/g, '')
        .toLowerCase();
}

// TERCEIRA PERGUNTA
console.log('\nHuuummmmm...\n');
console.log('\n[TERCEIRA PERGUNTA]');
while (respostas[2] != 'sim' && respostas[2] != 'nao') {
    //confere se a resposta foi `sim` ou `nao`
    respostas[2] = String(
        prompt(
            'O(A) Sr.(a) tem familiaridade com armas de fogo ou já atirou alguma vez? ',
        ),
    )
        .replace(/\s/g, '')
        .toLowerCase();
}

// QUARTA PERGUNTA
console.log('\nInteressante...\n');
console.log('\n[QUARTA PERGUNTA]');
while (respostas[3] != 'sim' && respostas[3] != 'nao') {
    //confere se a resposta foi `sim` ou `nao`
    respostas[3] = String(
        prompt(
            'O(A) Sr.(a) tem familiaridade com armas de fogo ou já atirou alguma vez? ',
        ),
    )
        .replace(/\s/g, '')
        .toLowerCase();
}

// QUINTA PERGUNTA
console.log('\n...\n');
console.log('\n[QUINTA PERGUNTA]');
while (respostas[4] != 'sim' && respostas[4] != 'nao') {
    //confere se a resposta foi `sim` ou `nao`
    respostas[4] = String(
        prompt(
            'É verdade que entre o(a) Sr.(a) e a Odete Roitman haviam conflitos de âmbito pessoal? ',
        ),
    )
        .replace(/\s/g, '')
        .toLowerCase();
}

for (let i = 0; i < respostas.length; i++) {
    //contar o número de sims
    if (respostas[i] == 'sim') {
        conta_sim++; //se a resposta foi sim incrementa contador de sim
    }
}

// RESULTADO
if (conta_sim > 3) {
    //se respondeu 4 ou + sim, culpado
    console.log(
        '\n\n\t\tCULPADO!!!\n\n\t\tESTEJE PRESO PELA MORTE DE ODETE ROITMAN!!!\n\t\tESTA NOITE O BRASIL DORMIRÁ EM PAZ...\n\n',
    );
} else if (conta_sim > 2) {
    //se 3 sim, suspeito
    console.log(
        '\n\n\t\tSUSPEITO...\n\n\t\tNão deixe a cidade sem avisar a Delegada BlueTech, ou você será preso(a).\n\t\tO mistério continua...\n\n',
    );
} else {
    //se menos de 3 sim, inocente
    console.log(
        '\n\n\t\tINOCENTE...\n\n\t\tVolte para casa tranquilo(a) porque hoje quem não dorme é o Brasil\n\t\tO mistério continua...\n\n',
    );
}
console.log('\t\tFIM DA NOVELA???\n\n');
