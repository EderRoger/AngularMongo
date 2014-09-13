module.exports = function (app) {

    var Pessoa = app.models.pessoa;

    var PessoaController = {

        index: function (req, res) {
            Pessoa.find(function(erro, pessoas){
               res.send(pessoas);
            });
        },

        create: function (req, res) {
            Pessoa.create(req.body, function(erro, pessoa) {
                if(erro){
                    res.redirect('/');
                }else{
                    res.send(pessoa);
                }
            });
        },

        show: function (req, res) {
            var _id = req.params.id;
            Pessoa.findById(_id, function (erro, pessoa) {
                res.send(pessoa);
            });
        },

        edit: function (req, res) {
            var _id = req.params.id;
            Pessoa.findById(_id, function (erro, pessoa) {
                res.send(pessoa);
            });
        },

        update: function (req, res) {
            var _id = req.params.id;
            Pessoa.findById(_id, function (erro, pessoa) {
                pessoa.nome = req.body.nome;
                pessoa.email = req.body.email;
                pessoa.save(function () {
                    res.send('OK');
                });
            });
        },

        destroy: function (req, res) {
            var _id = req.params.id;
            Pessoa.findById(_id, function (erro, pessoa) {
                pessoa.remove();
                res.send("OK");
            });
        }
    }
    return PessoaController;
};