const {Tarefa} = require('../models/Tarefa');//model


class TarefaController {

    static async mostrarTarefas(req,res){
        try {

            const tarefas = await Tarefa.findAll({raw:true});
            res.render('tarefas/todasTarefas',{tarefas});
        } 
        catch(error){
            console.log(`Erro ao acessar banco de dados = ${error}`);
            const msg = `Não foi possivel acessar o bando de dados, consulte adm!`;
            const link = '/';
            res.render('erroGeral',{msg,link});
        };
    };

    static async mostrarTarefasConcluidas(req,res){
        try {

            const tarefas = await Tarefa.findAll({raw:true});
            res.render('tarefas/todasTarefasConcluidas',{tarefas});
        } 
        catch(error){
            console.log(`Erro ao acessar banco de dados = ${error}`);
            const msg = `Não foi possivel acessar o bando de dados, consulte adm!`;
            const link = '/';
            res.render('erroGeral',{msg,link});
        };
    };

    static criarTarefa(req,res){
        res.render('tarefas/criar');
    };

    static async salvarTarefa(req,res){
        const tarefa = {
            titulo:req.body.titulo,
            descricao:req.body.descricao,
            concluida:false
        };

        if(validaTarefas(tarefa.titulo,tarefa.descricao)){
            try {
                await Tarefa.create(tarefa);
                res.redirect('/');
            } 
            catch(error) {
                console.log(`Erro ao adicionar dados no banco = ${error}`);
                const msg = `Não foi possivel gravar no Db, consulte adm!`;
                const link = '/adicionar';
                res.render('erroGeral',{msg,link});
            };
        }
        else{
            const msg = `Titulo precisa ter de 3 a 50 caracteres, e tarefa precisa ter no minino 3!`;
            const link = '/adicionar';
            res.render('erroGeral',{msg,link});
        };
    };

    static confirmaDeletar(req,res){
        const tarefa = {
            id:req.body.id,
            titulo:req.body.titulo
        };
        const msg = 'Confirma apagar a tarefa?';
        const link = '/deletar/sim';
        const value = tarefa.id;
        res.render('confirmaGeral',{tarefa,msg,link,value});
    };

    static async delatarTarefa(req,res){
        const idReq = req.body.id;
        try {
            await Tarefa.destroy({where:{id:idReq}});
            res.redirect('/');
        }
        catch(error){
            const msg = 'Erro ao apagar tarefa no banco de dados,consulte adm!';
            const link = '/';
            res.render('erroGeral',{msg,link});
        };
    };

    static async editarTarefa(req,res){
        const idReq = req.params.id;

        try {
            const tarefaSelecionada = await Tarefa.findOne({raw:true,where:{id:idReq}});
            if(tarefaSelecionada !== null){
                res.render('tarefas/editar',{tarefaSelecionada});
            }
            else{
                const msg = 'Erro ao buscar tarefa! Tarefa Inexistente.';
                const link = '/';
                res.render('erroGeral',{msg,link});
            };
        }
        catch(error){
            const msg = 'Erro ao consultar no banco de dados! Consulte adm!';
            const link = '/';
            res.render('erroGeral',{msg,link});
        };
    };

    static async confirmaEditarTarefa(req,res){
        const idReq = req.body.id;
        const tarefaEditada = {
            titulo:req.body.titulo,
            descricao:req.body.descricao,
        };
        try {
            await Tarefa.update(tarefaEditada,{where:{id:idReq}});
            res.redirect('/');
        } 
        catch(error){
            const msg = 'Erro ao gravar no banco de dados! Consulte adm!';
            const link = '/';
            res.redirect('erroGeral',{msg,link});
        };
    };

    static async statusTarefa(req,res){
        const idReq = req.body.id;
        const linkReq = req.body.link;
        try {
            const status = {
                concluida:req.body.concluida === '0' ? true:false,
            };
            const tarefaUpdate = await Tarefa.update(status,{where:{id:idReq}});
            res.redirect(`${linkReq}`);
        }
        catch(error){
            const msg = 'Erro ao atualizar status da tarefa! contate o adm!';
            const link = `${linkReq}`;
            res.redirect('erroGeral',{msg,link});
        };
    };
};













module.exports = {
    TarefaController
};

//----------------------------------------Funções Internas--------------------------------------------------------

function validaTarefas(titulo,descricao){
    if(titulo === '' || titulo < 3 || titulo > 50){
        return false;
    };
    if(descricao === '' || descricao < 3){
        return false;
    };
    return true;
};