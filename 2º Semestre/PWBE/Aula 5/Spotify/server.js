const express = require("express");
const cors = require("cors");

const usuariosRoutes = require("./scr/routes/usuarios.routes");
const musicasRoutes = require("./scr/routes/musicas.routes");
const playlistRoutes = require("./scr/routes/playlist.routes.");
const playlist_MusicaRoutes = require("./scr/routes/playlist_musica.routes");


const app = express(); //Carrega congig. inicial do express



app.use(cors()); //Aplica o cors
app.use(express.json()); //Habilita a comunicação com JSON

app.use(usuariosRoutes);
app.use(musicasRoutes);
app.use(playlistRoutes);
app.use(playlist_MusicaRoutes);


//Inicia a API na porta 3000
app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});