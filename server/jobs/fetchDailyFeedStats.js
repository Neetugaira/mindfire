// @ts-check
'use strict'

// const mongoose = require('mongoose');
const configKey = require('../config/config');
const rssFeed = require('../routes/rss/rss.controller.js')
var mysql = require('mysql');

let connection = mysql.createPool({
  host: configKey.mysql.host,
  user: configKey.mysql.user,
  password: configKey.mysql.password,
  database: configKey.mysql.database,
  port: 3306,
  connectionLimit : 40,
  multipleStatements: true
});



connection.getConnection(function(error) {
  if(!!error) {
    console.log('Error',error);
  } else {
    console.log('Db connection Successful!!');
  }
});

connection.Promise = Promise


let FetchInstanceStats = function () {
  let _self = this

  _self.execute = async (cb) => {
    console.log(`Running job to fetch daily feed details ${new Date()}`)
    try {
      await rssFeed.getRssFeed()
      return cb()
    } catch (error) {
      console.log('Catch error in execute method : ', error)
      return cb(error, null)
    }
  }

  return {
    startCron: _self.execute
  }
}

module.exports = FetchInstanceStats
