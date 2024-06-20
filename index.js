//const age = 24
//const name = 'Hadassa'
//const isDeveloper = true

//console.log(age);
//console.log(name);
//console.log(isDeveloper);

//calcule o imc de um indivíduo utilizando a formula
//imc = peso/altura*

//variável
//const peso = 65;
//const altura = 1.62;
//const imc = peso/(altura*altura)
//console.log()

var prompt = require("prompt-sync")();

// const name = prompt('digite seu nome');
// console.log(name);

// const name = prompt('digite seu nome:');
// const weight = prompt(`olá ${name}, digite seu peso:`);
// console.log(`${name}, o seu peso é ${weight}`);

// function showData() {
//   const name = prompt("digite seu nome: ");
//   const weight = prompt(`olá ${name}, digite seu peso:`);
//   console.log(`${name} , o seu peso é ${weight}`);
// }

//showData(){


//estruturas de controle

function verifyCnh(){
    const name = prompt('digite seu nome:');
    const age = prompt(`´olá ${name}, digite sua idade:`);

    if(age >=18){
        console.log(`´olá ${name}, você pode tirar a habilitação!`);
    } else { 
        console.log(`´olá ${name}, você  não pode tirar a habilitação!`);
    
}
}
verifyCnh()
