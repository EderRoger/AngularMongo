module.exports = function (app) {

    var Pessoa = app.models.pessoa;

    var PessoaController = {

        index: function (req, res) {
            res.redirect('/app/#/pessoas');
        },

        create: function (req, res) {
            var _id = req.session.pessoa._id;
            Pessoa.findById(_id, function (erro, pessoa) {
                pessoa.save(function () {
                    res.redirect('/app/#/pessoas');
                });
            });
        },

        show: function (req, res) {
            var _id = req.session.pessoa._id;
            Pessoa.findById(_id, function (erro, pessoa) {
                var pessoaID = req.params.id;
                res.render('pessoas/show', pessoa);
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
            var _id = req.session.pessoa._id;
            Pessoa.findById(_id, function (erro, pessoa) {
                var contatoID = req.params.id;
                pessoa.remove();
                pessoa.save(function () {
                    res.redirect('/pessoas');
                });
            });
        }
    }
    return PessoaController;
};