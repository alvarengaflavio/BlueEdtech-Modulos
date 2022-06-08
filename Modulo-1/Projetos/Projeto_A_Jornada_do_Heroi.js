/*
    A Jornada do Herói
    Hoje nós começamos o nosso primeiro projeto entregável! 
    Esse projeto vai avaliar os conteúdos passados durante essa primeira semana, 
    e se você consegue desenvolver uma programação utilizando todos eles.

    Você poderá usar as aulas de Codelab para trabalhar no seu projeto.

    A premissa é a seguinte: O nosso herói chegou ao fim da sua jornada, ao desafio final, 
    e você pode criar um background legal resumindo qual foi essa jornada e onde ele chegou. 
    Use sua criatividade! 
    
    Vale qualquer coisa: Uma guerreira que percorreu um longo caminho para enfrentar um bruxo e salvar seu povo, 
    um astronauta que teve que viajar aos confins da galáxia para deter uma anomalia que iria engolir seu planeta, 
    ou uma pessoa que está voltando para casa ao fim de um dia cansativo e precisa fazer o jantar.

    Dependendo de como foi sua jornada, dos objetivos que foram concluídos no caminho, teremos um resultado final diferente.

    Requisitos
    Você deve criar um programa que faça 5 perguntas para o usuário, e dependendo das respostas, vai exibir um resultado diferente no final. 
    As perguntas devem ser todas de **Sim** ou **Não**, e devem ser referentes aos objetivos que ele tiveram que ser cumpridos durante a jornada, 
    por exemplo: "Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?", 
    "Você conseguiu consertar os reatores nucleares do motor de dobra?", 
    "Você se lembrou de passar no mercado e comprar óleo?"

    No final, o programa deve fazer uma contagem de quantas respostas foram **Sim**, e exibir o resultado de acordo com esse número:

    - 0 respostas Sim: Você falha miseravelmente
    - 1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação
    - 3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco
    - 4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita
    - 5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações

    O programa deve contar a história inicial (background), fazer as perguntas, e ao final, exibir o resultado de acordo com as situações acima

*/
const prompt = require('prompt-sync')();
console.clear();

let conta_sim = 0; //inicia contador de sim's
let respostas = ['', '', '', '', '']; //inicia resposta como string

console.log('\n\t\t\t\tA JORNADA DO HERÓI\n\n');
prompt(
    '\tEste é um jogo iterativo! Pressione ENTER para avançar com a história...',
);
while (respostas[0] != 'sim' && respostas[0] != 'nao') {
    //confere se a resposta foia com 'sim' ou 'nao'
    respostas[0] = String(
        prompt(
            '\tQuando houver uma pergunta responda apenas com SIM ou NAO. Entendido? ',
        ),
    )
        .replace(/\s/g, '')
        .toLowerCase();
} //trata entrada -> string, sem espaços, minúsculo
respostas[0] = ['']; //reinicia respostas[0] após teste

// Plano de Fundo (background)
prompt('\n\tVocê está andando pela floresta...');
prompt('\tNão há ninguém por perto e seu telefone está sem bateria...');
prompt('\tCom o canto do olho, você nota alguém...');
prompt('\n\t\t\t\t\t\t\t\t\t\tShia LaBeouf!\n');
prompt('\tEle está te seguindo, está a DEZ metros de você...');
prompt(
    '\tEle encosta as mãos no chão e DISPARA a correr com muita velocidade...',
);

// PERGUNTA 1 - Você corre com toda sua velocidade para tentar escapar de Shia LaBeouf?
while (respostas[0] != 'sim' && respostas[0] != 'nao') {
    //confere se a resposta foia com 'sim' ou 'nao'
    respostas[0] = String(
        prompt(
            '\n[PERGUNTA 1] - Você corre com toda sua velocidade para tentar escapar de Shia LaBeouf? ',
        ),
    )
        .replace(/\s/g, '')
        .toLowerCase();
} //trata entrada -> string, sem espaços, minúsculo

