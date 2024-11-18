import express from 'express';

const  app = express(); //assim iniciamos o express
app.listen(3000, () => { //criar o servidor
    console.log('Server rodando na porta 3000');
});

app.get("/api", (req, res) => {

    res.status(200).send("Boas vindas a imersão!");
});
//para testar http://localhost:3000/api