require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors);

app.listen(process.env.PORT_APP,() => {
    console.log("online na Porta " + process.env.PORT_APP);
});