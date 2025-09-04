const musicas = require("../data/musicas.data");


const listar = (req, res) => {
    res.send(musicas).end();
};


const buscar = (req, res) => {
    const id = req.params.id;
    let musica = "";

    musicas.forEach((m, index) => {
        if (m.id === id) {
            musica = m;
        }
    });

    if (musica === "") musica = "Não encontrado";

    res.send(musica).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    musicas.push(data);
    res.status(201).send("Cadastrado com Sucesso").end();
};


const apagar = (req, res) => {
    const id = req.params.id;
    let indice = -1;

    musicas.forEach((m, index) => {
        if (m.id === id) {
            indice = index;
        }
    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        musicas.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const musica = req.body;
    let encontrado = false;

    musicas.forEach((m, index) => {
        if (m.id === musica.id) {
            musicas[index] = musica;
            encontrado = true;
        }
    });

    if (!encontrado) {
        res.status(404).end();
    } else {
        res.status(201).end();
    }
};

const alterar = (req, res) => {
    const id = req.params.id;
    const musicaUpdate = req.body;

    let indice = -1;
    musicas.forEach((m, index) => {
        if (m.id === id) {
            indice = index;
        }
    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        Object.keys(musicaUpdate).forEach((chave) => {
            musicas[indice][chave] = musicaUpdate[chave];
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
    alterar
};
