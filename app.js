var express = require('express')
    , load = require('express-load')
    , cookieParser = require('cookie-parser')
    , bodyParser = require('body-parser')
    , expressSession = require('express-session')
    , compression = require('compression')
    , methodOverride = require('method-override')
    , error = require('./middlewares/error')
    , cfg = require('./config.json')
    , app = express()
    , server = require('http').Server(app)
    , cookie = cookieParser(cfg.SECRET)
    ;

app.set('views', __dirname + '/app/views/');
app.set('view engine', 'ejs');
app.use(cookie);
app.use(expressSession({
    secret: cfg.SECRET,
    name: cfg.KEY,
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// app.use(compression());
//app.use(express.static(__dirname + '/public', cfg.MAX_AGE));
app.use(express.static(__dirname, '/app', cfg.MAX_AGE));

load('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.use(error.notFound);
app.use(error.serverError);

server.listen(3000, function(){
    console.log("Rodando Angular_Mongo.");
});

module.exports = app;


//simple conf
/*var express = require('express');
var engines = require('consolidate');
var app = express(),
    http = require('http'),
    server = http.createServer(app);

app.engine('html', engines.mustache);
app.use(express.static(__dirname, '/app'));
app.set('views', __dirname + '/app/views/');
app.set('view engine', 'html');

//routes
app.get('/pessoas', function(req, res){
    res.redirect('/app/#/pessoas');
});

server.listen(3000, function(){
    console.log("Rodando Angular_Mongo.");
});*/