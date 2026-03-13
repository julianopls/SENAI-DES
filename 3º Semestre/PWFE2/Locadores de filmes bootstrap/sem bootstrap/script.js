let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

document.addEventListener("DOMContentLoaded", renderizarTabela);

function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
    limparCampos();
}

function limparCampos() {
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = ""; 
    document.getElementById("genero").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("capa").value = ""; 
}

function atualizarLocalStorage() {
    localStorage.setItem("filmes", JSON.stringify(filmes));
}

function salvarFilme() {
    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const genero = document.getElementById("genero").value.trim();
    const ano = document.getElementById("ano").value;
    const capa = document.getElementById("capa").value.trim();

    if (!titulo || !autor) {
        alert("TÍTULO e AUTOR são obrigatórios!");
        return;
    }

    const novoFilme = {
        id: Date.now(),
        titulo,
        autor,
        genero,
        ano,
        capa
    };

    filmes.push(novoFilme);
    atualizarLocalStorage();
    renderizarTabela();
    fecharModal();
}

function renderizarTabela() {
    const tabela = document.getElementById("dados");
    tabela.innerHTML = "";

    filmes.forEach((filme, index) => {
        tabela.innerHTML += `
            <tr>
                <td><img src="${filme.capa}" class="img-capa" style="width: 50px; border-radius: 4px;"></td>
                <td>${filme.titulo}</td>
                <td>${filme.autor}</td>
                <td>${filme.genero}</td>
                <td>${filme.ano}</td>
                <td>
                    <button onclick="removerFilme(${index})styl" e="background-color: #dc3545;">Excluir</button>
                </td>
            </tr>
        `;
    });
}
function removerFilme(index) {
    if (confirm("Tem certeza que deseja excluir este filme?")) {
        filmes.splice(index, 1);
        atualizarLocalStorage();
        renderizarTabela();
    }
}