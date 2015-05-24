"use strict";

// node libs
var url = require('url');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser')
var shortid = require('shortid');

// Express
var express = require('express');
var app = express();

// 處理 fetch 送來的 json 字串用這個就好
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// enable CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// catch all
app.use( '*', function(req, res, next ){
	console.log( '\n\n>>body: ', req.body );

	if( req.method == 'OPTIONS')
		return res.sendStatus(200);

	// 模擬錯誤情況
	// return res.status(404).send(req.body);

	// create 時幫物件建個 uid
	if(!req.body.uid) {
		req.body.uid = shortid.generate();
	}

	// 模擬成功情況
	return res.send(req.body);
})

// start the HTTP server
var httpServer = http.createServer(app);

//
httpServer.listen( 3000, function (err) {
    if (err) {
        console.warn('Can\'t start server. Error: ', err, err.stack);
        return;
    }
    console.log('server started port', 3000);
});
