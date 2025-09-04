const playlists = require("../data/playlist.data");

const listar = (req, res) => {
    res.send(playlists).end();
};

const buscar = (req, res) => {
    const id = req.params.id;
    let playlist = "";

    playlists.forEach((p) => {
        if (p.id === id) playlist = p;
    });

    if (playlist === "") playlist = "Não encontrado";

    res.send(playlist).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    playlists.push(data);
    res.status(201).send("Cadastrado com Sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;
    let indice = -1;

    playlists.forEach((p, index) => {
        if (p.id === id) indice = index;
    });

    if (indice === -1) res.status(404).end();
    else {
        playlists.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const playlist = req.body;
    let encontrado = false;

    playlists.forEach((p, index) => {
        if (p.id === playlist.id) {
            playlists[index] = playlist;
            encontrado = true;
        }
    });

    if (!encontrado) res.status(404).end();
    else res.status(201).end();
};

const alterar = (req, res) => {
    const id = req.params.id;
    const playlistUpdate = req.body;

    let indice = -1;
    playlists.forEach((p, index) => {
        if (p.id === id) indice = index;
    });

    if (indice === -1) res.status(404).end();
    else {
        Object.keys(playlistUpdate).forEach((chave) => {
            playlists[indice][chave] = playlistUpdate[chave];
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
