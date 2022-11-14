class Pessoa {
    nome; 
    idade; 
     
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

    }
}

 
function CompararPessoas(p1, p2){
    if (p1.idade > p2.idade) { 
        console.log(`${p1.idade} é maior que ${p2.idade}`);
    } 
    else if (p2.idade > p1.idade) {
        console.log(`${p2.idade} é maior que ${p1.idade}`); 
    }
    else {
        console.log(`${p1.idade} é igual ao  ${p2.idade}`);
    }
} 
 
const will = new Pessoa('will', 23);
const dalmo = new Pessoa('dalmo', 57);
 
CompararPessoas(will, dalmo);