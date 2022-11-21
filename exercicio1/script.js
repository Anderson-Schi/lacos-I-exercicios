let pergunta = prompt("Voce deseja comer uma coxinha ?").toUpperCase();
let conta = 0;


while(pergunta === "S"){
    pergunta = prompt("Voce deseja comer mais uma coxinha ?").toUpperCase();
    conta+=2.50;  //conta = conta + 2.5
};
console.log(`Saldo total R$${conta}`);