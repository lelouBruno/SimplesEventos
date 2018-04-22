var express = require('express');
var Posta = require("../models/post");
var rota = express.Router();



rota.route('/postagem')  //criando rota de acesso postagem
  


.get(function(req, res){  //consultando todas as postagem de eventos
    Posta.find(function(erro, Posta){
        if(erro){
            res.send('erro ao tentar consultar todas as postagens' + error);
        }
        else{
            res.json({Posta});
        }
    });
})   

 


   .post(function(req, res) { //criando novo postagem
    var meu = new Posta();

   
    meu.titulo = req.body.titulo,
    meu.local  = req.body.local,
    meu.descricao = req.body.descricao,


    meu.save(function(error) {
        if(error){
            res.send('Erro ao tentar salvar o postagem....: ' + error);
        }
        else{
            res.json({ message: 'postagem salva com Sucesso!' });
        }
        
    });
})



rota.route('/postagem/:Posta_id') //consultando postagem por id(unica postagem)

.get(function(req, res){

    Posta.findById(req.params.Posta_id,function(erro, Posta){
        if(erro){
        res.send('postagem não encontrado ' + erro);
        }
        else{
            res.json(Posta);
        }
    });
}) 



     

    .put(function(req,res){ //editando produto
        Posta.findById(req.params.Posta_id, function(erro, Posta){
            if(erro){
                res.send("erro ao tentar achar postagem " + erro);
            }

           Posta.titulo = req.body.titulo,
           Posta.local  = req.body.local,
           Posta.descricao = req.body.descricao,

            Posta.save(function(erro){
                if(erro){
                    res.send("erro ao tentar editar postagem");
                }
                res.send('postagem alterada com sucesso ' + Posta);
                
            });
        });
    }) 

  /*  .put(function(req, res) {

        //Primeiro: para atualizarmos, precisamos primeiro achar 'Id' do 'Produto':
        Posta.findById(req.params.Posta_id, function(error, Posta) {
            if (error){ 
                res.send("Id do Produto não encontrado....: " + error);
            }
                //Segundo: 
                Posta.nome = req.body.nome;
                Posta.local = req.body.local;
                Posta.descricao = req.body.descricao;

                //Terceiro: Agora que já atualizamos os dados, vamos salvar as propriedades:
                Posta.save(function(error) {
                    if(error)
                        res.send('Erro ao atualizar o produto....: ' + error);

                    res.json({ message: 'Produto atualizado com sucesso!' });
                });
            });
        }) //fim do put */




    .delete(function(req,res){ // apagando postagem por id
        Posta.findOneAndRemove({_id: req.params.Posta_id}, function(erro){
            if(erro){
            res.send("erro ao excluir postagem " + erro);
        }
            else{
                res.json("postagem excluido com sucesso");
            }
        });


    })



module.exports = rota;