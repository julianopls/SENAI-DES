const express = require("express");
const router = express.Router();

const playlist_musica = require("../controllers/playlist_musica.controllers");

router.get("/playlist_musica", playlist_musica.listar);
router.get("/playlist_musicas/:id", playlist_musica.buscar);
router.post("/playlist_musica", playlist_musica.cadastrar);
router.delete("/playlist_musica/:id", playlist_musica.apagar);
router.put("/playlist_musicas", playlist_musica.atualizar);
router.patch("/playlist_musica/:id", playlist_musica.alterar);

module.exports = router;
