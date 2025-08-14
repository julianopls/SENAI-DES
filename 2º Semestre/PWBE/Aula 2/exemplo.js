// const numeros = [1, 2, 3, 4, 5];

// for(let i = 0; i < numeros.length; i++) {
//    console.log("[" + i + "] -> " + numeros[i]);
// }

// function soma(a, b) {

//     // return a + b;
//     console.log(a + b);
// }

// // console.log(soma(2, 3) );

// soma(5, 5);


// const soma = (a, b) => {
//    return a + b;
// }

// console.log(soma(8, 2));
// console.log(soma(7, 10));

const numeros = [1, 2, 3, 4, 5];
const marcas = ["Nike", "Adidas", "Polo"];

const usuarios = [
    {
        "nome": "Fulano",
        "sobrenome": "brolezzi",
        "matricula": "1234",
        "telefone": "(12) 1234-4321"
    },
    {
        "nome": "Beltrano",
        "sobrenome": "moraes",
        "matricula": "4567",
        "telefone": "(19) 1234-4321"
    }

];

usuarios.forEach((usuario) => {
    if(usuario.matricula === "4567"){
        console.log(usuario.nome + " " + usuario.sobrenome);
        console.log(usuario.telefone);
    }
});



// function imprime(value) {
//     console.log("Value -" + value);
// }
// numeros.forEach(imprime);

// marcas.forEach( (value) => {
//    if(value === "Nike") {
//     console.log("Encontrei");
//    }
// } );
    
// const carro = {
//     "ano": 2000,
//     "cor": "preto",
//     "modelo": "Uno",
//     "marca": "fiat",
//     "escada": true,
//     "placa": "abc1234"
// }

// console.log(carro.placa);
