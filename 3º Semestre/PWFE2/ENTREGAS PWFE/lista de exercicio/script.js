function reajustar() {
let preco = Number(document.getElementById('preco').value);
let resultado = document.getElementById('resultado');
let desconto = 0;
    if (preco > 1000) desconto = preco * 8 / 100;

let precoComDesconto = Number(preco - desconto);
resultado.innerHTML = `Desconto de R$ ${desconto.toFixed(2)} <br>Preço final R$ ${precoComDesconto.toFixed(2)}`;
}

function salario() {
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;

    if(salario > 2000)
        bonus = salario * 10 / 100;
   
    let salarioComBonus = Number(salario + bonus);
    resultado.innerHTML = `Bonus de R$ ${bonus.toFixed(2)} <br>Bonus Final R$ ${salarioComBonus.toFixed(2)}`;
}

function Frete(){
    let compra = Number(document.getElementById('compra').value);
    let resultado = document.getElementById('resultado');
    let fretado = 0;

    if(compra >= 150){
       fretado =  0;
    }else {
        (compra < 150)
        fretado =  20;
    }

    let compraComFrete = Number(compra + fretado);
    resultado.innerHTML = `Valor do Frete de R$ ${fretado.toFixed(2)} <br>Valor Final da Compra R$ ${compraComFrete.toFixed(2)}`;
}

function gasolina() {
let preco = Number(document.getElementById('preco').value);
let resultado = document.getElementById('resultado');
let desconto = 0;
    if (preco > 200)
    desconto = preco * 5 / 100;

let precoComDescontodeCombustivel = Number(preco - desconto);
resultado.innerHTML = `Desconto de R$ ${desconto.toFixed(2)} <br>Preço final R$ ${precoComDescontodeCombustivel.toFixed(2)}`;
}

function taxa() {
let conta = Number(document.getElementById('conta').value);
let resultado = document.getElementById('resultado');
let taxa = 0;

    if(conta > 100)
        taxa = conta * 10 / 100;

let precoComtaxa = Number(conta + taxa);
resultado.innerHTML = `Valor da taxa R$ ${taxa.toFixed(2)} <br>Valor Final com a Taxa R$ ${precoComtaxa.toFixed(2)}`;
}

function multa () {
let valor = Number(document.getElementById('valor').value);
let dias = Number(document.getElementById('dias').value);
let resultado = document.getElementById('resultado');
let multa = 0;

    if(dias > 0)
        multa = valor * 2 / 100;

let valorComMulta = Number(valor + multa);
resultado.innerHTML = `Valor da Multa R$ ${multa.toFixed(2)} <br>Valor Final Com a Multa R$ ${valorComMulta.toFixed(2)}`;
}

function money () {
let valor = Number(document.getElementById('valor').value);
let resultado = document.getElementById('resultado');
let cashback = 0;

     if(valor > 300)
        cashback = valor * 5 / 100;

let valorComCashback = Number(valor - cashback);
resultado.innerHTML = `Valor do Cashback R$ ${cashback.toFixed(2)} <br>Valor Final Com o Cashback R$ ${valorComCashback.toFixed(2)}`;
}