prompt('\n\tEle está se APROXIMANDO de você!!!\n');
prompt('\tVocê procura seu carro, mas você está desorientado...');
prompt('\tAgora ele está quase te alcançando, e você percebe que...');
prompt('\tHá sangue em seu rosto!...');
prompt('\tMeu Deus, há sangue em TODA PARTE!!!');
prompt('\n\tCorrendo para salvar sua vida de...');
prompt('\t\t\t\t\t\t\t\t\t\tShia LaBeouf!');
prompt('\tEle empunha uma faca, é o...');
prompt('\t\t\t\t\t\t\t\t\t\tShia LaBeouf!');
prompt('\tEscondido nas sombras...');
prompt('\tAstro de Hollywood é o Shia LaBeouf!');
prompt('\n\tAgora está escuro, e você parece tê-lo despistado...');
prompt('\tMas você está completamente perdido(a)...');
prompt('\tPreso com um assassino, você rasteja silenciosamente pela vegetação');
prompt('\n\tAh!\n');
prompt('\tAo longe, uma pequena cabana com uma luz acesa...');
prompt('\t\t\t\t\t\t\t\t\t\t   ESPERANÇA!');
prompt('\tVocê se move furtivamente em direção a cabana...');
prompt('\tMas sua perna!');
prompt('\t\t\t\t\t\t\t\t\t\t   ARRRRRGGG!');
prompt('\tEla fica PRESA em uma armadilha de urso!');

// PERGUNTA 2 - A única solução é arrancar sua perna com os dentes! Você tenta fazer isso em silêncio?
while (respostas[1] != 'sim' && respostas[1] != 'nao') {
    //confere se a resposta foia com 'sim' ou 'nao'
    respostas[1] = String(
        prompt(
            '\n[PERGUNTA 2] - A única solução é cortar sua perna com os dentes! Você tenta fazer isso em silêncio? ',
        ),
    )
        .replace(/\s/g, '')
        .toLowerCase();
}

prompt('\n\tRoendo sua perna...');
prompt('\t\t\t\t\t\t\t\t\t     sihhh! silêncio!');
prompt('\tMancando para a cabana...');
prompt('\t\t\t\t\t\t\t\t\t     CALMA! SILÊNCIO!');
prompt('\tAgora você está na porta...');
prompt('\tSentado lá dentro afiando um machado é o...');
prompt('\t\t\t\t\t\t\t\t\t\tShia LaBeouf!');
prompt('\tMas ele não te ouve entrar...');
prompt(
    '\tVocê está se esgueirando atrás dele, a superestrela do estrangulamento Shia LaBeouf',
);
prompt('\tLutando por sua vida com...');
prompt('\t\t\t\t\t\t\t\t\t\tShia LaBeouf!');
prompt('\tTentando roubar a faca do...');
prompt('\t\t\t\t\t\t\t\t\t\tShia LaBeouf!');
prompt('\tVocê CONSEGUE esfaqueá-lo em seu RIM!...');
prompt('\tFinalmente a salvo de Shia LaBeouf!');
// PERGUNTA 3 - Finalmente a salvo você lembra do seu carro. Você procura a chave antes de sair em busca dele?
while (respostas[2] != 'sim' && respostas[2] != 'nao') {
    //confere se a resposta foia com 'sim' ou 'nao'
    respostas[2] = String(
        prompt(
            '\n[PERGUNTA 3] - Finalmente a salvo você lembra de seu carro. Você procura a chave antes de sair em busca dele? ',
        ),
    )
        .replace(/\s/g, '')
        .toLowerCase();
}
prompt('\n\tAgora você manca pela floresta escura...');
prompt('\tSangue escorrendo de sua perna mutilada...');
prompt('\tVocê derrotou Shia LaBeouf...\n');
prompt('\t\t\t\t\t\t\t\t\t\t    ESPERE!!!');
prompt('\tEle NÃO está morto! ');
prompt('\t\t\t\t\t\t\t\t\t     Shia-Surpresa!!!');
prompt('\tCom um machado em suas mão e morte em seus olhos...');
prompt('\tMas você sabe Jiu Jitsu! A estrela do body slam Shia LaBeouf');
// PERGUNTA 4 - Você ENTRA em uma luta corporal pela arma de Shia LaBeouf novamente?
while (respostas[3] != 'sim' && respostas[3] != 'nao') {
    //confere se a resposta foia com 'sim' ou 'nao'
    respostas[3] = String(
        prompt(
            '\n[PERGUNTA 4] - Você ENTRA em uma luta corporal com Shia LaBeouf novamente? ',
        ),
    )
        .replace(/\s/g, '')
        .toLowerCase();
}
prompt('\n\tLuta LENDÁRIA com Shia LaBeouf...');
prompt('\tTerça-feira casual para Shia LaBeouf...');
prompt('\tVocê tenta pegar com o machado de Shia LaBeouf...');
prompt('\tMas o sangue está drenando rápido da sua perna multilada!');
prompt('\tEle se esquiva de cada golpe...');
prompt('\tEle desvia para a esquerda, você contra-ataca pela direita...');
prompt('\tVocê consegue agarrá-lo pelo pescoço!');

