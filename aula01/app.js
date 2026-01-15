import express from "express"; //importa o framework express
const app = express(); //cria a const app que herda as funções do express
const port = 3000; // A porta que aplicação/API ira rodar;

//rota raiz com resposta do tipo texto
app.get("/",(req, res) =>{

    res.send("Hello World!!!");

})
//nova rota com resposta do tipo texto
app.get("/teste",(req, res) =>{

    res.send("Hello World meu fi!!!");

})
// Exemplo de rota com resposta do tipo json
app.get('/usuario',(req, res) =>{
    res.json({
        nome: "João",
        idade: 25,
        cidade: "São Paulo"
    })
})

// Exemplo2 de rota com resposta do tipo json
app.get('/usuario',(req, res) =>{
    res.json({
        nome: "Itamar Silva",
        nascimento: 24/11/1965,
        idade: 60,
        cidade: "Maaceió - AL"
    })
})

app.listen(port, ()=>{
    console.log(`Aplicação rodando em http://localhost:${port}`);
})



