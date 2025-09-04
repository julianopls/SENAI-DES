const playlistMusicas = require("../data/playlist_musica.data");

const listar = (req, res) => {
    res.send(playlistMusicas).end();
};

const buscar = (req, res) => {
    const id = req.params.id;
    let musica = "";

    playlistMusicas.forEach((pm) => {
        if (pm.id === id) musica = pm;
    });

    if  (musica === "") musica = "Não encontrado";

    res.send (musica).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    playlistMusicas.push(data);
    res.status(201).send("Cadastrado com Sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;
    let indice = -1;

    playlistMusicas.forEach((pm, index) => {
        if (pm.id === id) indice = index;
    });

    if (indice === -1) res.status(404).end();
    else {
        playlistMusicas.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const musica = req.body;
    let encontrado = false;

    playlistMusicas.forEach((pm, index) => {
        if (pm.id === musica.id) {
            playlistMusicas[index] = musica;
            encontrado = true;
        }
    });

    if (!encontrado) res.status(404).end();
    else res.status(201).end();
};

const alterar = (req, res) => {
    const id = req.params.id;
    const musicaUpdate = req.body;

    let indice = -1;
    playlistMusicas.forEach((pm, index) => {
        if (pm.id === id) indice = index;
    });

    if (indice === -1) res.status(404).end();
    else {
        Object.keys (musicaUpdate).forEach((chave) => {
            playlistMusicas[indice][chave] = musicaUpdate[chave];
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