// PERGUNTA 5 - Você teria coragem de desferir o golpe final em Shia LaBouf?
while (respostas[4] != 'sim' && respostas[4] != 'nao') {
    //confere se a resposta foia com 'sim' ou 'nao'
    respostas[4] = String(
        prompt(
            '\n[PERGUNTA 5] - Você tem coragem e força para desferir o golpe final em Shia LaBouf? ',
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

//FINAIS
if (conta_sim > 4) {
    // se conta_sim = 5 => FINAL : TRIUNFO
    prompt('\n\tVocê está cortando a cabeça dele agora...');
    prompt('\tVocê acaba de decapitar...');
    prompt('\t\t\t\t\t\t\t\t\t\tShia LaBeouf!');
    prompt('\tSua cabeça cai no chão, sem expressão...');
    prompt('\tVocê finalmente está a salvo de Shia LaBeouf.');
} else if (conta_sim > 3) {
    // se conta_sim = 4 => FINAL : Vitória PARCIAL
    prompt('\n\tVocê está aplicando um mata-leão nele...');
    prompt('\tVocê acaba de desmaiar...');
    prompt('\t\t\t\t\t\t\t\t\t\tShia LaBeouf!');
    prompt('\tSua perna não tem salvação, mas você escapou...');
    prompt('\tVocê provavelmente está a salvo de Shia LaBeouf.');
} else if (conta_sim > 2) {
    // se conta_sim = 3 => FINAL : DERROTA HONRADA
    prompt('\n\tShia LaBeouf te bate com o cabo do machado...');
    prompt('\tVocê cai no chão inconsciente...');
    prompt(
        '\tVocê acorda numa cela fria, agora você é um prisioneiro(a) de...',
    );
    prompt('\t\t\t\t\t\t\t\t\t\tShia LaBeouf!');
    prompt('\tRecupere suas forças para fugir e se salvar de Shia LaBeouf.');
} else if (conta_sim > 0) {
    // se conta_sim = 1 ou 2 => FINAL : DERROTA
    prompt('\n\tShia LaBeouf te enforca até você perder a conciência...');
    prompt(
        '\tVocê acorda na floresta, em frente a seu carro. A chave está à sua direita...',
    );
    prompt(
        '\tÀ sua esquerda um papel contendo as palavras: "Você não é digno..." Assinado: ',
    );
    prompt('\t\t\t\t\t\t\t\t\t\tShia LaBeouf!');
    prompt(
        '\tSe não for uma armadilha, você está dilacerado mas a salvo de Shia LaBeouf.',
    );
} else {
    // se conta_sim = 0 => FINAL : DERROTA MISERAVEL
    prompt('\n\tEle está cortando sua cabeça agora...');
    prompt('\tVocê acaba de ser decapitado por...');
    prompt('\t\t\t\t\t\t\t\t\t\tShia LaBeouf!');
    prompt('\tSua cabeça cai no chão, sem expressão...');
    prompt('\tVocê foi fácilmente derrotado por Shia LaBeouf.');
}
console.log('\n\n\t\t\t\t\t\t\t\t\t\t\t  FIM\n\n');
