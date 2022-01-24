const {DataTypes} = require('sequelize');
const {connDb} = require('../db/connDb');

const Tarefa = connDb.define('Tarefa',{
    titulo:{
        type:DataTypes.STRING,
        require:true,
    },
    descricao:{
        type:DataTypes.STRING,
        require:true,
    },
    concluida:{
        type:DataTypes.BOOLEAN,
        require:true,
    },
});

module.exports = {
    Tarefa
};