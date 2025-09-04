const usuarios = require("../data/usuarios.data");

const listar = (req, res) => {
    res.send(usuarios).end();
};

const buscar = (req, res) => {
    const id = req.params.id;
    let usuario = "";

    usuarios.forEach((u) => {
        if (u.id === id) usuario = u;
    });

    if (usuario === "") usuario = "Não encontrado";

    res.send(usuario).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    usuarios.push(data);
    res.status(201).send("Cadastrado com Sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;
    let indice = -1;

    usuarios.forEach((u, index) => {
        if (u.id === id) indice = index;
    });

    if (indice === -1) res.status(404).end();
    else {
        usuarios.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const usuario = req.body;
    let encontrado = false;

    usuarios.forEach((u, index) => {
        if (u.id === usuario.id) {
            usuarios[index] = usuario;
            encontrado = true;
        }
    });

    if (!encontrado) res.status(404).end();
    else res.status(201).end();
};

const alterar = (req, res) => {
    const id = req.params.id;
    const usuarioUpdate = req.body;

    let indice = -1;
    usuarios.forEach((u, index) => {
        if (u.id === id) indice = index;
    });

    if (indice === -1) res.status(404).end();
    else {
        Object.keys(usuarioUpdate).forEach((chave) => {
            usuarios[indice][chave] = usuarioUpdate[chave];
        });
        res.status(200).end();
    }
};

module.exports = { 
    listar, 
    buscar, 
    cadastrar, 
    apagar, 
    atualizar, 
    alterar };
