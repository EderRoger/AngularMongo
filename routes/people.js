module.exports = function(app) {

    var people = app.controllers.people;

    app.get('/people',  people.index);
    app.get('/people/:id', people.show);
    app.post('/people', people.create);
    app.get('/people/:id/edit',  people.edit);
    app.put('/people/:id',  people.update);
    app.delete('/people/:id', people.destroy);
};