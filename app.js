var express = require('express');
var app = express();
var request = require('request');
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb://admin:pYNitFIxsCfnzJu8aejih1vB@mongodb.back4app.com:27017/8c1e6d2b08884606bdc0aaac0bc4e73f?ssl=true";
var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/boletoWebhook', function (req, res) {
    console.log(req.body);
    request.post({
        url: 'https://lide.back4app.io/functions/boletoPagoWebhook',
        json: req.body,
        headers: {
            'X-Parse-Application-Id': 'xXJL5MWBPATUGL28PN3T8e5LcIotlGk0O731bUKh',
            'X-Parse-REST-API-Key': 'RWNgaP8B29gGknHEYKaz85GtQv8Zw95YYVrOrtTy',
            "Content-Type": 'application/json'
        }
    }, (error, response, body) => {
        if(error)console.log(error);
        console.log(body);
       
    });

});

app.listen(3000, function () {
    console.log('app ouvindo na porta 3000');
});

// MongoClient.connect(uri, (err, client) => {
//     if (err) return console.log(err);

//     db = client.db('8c1e6d2b08884606bdc0aaac0bc4e73f');

//     var cols = db.listCollections().toArray().then((results) => { console.log(results) });
//     console.log(cols);


//     app.listen(3000, function () {
//         console.log('Example app listening on port 3000!');
//     });

// })

// app.get('/teste', function (req, res) {
//     db.collection('FinanceiroPendencia').find().toArray((err, results) => {
//         if (err) console.log(err);
//         else console.log(results);
//     })
// });


// Isso aqui buga as tabelas kk
// app.get('/teste2', function (req, res) {
//     db.collection('FinanceiroPendencia').save({
//         pendenciaBloqueante: false,
//         valor: 2500,
//         descricao: 'Teste',
//         descricaoEnum: 10,
//     }, (err, results) => {
//         if (err) console.log(err);
//         else console.log(results);
//     })
// });



//8c1e6d2b08884606bdc0aaac0bc4e73f