const prisma = require("../data/prisma");

const novoCarro = async (req, res) => {
    let { placa, marca, modelo, ano } = req.body;

    placa = placa.trim().replace(" ", "").toUpperCase();

    if (placa === "" || placa.length !== 7 || placa.includes(" ")) {
        return res.status(400).send("Erro: Placa deve ter 7 caracteres e não pode ter espaços.");
    }

    const anoTexto = String(ano); 
    const caracteresDoAno = anoTexto.split("");
    const temLetra = caracteresDoAno.some(caractere => caractere < "0" || caractere > "9");

    if (anoTexto.length !== 4 || temLetra) {
        return res.status(400).send("Erro: O ano deve ter exatamente 4 números.");
    }

    const todosOsCarros = await prisma.carros.findMany(); 
    const placaJaExiste = todosOsCarros.some(carro => carro.placa.toUpperCase() === placa);

    if (placaJaExiste) {
        return res.status(400).send("Erro: Já existe um veículo cadastrado com esta placa.");
    }

    const ncarro = await prisma.carros.create({
        data: {
            placa,
            marca,
            modelo,
            ano: Number(ano)
        }
    });

    res.status(201).json(ncarro);
};

const listarCarros = async (req, res) => {
    const carros = await prisma.carros.findMany();


    res.json(carros).status(200).end();
};

const buscarCarro = async (req, res) => {
    const { id } = req.params;
    const carro = await prisma.carros.findUnique({
        where: { id }
    });

    res.json(carro).status(200).end();
};

const apagarCarro = async (req, res) => {
    const { id } = req.params;
    const carro = await prisma.carros.delete({
        where: { id }
    });

    res.json(carro).status(200).end();
};

module.exports = {
    novoCarro,
    listarCarros,
    buscarCarro,
    apagarCarro
};