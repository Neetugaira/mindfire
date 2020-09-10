var express = require('express');
var mysql = require('mysql');
var app = express();
var config = require('../config/config')


let connection = mysql.createPool({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  port: 3306,
  connectionLimit : 40,
  multipleStatements: true
});


// connection of database
connection.getConnection(function(error) {
  if(!!error) {
    // console.log('Error',error);
  } else {
    console.log('Db connection Successful!!');
  }
});


// Executes any query.
const query = (query) => {
  return new Promise(function (resolve, reject) {
    console.log("==================",query)
    connection.query(query, function (err, result) {
      console.log('err', err)
      if (err) {
        reject({ "success": false, "message": err });
      } else {
        resolve({ "success": true, "message": null, data: result });
      }
    });
  });
}


module.exports ={
  connection,
  query
}
