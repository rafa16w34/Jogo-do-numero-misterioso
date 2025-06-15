alert("Seja Bem vindo.Ce ta baum meu fi?"); // alert exibe um aviso na guia
let pontos = 0;
let maximo = 100;
let minimo = 1;
let numeroSecreto = parseInt(Math.random()*maximo+minimo); //let serve para criar uma variavel
let chute;              //prompt aparece, além de um aviso na guia, um espaço para escrever
console.log(numeroSecreto);//mensagem secreta na aba inspecionar
let tentativas = 1;

while(chute != numeroSecreto){//enquanto

    chute = prompt ("Escolha um número entre " + minimo + " e " + maximo);

    if (isNaN(chute) || chute.length == 0){
        alert("Cê é besta hein!");
    }else{

    if (numeroSecreto == chute){//se o chute for igual ao número secreto...

        alert("Gotcha, você acertou o número era " + numeroSecreto +"!");
        pontos = 100;

        }else{
        if (chute > numeroSecreto){
            alert ("O número é menor que " + chute + "." );  
        }
        else{
            alert ("O número é maior que " + chute + "." );   
        }
        pontos = 0;
        tentativas++;
        }       
}}

let palavraVez = tentativas > 1 ? " vezes." : " vez.";//operador ternário
alert("Você tentou " + tentativas + palavraVez)



//Exercício da alura que não era necessário!
//let nome = Lua;
//let idade = 25;
//let numeroDeVendas = 50;
//let saldoDisponivel = 1000;
let mensagemDeErro =  ("Erro! Preencha todos os campos");
//alert (mensagemDeErro);
let nome = prompt ("Nome:");
let idade = prompt ("Idade:");
if (idade >= 18){
    alert("Já pode ser preso hein..");
}else {
    alert("Vai jogar Minecraft então!");
}

//Exercício da alura que não era necessário!
diaDaSemana = prompt("Qual o dia da semana?");
if (diaDaSemana == "Sabado" || diaDaSemana == "Sábado" || diaDaSemana == "sábado" || diaDaSemana == "sabado" || diaDaSemana == "Domingo" || diaDaSemana == "domingo"){
alert("Bom fim de semana!");
}else if (diaDaSemana == "Sexta" || diaDaSemana == "Sexta Feira" || diaDaSemana == "sexta" || diaDaSemana == "sexta feira" || diaDaSemana == "Sexta-Feira" || diaDaSemana == "sexta-feira" ){
    alert("Sextou!");
}else{
    alert("Boa semana!");
}



if (chute >= 0){
   alert("O número secreto foi um número positivo! Caso quisesse saber..");
}else{
    alert("O número secreto foi um número negativo!Caso quisesse saber..");
}



//if (pontos == 100){
 //   alert ("Parabéns, você ganhou com a pontuação de " + pontos);
//}else{
  // alert ("Você perdeu com a pontuação de" + pontos);
//}
//alert("O saldo da conta é " + saldoDisponivel + ".");

alert("Seja bem vindo " + nome + "!");

//Exercício da alura que não era necessário!
//let numero = 0;
//while (numero != 11){
//    console.log(numero);
//   alert(numero);
//    numero++;
//}
//let numeroo = 10;
//while (numeroo != -1){
//   console.log(numeroo);
//    alert(numeroo);
//    numeroo--;
//}

//Exercício da alura que não era necessário!
console.log("Bem vindo!");
console.log("Olá " + nome + " !");
let lingDeProg = prompt("Qual linguagem de programação você mais gosta?");
console.log(lingDeProg);
alert ("A linguagem de programação que você mais gosta é " + lingDeProg + ".");

//valor1 = 2;
//valor2 = 3;
//resultado = valor1 + valor2;
//console.log("A soma de " + valor1 + " e " + valor2 + " é igual a " + resultado);
//resultado2 = valor1 - valor2;
//console.log("A diferença de " + valor1 + " e " + valor2 + " é igual a " + resultado2);

if (idade >= 18){
    alert("Você é de maior! Juízo hein..");
}else {
    alert("Vai pra casa tomar café com leite!");
}



//let nota = parseInt(Math.random()*10+1);
//if (nota >= 7){
//    alert("Aprovado pois sua nota é igual a "+ nota +".");
//}else{
//    alert("Reprovado pois sua nota é igual a "+ nota +".");
//}
let numeroConsole = Math.random();
console.log(numeroConsole);
let numeroConsole2 = parseInt(Math.random()*10+1);
console.log(numeroConsole2);
let numeroConsole3 = parseInt(Math.random()*1000+1);
console.log(numeroConsole3);