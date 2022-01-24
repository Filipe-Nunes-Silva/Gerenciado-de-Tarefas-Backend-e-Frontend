//require modulos
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

//require DB e models
const {connDb} = require('./db/connDb');
const {Tarefa} = require('./models/Tarefa');

//iniciando express
const app = express();

//configurando requisições POST
app.use(express.urlencoded({extended:true}));

//configurando handlebars
app.engine('handlebars',exphbs.engine());
app.set('view engine','handlebars');

//configurando arquivos estaticos
const public = path.join(__dirname,'public');
app.use(express.static(public));

//configurando rotas
const tarefasRotas = require('./routes/TarefasRotas');
app.use(tarefasRotas);

//iniciando servidor
const PORT = process.env.PORT;

connDb.sync()
.then(()=>{

    app.listen(PORT,(error)=>{
        if(error){
            console.log(`Erro ao iniciar servidor = ${error}`);
        } 
        else{
            console.log(`Servidor iniciado com sucesso! ${PORT}`);
        };
    });
})
.catch((error)=>{
    console.log(`Erro ao conectar no banco de dados = ${error}`);
});
