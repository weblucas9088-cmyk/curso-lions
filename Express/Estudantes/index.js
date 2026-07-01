import Express from "express";
import estudantes from "./dados.js";

const router = Express();
const port = 3000;

let proximoid = 0;

router.use(Express.json());

// Rota inicial
router.get("/", (req, res) => {
    res.status(200).send({ message: "Servidor funcionando" });
});

// Criar estudante
router.post("/estudantes/criar", (req, res) => {

    const { nome, matricula, curso, ano } = req.body;

    // Verificar se todos os dados foram enviados
    if (!nome || !matricula || !curso || !ano) {
        return res.status(400).send({
            message: "É obrigatório preencher todos os dados."
        });
    }

    // Gerar próximo ID
    if (estudantes.length === 0) {
        proximoid = 1;
    } else {
        proximoid = estudantes[estudantes.length - 1].id + 1;
    }

    // Criar estudante
    const novoEstudante = {
        id: proximoid,
        nome,
        matricula,
        curso,
        ano
    };

    estudantes.push(novoEstudante);

    res.status(201).send({
        message: "Estudante criado com sucesso!",
        estudante: novoEstudante
    });
});

// Listar estudantes
router.get("/estudantes", (req, res) => {
    res.status(200).send({
        message: "Dados dos estudantes",
        estudantes
    });
});

router.put("/estudantes/:id", (req, res) => {
    const { nome, matricula, curso, ano } = req.body;
       const id = parseInt(req.params.id);
    const index = estudantes.findIndex(estudante => estudante.id === parseInt(id));

    if (index === -1) {
        return res.status(404).send({
            error: "Estudante não encontrado."
        });
    }
    estudantes[index].nome = nome || estudantes[index].nome;
    estudantes[index].matricula = matricula || estudantes[index].matricula;
    estudantes[index].curso = curso || estudantes[index].curso;
    estudantes[index].ano = ano || estudantes[index].ano;

    res.status(200).send({
        message: "Estudante atualizado com sucesso!",
        estudantesAtualizado: estudantes[index]
    });  
});
router.delete("/estudantes/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = estudantes.findIndex(
        estudante => estudante.id === id
    );

    if (index === -1) {
        return res.status(404).send({
            error: "Estudante não encontrado."
        });
    }

    estudantes.splice(index, 1);

    return res.status(200).send({
        message: "Estudante deletado com sucesso!"
    });
});
    router.patch("/estudantes/:buscar", (req, res) => {
        const { nome, matricula, curso, ano } = req.body;
        const id = req.params.buscar;

     const index = estudantes.findIndex ((b) => b.id == id);

     if (index == -1) {
        return {error: " Estudante não encontrado! "} 
     }
     if (nome) {
        estudantes[index].nome = nome;
     }
     if (matricula) {
        estudantes[index].matricula = matricula;
     }
     if (curso) {
        estudantes[index].curso = curso;
     }
     if (ano) {
        estudantes[index].ano = ano;
     }
     return res.status(200).send({
        message: "Estudante atualizado com sucesso!",
        estudantesAtualizado: estudantes
     });
});
// Iniciar servidor
router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});