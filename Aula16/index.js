/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1993
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM*alturaEmM);

console.log(indiceMassaCorporal);

anoNascimento = (2023-idade);

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);

console.log(nome, 'nasceu em', anoNascimento,'.')

// template strings, usa-se a crase ` para abrir e fechar.

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}.`);

