const express = require("express");
const router = express.Router();

const playlist = require("../controllers/playlist.controllers");

router.get("/playlists", playlist.listar);
router.get("/playlist/:id", playlist.buscar);
router.post("/playlists", playlist.cadastrar);
router.delete("/playlist/:id", playlist.apagar);
router.put("/playlists", playlist.atualizar);
router.patch("/playlist/:id", playlist.alterar);

module.exports = router;
