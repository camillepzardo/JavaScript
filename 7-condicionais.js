console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 5;
const estaAcompanhada = true;
const temPassagemComprada = false;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade, siga com sua compra");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhada) {
//     console.log("Você está acompanhada(o), pode prosseguir com compra");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log("Não é maior de idade, lo siento nao posso vender para você");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) { // || =  ou 
    console.log("Boa Viagem!");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log("Não é maior de idade, lo siento nao posso vender para você");
};

console.log("Embarque: \n\n");
if (idadeComprador >= 18 || temPassagemComprada == true) {
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);
