var livros = [
    {
        titulo: "A Culpa é das Estrelas",
        autor: "John Green",
        n: 1,
        genero: "Romance",
        protagonista: "Hazel Grace Lancaster"
    },
    {
        titulo: "Para Todos os Garotos que Já Amei",
        autor: "Jenny Han",
        n: 2,
        genero: "Romance",
        protagonista: "Lara Jean Covey"
    },
    {
        titulo: "Jogador Nº 1",
        autor: "Ernest Cline",
        n: 3,
        genero: "Ficção Científica",
        protagonista: "Wade Watts"
    }
];

var totalLivros = 3;

function mostrarLivros() {
    console.log("------- LISTA DE LIVROS -----");
    for (var i = 0; i < totalLivros; i++) {
        var livro = livros[i];
        console.log(livro.n + ". " + livro.titulo);
        console.log("   Autor: " + livro.autor);
        console.log("   Gênero: " + livro.genero);
        console.log("   Protagonista: " + livro.protagonista);
    
    }
}

function acharLivro(tituloProcurado) {
    for (var i = 0; i < totalLivros; i++) {
        if (livros[i].titulo === tituloProcurado) {
            return livros[i];
        }
    }
    console.log("Livro '" + tituloProcurado + "' não encontrado!");
    return null;
}

function tirarLivro(titulo) {
    for (var i = 0; i < totalLivros; i++) {
        if (livros[i].titulo === titulo) {
            livros.splice(i, 1);
            totalLivros--;
            console.log("Livro '" + titulo + "' foi removido!");
            return;
        }
    }
    console.log("Livro '" + titulo + "' não encontrado!");
}

function addLivro(titulo, autor, genero, protagonista) {
    var novoLivro = {
        titulo: titulo,
        autor: autor,
        n: totalLivros + 1,
        genero: genero,
        protagonista: protagonista
    };
    livros.push(novoLivro);
    totalLivros++;
    console.log("Livro '" + titulo + "' foi adicionado!");
}

function mudarAutor(titulo, novoAutor) {
    var livro = acharLivro(titulo);
    if (livro) {
    livro.autor = novoAutor;
    console.log("Autor do livro '" + titulo + "' mudou para '" + novoAutor + "'");
    }
}

mostrarLivros();

console.log("Procurando 'Jogador Nº 1':");
var livroAchado = acharLivro("Jogador Nº 1");
if (livroAchado) {
console.log(livroAchado);
}
console.log("");

console.log("Tirando 'Para Todos os Garotos que Já Amei':");
tirarLivro("Para Todos os Garotos que Já Amei");
mostrarLivros();

console.log("Adicionando novo livro:");
addLivro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "Infantil", "Principezinho");
mostrarLivros();

console.log("Mudando autor:");
mudarAutor("A Culpa é das Estrelas", "Juliano");
mostrarLivros();
