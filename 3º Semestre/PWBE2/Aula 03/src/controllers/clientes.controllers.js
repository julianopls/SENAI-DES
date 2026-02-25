const prisma = require("../data/prisma");

const novoCliente = async (req, res) => {
    let { nome, CPF, email, CNH } = req.body;

    const nomeLimpo = nome.trim();
    const palavrasDoNome = nomeLimpo.split(" ");

    if (nomeLimpo === "" || palavrasDoNome.length < 2) {
        return res.status(400).send("Erro: Digite seu nome completo.");
    }

    let cpfLimpo = String(CPF).replace(/[^0-9]/g, "");

    if (cpfLimpo.length !== 11) {
        return res.status(400).send("Erro: O CPF deve ter exatamente 11 números.");
    }

    email = email.trim().toLowerCase();

    if (!email.includes("@") || !email.includes(".")) {
        return res.status(400).send("Erro: Digite um e-mail válido.");
    }

    const todosClientes = await prisma.clientes.findMany();
    const emailExiste = todosClientes.some(c => c.email.toLowerCase() === email);

    if (emailExiste) {
        return res.status(400).send("Erro: Este e-mail já está cadastrado.");
    }

    const caracteresCNH = CNH.trim().split("");
    const primeiroChar = caracteresCNH[0];

    if (isNaN(parseInt(primeiroChar))) {
        return res.status(400).send("Erro: A CNH deve começar com um número.");
    }

    const ncliente = await prisma.clientes.create({
        data: {
            nome: nomeLimpo,
            CPF: Number(cpfLimpo),
            email: email,
            CNH: CNH.trim()
        }
    });

    res.status(201).json(ncliente);
};

const listarClientes = async (req, res) => {
    const clientes = await prisma.clientes.findMany();

    res.json(clientes).status(200).end();
};

const buscarCliente = async (req, res) => {
    const { id } = req.params;
    const cliente = await prisma.clientes.findUnique({
        where: { id }
    });

    res.json(cliente).status(200).end();
};

const apagarCliente = async (req, res) => {
    const { id } = req.params;
    const cliente = await prisma.clientes.delete({
        where: { id }
    });

    res.json(cliente).status(200).end();
};

module.exports = {
    novoCliente,
    listarClientes,
    buscarCliente,
    apagarCliente
};