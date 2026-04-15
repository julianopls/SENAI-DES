const prisma = require("../data/prisma");

const limiteParticipantes =  async (usuarioId, eventoId) => {
    const evento = await prisma.eventos.findUnique({
        where: { id: eventoId },
        include: { 
            inscricoes: true
        }
    });

    const numeroParticipantes = evento.inscricoes.filter(inscricao => inscricao.status == "CONFIRMADA").length;

    if(numeroParticipantes == evento.capacidade_maxima){
        return "LISTA_ESPERA";
    }else{
        return "CONFIRMADA";
    }
};

const verificarDuplicidade = async (usuarioId, eventoId) => {
    const cadastro = await prisma.inscricoes.findMany({
        where: {
            eventosId: eventoId,
            usuariosId: usuarioId 
        }
    });

    if(cadastro.length > 0) throw new Error("Usuario ja cadastrado!");
};

module.exports = {
    limiteParticipantes,
    verificarDuplicidade
}