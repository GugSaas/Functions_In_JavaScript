
// Usando o + ou  , no console.log tem uma diferença, o "+" ocupa o próximo caracter
// Enquanto que a "," da um espaço e depois insere
// Trechos de código que podem ser acionados a any time
function first_function(){
    window.alert('eita função daora e fácil');
}

function test(nome, idade){
    console.log('O nome passado para a função é', nome, 'e a idade é', idade);
}

//first_function();
nome = 'Guga';
test(nome, idade=18);

function getName(){
    return 'O sobrenome é saas';
    console.log('Teste')  // A função terminou no return, essa parte não é executada
}

var nome = getName();  // Atribuir o valor do return para uma variavel
console.log(nome)

function pegarNome(parametro){
    if (parametro == 1){
        return 'Nome certo'
    }else{
        return console.log('Errado')
    }
}

pegarNome(2)
var answer = pegarNome(1)
console.log(answer)

