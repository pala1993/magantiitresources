const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());


var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'maganti_it_resources',
    debug: false,
    port: '3306'

});

pool.getConnection((err) => {

    if (!err)
        console.log('DB connection succeded.');

    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
})

const port = 3000
app.listen(port)

app.get('/', (req, res) => res.send('Hello World!'))


// Add headers
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);


    // Pass to next layer of middleware
    next();
});



const router = express.Router();

// get data 
app.post('/getjobs', function(req, res) {
    // console.log('hai..');
    pool.getConnection(function(err, con) {
        if (err) {
            res.setHeader('Content-Type', 'application/json');
            res.json({ "code": 100, "status": "Error in connection database" });
        }
        try {
            frontEndData = req.body;
            let sql_query = '';
            sql_query = `
                select * from new_careers_for_test
            `;

            con.query(sql_query, function(err, result, fields) {
                // console.log(result, 'result');
                if (err) {

                    res.json(err);
                } else {
                    res.json(result);
                    // console.log(res, 'res')
                }
            });
        } catch (err) {}
    });
});

// get data by id
app.post('/getJobByID', function(req, res) {
    console.log(req.body, "body");

    pool.getConnection(function(err, con) {
        if (err) {
            res.setHeader('Content-Type', 'application/json');
            res.json({ "code": 100, "status": "Error in connection database" });
        }
        try {
            let sql_query = "select * from new_careers_for_test where id= " + req.body.id + " ";
            con.query(sql_query, function(err, result) {
                console.log(result);
                // console.log(err);
                if (err) {

                    res.json(err);
                } else {
                    res.json(result);
                }
            });
        } catch (err) {}
    });
});

module.exports = router;