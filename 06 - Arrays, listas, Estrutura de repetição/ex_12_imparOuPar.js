// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

const numeros = [2,8,94,25,4,32,1,45,84,78,954,63];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];  
     
    if (numero % 2 === 0 ) { 
        console.log(numero)
    }
    

}