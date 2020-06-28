console.log("Trabalhando com Atribuição de Variáveis");
//const idade = 29;
//const nome = "Ricardo";
let primeiroNome = "Ricardo"; // variavel comum que n é constante, possivel de sobrescrever em cima. Diferente da const = constante
//let variavel que varia, const varivael que é constante
const sobrenome = "Bugan";

console.log(primeiroNome, sobrenome);
console.log(primeiroNome + ' ' + sobrenome);
console.log(`Meu nome é ${primeiroNome}`); //interpolação de variaveis
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); 

const nomeCompleto = primeiroNome + sobrenome; //sobrescrita de variavel, por isso n se coloca const na frente
console.log(primeiroNome);
//boa pratica: manter variaveis como constante. Melhor pois debugar variaveis sobrescrias demoram mais tempo

let idade; //declarando variavel
idade = 26; //atribuindo valor a variavel declarada
idade = idade + 1;
console.log(idade);