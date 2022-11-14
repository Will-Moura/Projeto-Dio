class Pessoa {
    nome;
    idade;
     
    constructor(nome, idade) { 
        this.nome = nome; 
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    } 
//função
    descrever () {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
} 
 
const will = new Pessoa ('will Moura', 23);

const dalmo = new Pessoa ('Dalmo', 57);

console.log(will, dalmo) 