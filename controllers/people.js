module.exports = function (app) {

    var People = app.models.people;

    var PeopleController = {

        index: function (req, res) {
            People.find(function(erro, people){
               res.send(people);
            });
        },

        create: function (req, res) {
            People.create(req.body, function(erro, people) {
                if(erro){
                    res.redirect('/');
                }else{
                    res.send(people);
                }
            });
        },

        show: function (req, res) {
            var _id = req.params.id;
            People.findById(_id, function (erro, people) {
                res.send(people);
            });
        },

        edit: function (req, res) {
            var _id = req.params.id;
            People.findById(_id, function (erro, people) {
                res.send(people);
            });
        },

        update: function (req, res) {
            var _id = req.params.id;
            People.findById(_id, function (erro, people) {
                people.name = req.body.name;
                people.email = req.body.email;
                people.save(function () {
                    res.send('OK');
                });
            });
        },

        destroy: function (req, res) {
            var _id = req.params.id;
            People.findById(_id, function (erro, people) {
                people.remove();
                res.send("OK");
            });
        }
    }
    return PeopleController;
};