var nome = 'Henrique'

//Se usa if quando você quer validar uma condição
//Nessa caso por exemplo se o nome da variável for 'Henrique' vai entrar dentro do if
if (nome == 'Henrique') {
    console.log('A variavel entrou dentro do if')
}
//No else if primeiro ele passa no if, se a condição for falsa ele vai para o proximo else if para validar a condição
else if (nome == 'Nicolas') {
    console.log('A variável entrou no else if')
}
else if (nome == 'Ricardo') {
    console.log('A variável entrou no else if')
}
//Caso ele não entre em nenhuma condição acima ele cairá no else de qualquer jeito
else {
    console.log('A variável caiu no else')
}