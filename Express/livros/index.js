import Express from "express";
import livros from "./livros.js";

const router = Express();
const port = 3000;

let id = 1;

router.use(Express.json());

router.get ("/", (req, res) => {
    res.status(200).send({ message: "Servidor funcionando"});
});

router.post("livros/criar", (req, res) => {

    const {titulo, autor, ano, genero} = req.body;

    if (!titulo || !autor || !ano || !genero) {
        return res.status(400).send({
            message: "É obrigatório preencher todos os dados."
        }); 
    }

    if (livros.length == 0) {
        id = 1;
    }else {
        id = livros[livros.length - 1]. id + 1;
    }

    const novoLivro = {
        titulo,
        autor,
        ano,
        genero
    };

    livros.push(novoLivro);

    res.status(201).send ({
        message: "Livro criado com sucesso!",
        livro: novoLivro
    });
});

router.get("/livros", (req, res) => {
    res.status(200).send ({
        message: "Dados dos livros",
        livros
    });
}); 

router.put("livros/:id", (req, res) =>{
    const {titulo, autor, ano, genero} = req.body;
    const id = parseInt(req.params.id);
    const index = livros.findIndex(livro => livro.id == parseInt(id));

    if (index == -1) {
        return res.status(404).send ({
            error: "Livro não encontrado."
        });
    }

    livros[index].titulo = titulo || livros[index].titulo;
    livros[index].autor = autor || livros[index].autor;
    livros[index].genero = genero || livros[index].genero;
    livros[index].ano = ano || livros[index].ano;

    res.status(200).send ({
        message: "Livro atualizado com sucesso!",
        livrosAtualizado: livros[index]
    });
});

router.delete("livros/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = livros.findIndex(
        livro => livro.id == id
    );

    if (index == -1) {
        return res.status(404).send ({
            error: "Livro não encontrado."
        })
    }

    livros.splice(index, 1);

    return res.status(200).send ({
        message: "Livro deletado com sucesso!"
    });
});

router.patch("livros/:buscar", (req, res) => {
    const {titulo, autor, ano, genero} = req.body;
    const id = req.params.buscar;

    const index = livros.findIndex(
        (b) => b.id == id
    );

    if (index == -1) {
        return {error: " Estudante não encontrado! "} 
     }
     if (titulo) {
        livros[index].titulo = titulo;
     }
     if (autor) {
        livros[index].autor = autor;
     }
     if (genero) {
        livros[index].genero = genero;
     }
     if (ano) {
        livros[index].ano = ano;
     }
     return res.status(200).send ({
        message: "Livro atualizado com sucesso!",
        livrosAtualizado: livros
     });
});
router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});