module.exports = function(app) {

    var pessoas = app.controllers.pessoas;

    app.get('/pessoas',  pessoas.index);
    app.get('/pessoa/:id', pessoas.show);
    app.post('/pessoa', pessoas.create);
    app.get('/pessoa/:id/editar',  pessoas.edit);
    app.put('/pessoa/:id',  pessoas.update);
    app.delete('/pessoa/:id', pessoas.destroy);
};