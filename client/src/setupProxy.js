const proxy = require('http-proxy-middleware')
const serverPort = require('./config/config').webport
const serverHost = require('./config/config').webhost
console.log("serverPort",serverPort)
const filter = (pathname)=>{
	return !(pathname.startsWith('/dashboard') || pathname.startsWith('/')  || pathname.startsWith('/static') || pathname.match('hot-update.js'))
}

module.exports = function (app){
	// app.use(proxy(filter, {target: 'http://localhost:'+serverPort}));
	app.use(proxy(filter, {target: serverHost+serverPort}));
}
