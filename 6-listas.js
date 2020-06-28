console.log(`Trabalhando com listas`);
//ctrl + k + c  >  torna tudo selecionado comentario ; ctrl + k + u desfaz os comentarios
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listaDeDestinos.push(`Curitiba`); //metodo pra adicionar novos itens ao array sem ter que adicionar na raiz dele
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //deletar destino na posição 1 da lista e deleta 1 item só
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]); //para exibir um unico destino da lista, coloca a posição do destino que quer exibir
