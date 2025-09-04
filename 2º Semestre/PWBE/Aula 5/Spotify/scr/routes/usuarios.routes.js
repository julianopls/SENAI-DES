const express = require("express");
const router = express.Router();

const usuarios = require("../controllers/usuarios.controllers");


router.get("/usuario", usuarios.listar);
router.get("/usuarios/:id", usuarios.buscar);
router.post("/usuario", usuarios.cadastrar);
router.delete("/usuarios/:id", usuarios.apagar);
router.put("/usuarios/:id", usuarios.atualizar);
router.patch("/usuarios/:id", usuarios.alterar);

module.exports = router;
