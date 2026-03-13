const express = require("express");
const router = require("./clientes.routes");


const carrosController = require("../controllers/carros.controllers");

router.post("/carros", carrosController.novoCarro);
router.get("/carros", carrosController.listarCarros);
router.get("/carros/:id", carrosController.buscarCarro);
router.put("/carros/:id",carrosController.atualizarCarros);
router.delete("/carros/:id", carrosController.apagarCarro);

module.exports = router;