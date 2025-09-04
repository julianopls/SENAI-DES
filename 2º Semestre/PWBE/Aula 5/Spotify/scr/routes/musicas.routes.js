const express = require("express");
const router = express.Router();

const  musicas = require("../controllers/musicas.controllers");


router.get("/musicas", musicas.listar);     
router.get("/musicas/:id", musicas.buscar);
router.post("/musicas", musicas.cadastrar);
router.delete("/musica/:id", musicas.apagar);
router.put("/musicas", musicas.atualizar);
router.patch("/musicas/:id", musicas.alterar);


module.exports = router;
