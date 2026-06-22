let nota=Number(prompt("Qual a nota do aluno?"));
while((nota < 0)||(nota>10)){
    console.log (`Nota inválida`)
nota=Number(prompt("Qual a nota do aluno novamnte?"))
}
   console.log (`Nota válida`)