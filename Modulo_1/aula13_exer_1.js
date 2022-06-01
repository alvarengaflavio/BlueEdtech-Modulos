/*
    Crie um objeto _pessoa_ com os atributos: nome, idade, peso e altura. 
    Além disso ela deve ter os métodos: Envelhecer, engordar, emagrecer, crescer. 
    Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm. 
    Crie um método _bio_ que retorna uma string com todas as informações da pessoa.
*/
const prompt = require('prompt-sync')();
console.clear();

class pessoa {
    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    Envelhecer(n = 1) {
        for (let i = 0; i < n; i++) {
            this.idade += 1;
            if (this.idade < 22) this.crescer();
            if (this.idade < 18) this.Engordar(this.idade * 0.25);
        }
    }

    Engordar(n = 1.0) {
        this.peso = +(this.peso + n).toFixed(2);
    }

    Emegrecer(n = 1.0) {
        this.peso = +(this.peso - n).toFixed(2);
    }

    crescer(n = 0.05) {
        this.altura = +(this.altura + n).toFixed(2);
    }

    bio() {
        return JSON.stringify(this);
    }
}

const maria = new pessoa('Maria', 10, 30, 1.2);
console.log(maria.bio());
maria.Envelhecer(5);
console.log(maria.bio());
maria.Envelhecer(5);
console.log(maria.bio());
maria.Envelhecer(10);
console.log(maria.bio());
maria.Emegrecer(4.1536);
console.log(maria.bio());
