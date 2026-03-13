const modalCli = document.getElementById("modalCli");

function abrirModal() {
    modalCli.style.display="block";
}

function fecharModal() {
    modalCli.style.display="none";
}

const formCli = document.querySelector("#formCli");
formCli.addEventListener("submit", e => {
    e.preventDefault();
    const obj ={
        cpf: formCli.cpf.value,
        nome: formCli.nome.value,
        sobrenome: formCli.nome.value,
        nascimento: formCli.nome.value
    }
    clientes.push(obj);
    console.log(clientes);
});