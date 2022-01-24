//Config DotEnv
require('dotenv').config();
const db = process.env.DB;
const user = process.env.US;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const typeDb = process.env.TYPEDB;

const {Sequelize} = require('sequelize');
const connDb = new Sequelize (db,user,password,{
    host:host,
    dialect:typeDb
});

try {
    connDb.authenticate();
    console.log(`Conectado ao banco de dados!`);    
}
catch(error) {
    console.log(`Erro ao conectar no banco de dados = ${error}`);
};

module.exports = {
    connDb
};