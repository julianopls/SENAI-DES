let clientes = JSON.parse(localStorage.getItem("clientes")) || [];


document.addEventListener("DOMContentLoaded", renderizarTabela);

function abrirModa(){
    document.getElementById("modal").style.display = "block"
}

function fecharModal(){
    document.getElementById("modal").style.display = "none";
    limparCampos();

}
function salvarCliente(){
    const cpf = document.getElementById("cpf").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const nascimento = document.getElementById("nascimento").value;


    if(!cpf || !nome){
        alert("CPF e NOME são obrigatórios!");
        return;
    }

    const existe = clientes.find(clientes =>clientes.cpf === cpf);

    if(existe){
        alert("CPF já cadastrado!");
        return;
    }

    const novoCliente = {
        id: Date.now(),
        cpf,
        nome,
        sobrenome,
        nascimento
    };
    clientes.push(novoCliente)
        atualizarLocalStorage();
        renderizarTabela();
        fecharModal();  
    
}

function renderizarTabela(){
    const tabela = document.getElementById("dados");
    tabela.innerHTML = "";

    clientes.forEach(cliente => {
        tabela.innerHTML += '
        <tr>
        <td>${cliente.cpf}</td>
        
        
        
        '

    })
}