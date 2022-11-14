//Faça umalgoritmo que dado as 3 notas tiradas por um aluno em um semestre
//da faculdade  calcule e imprima a sua média e sua classificação conforme a tabela abaixo. 
 
//Média = (nota1 + nota2 = nota3) / 3 
 
//Classificação: 
//- Média menor que 5, reprovado;
//- Média entre 5 e 7, recuperação; 
//- Média acima de 7, passou de semestre; 
 
const nota1 = 7;
const nota2 = 7;
const nota3 = 8;
const Mfinal = ((nota1 + nota2 + nota3) / 3);

if (Mfinal < 5) {
    console.log('REPROVADO');

} else if (Mfinal >= 5 && Mfinal <= 7) {  
    console.log('Recuperação');

} else {
    console.log('Passou de Semestre');
}
