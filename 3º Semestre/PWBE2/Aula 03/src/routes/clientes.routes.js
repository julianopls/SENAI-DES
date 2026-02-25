const express = require("express");
const router = express.Router();

const clientesController = require("../controllers/clientes.controllers");

router.post("/clientes", clientesController.novoCliente);
router.get("/clientes", clientesController.listarClientes);
router.get("/clientes/:id", clientesController.buscarCliente);
router.delete("/clientes/:id", clientesController.apagarCliente);

module.exports = router;