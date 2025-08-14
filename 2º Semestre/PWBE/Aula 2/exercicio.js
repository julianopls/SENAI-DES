const time = 
    {
        "nome": "Palmeiras",
        "estado": "Sao Paulo",
        "fundacao": 1914,
        "diretor": "Anderson Barros",
        "brasao": "https://a-static.mlcdn.com.br/1500x1500/escudo-decorativo-palmeiras-oficial-e-licenciado-30cm-estilo-alviverde/olistplus/opmzpgo1yezpra11/c841be68756e644d37ef99dea963e389.jpeg",
        "vitorias": 10,
        "derrotas": 3,
        "empates": 3
    }

let pontos = 0;

pontos += time.vitorias *3;
pontos += time.empates;

console.log(time.nome + ", Total de pontos = "+ pontos);