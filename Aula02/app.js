import express from "express"; //importa o framework express
const app = express(); //cria a constr app que herda as funções do express
const port =  3000; // A porta que aplicação/API irá rodar;

app.use(express.json()); //mediador tratar as requisições par ao formato json

//Banco de dados em memória
let usuarios = [
    {   id:1,
        nome: "Amanda",
        email: "amanda@email.com",
        telefone: "(84) 9090-9090"
    },
    {   id:2,
        nome: "Joel",
        email: "joel@email.com",
        telefone: "(84) 9025-9090"
    },
]

//rota raiz com resposta do tipo texto
app.get("/", (req, res)=>{
    res.status(200), res.send("Hello World!!!");

});

app.get("/api/usuarios", (req, res)=>{
    res.status(200).json({"usuarios": usuarios});
});

app.get("api/usuarios/:id", (req, res)=>{
    const {id} = req.params;
    const usuario = usuarios.find((u) => u.id === parseInt(id));
    if(!usuario){
        res.status(404).json({"msg": "Usuario não encontrado."})
        return;
    }
    res.status(200).json({"msg": "Usuário encontrado.", usuario});
});

app.post("/api/usuarios", (req, res)=>{
    const {nome, email, telefone} = req.body;
    if(!nome || !email || !telefone){
        res.status(400).json({"msg": "Todos os campos são obrigatórios"});
        return;
    }
    const novoUsuario = {
        id:usuarios.length +1,
        nome:nome,
        email:email,
        telefone:telefone,
    }
    usuarios.push(novoUsuario);
    res.status(201).json({
        "msg": "Usuário criado com sucesso.",
        "usuario": novoUsuario
    });
})

app.put("/api/usuarios/:id", (req, res)=>{
    const {id} = req.params;
    const {nome, email, telefone} = req.body;
    if(!nome || !email || !telefone){
        res.status(400),json({"msg": "Todos os campos são obrigatórios"});
        return;
    }
    const index = usuarios.findIndex((u) => u.id === parseInt(id));
    if(index === -1){
        res.status(404).json({"msg": "Nenhum usuário encontrado com este ID."});
        return;
    }
    usuarios[index] = {
        id: id,
        nome: nome,
        email: email
    }
    res.status(200).json({
        "msg": "Usuário atualizado com sucesso.",
        "usuario": usuarios[index]
    })
});

app.delete("/api/usuarios/:id", (req, res)=>{
    const {id} = req.params;
    const usuario = usuarios.find((u) => u.id === parseInt(id));
    if(!usuario){
        res.status(404).json({"msg": "Usuario não encontrado."})
        return;
    }
    usuarios = usuarios.filter(u => u.id !== parseInt(id));
    res.status(200).json({"msg": "Usuário deletado comm sucesso."});
})



app.listen(port, ()=>{
    console.log(`Aplicação rodando em http://localhost:${port}`);
});