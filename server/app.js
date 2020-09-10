const express = require('express');
const session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const configKey = require('./config/config');
const app = express();
var cors = require('cors');
app.options('*', cors());
app.use(cors());
const server = require('http').Server(app);
const helmet = require('helmet')
const config = require('./config/config');
var mysql = require('mysql');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet());
app.use(express.static("public"));
let dbOptions = {
    host: config.mysql.dbhost,
    connectTimeout: 600000,
    user: config.mysql.dbuser,
    password: config.mysql.dbpass,
    database: config.mysql.dbname
}
var connection = mysql.createConnection(dbOptions);
// connection of database
connection.connect(function(error) {
    if (!!error) {
        console.log('Error', error);
    } else {
        console.log('MYSQL connected');
    }
});
app.use((req,res,next)=>{
    // res.header('Access-Control-Allow-Origin', '*');
    console.log("just out of validation",req.originalUrl);
    console.log('req:', req.body);
    next()
});

require('./routes/auth/index.js')(app);
// require('./database.js');
server.listen(config.webport, () => {
    console.log('[+] Listening @ ' + config.webport);
})


process.on('unhandledRejection', function(reason, promise) {
    console.log("reasi", JSON.stringify(reason,null,4),promise)
})
