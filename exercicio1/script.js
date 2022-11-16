let pergunta = prompt("Voce deseja comer mais uma coxinha ?").toUpperCase();
let conta = 0;


while(pergunta === "S"){
    pergunta = prompt("Voce deseja comer mais uma coxinha ?").toUpperCase();
    conta+=2.50;
};
console.log(`Saldo total R$${conta}`);