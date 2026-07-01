import Express from "express";
import filmes from "./filmes.js";

const router = Express();
const port = 3000;

let id = 1;

router.use(Express.json());
    
router.post ("/filmes", (req, res) => {
    const { titulo, diretor, ano, genero } = req.body;
        if (!titulo || !diretor || !ano || !genero) {
            return res.status(400).send
            ({ message: "Todos os campos são obrigatórios." });
        }
        if(filmes.length == 0){
            id = 1;
        } else{
            id = filmes[filmes.length - 1].id + 1;
        }
    let novoFilme = {id, titulo, diretor, ano, genero }
    filmes.push(novoFilme);
    res.status(201).json(filmes);
});

router.get("/filmes/buscar", (req, res) => {
    const {diretor, titulo, genero, ano} = req.query;
     if (diretor) {
        const resultadoBusca = filmes.filter(filmes => filmes.diretor.toLowerCase().includes(diretor.toLowerCase()));
        return res.status(200).send({filmesDoDiretor: resultadoBusca});
     }
    if (titulo) {
        const resultadoBusca = filmes.filter(filmes => filmes.titulo.toLowerCase().includes(titulo.toLowerCase()));
        return res.status(200).send({filmesComTitulo: resultadoBusca});
    }
    if (genero) {
        const resultadoBusca = filmes.filter(filmes => filmes.genero.toLowerCase().includes(genero.toLowerCase()));
        return res.status(200).send({filmesDoGenero: resultadoBusca});
    }
    if (ano) {
        const resultadoBusca = filmes.filter(filmes => filmes.ano == parseInt(ano));
        return res.status(200).send({filmesDoAno: resultadoBusca});
     }
     
    
});

router.get("/filmes", (req, res) => {
    res.status(200).json({
        message: "Lista de filmes",
        filmes: filmes
    });
    //(200) = ok (201) = criado (400) = resposta errada (404) = não encontrado
});

router.put("/filmes/:id", (req, res) => {
    const { titulo, diretor, ano, genero} = req.body;
    const id = parseInt(req.params.id);
 const index = filmes.findIndex(filmes => filmes.id === parseInt(id));

 if (index === -1) {
     return res.status(404).send({
         error: "filme não encontrado."
     });
 }
 filmes[index].titulo = titulo|| filmes[index].titulo;
 filmes[index].diretor = diretor|| filmes[index].diretor;
 filmes[index].genero = genero || filmes[index].genero;
 filmes[index].ano = ano || filmes[index].ano;

 res.status(200).send({
     message: "Filme atualizado com sucesso!",
     filmeAtualizado: filmes[index]
    
 });
});

router.delete("/filmes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = filmes.findIndex(filmes => filmes.id == parseInt(id));

    if (index == -1) {
        return res.status(404).send({
            error: "filme não encontrado."
        });
    }
    filmes.splice(index, 1);
    res.status(200).send({
        message: "filme deletado com sucesso!"
    });
});

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});