module.exports = function (app) {

    var Pessoa = app.models.pessoa;

    var PessoaController = {

        index: function (req, res) {
            res.redirect('/app/#/pessoas');
        },

        create: function (req, res) {
            Pessoa.create(req.body, function(erro, pessoa) {
                if(erro){
                    res.redirect('/');
                }else{
                    //req.session.pessoa = pessoa;
                    console.log(pessoa);
                    res.send(pessoa);
                    //res.redirect('/app/#/pessoas/'+ pessoa._id);
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
            var _id = req.session.pessoa._id;
            Pessoa.findById(_id, function (erro, pessoa) {
                res.render('pessoas/edit', pessoa);
            });
        },

        update: function (req, res) {
            var _id = req.session.pessoa._id;
            Pessoa.findById(_id, function (erro, pessoa) {
                pessoa.save(function () {
                    res.redirect('/pessoas');
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