/* Remember, there is not window object.
 * only globals & process
 * Asynchronous = CPS, continuation passing style 
     - invokes a callback
Modules are not auto-injected; you have to bring them in and name them
Modules don't share scope
Modules are only loaded once

The EventEmitter pattern allows implementors to emit 
an event to which the consumers can subscribe 
if they are interested

Streams = readable, writable, transform, duplex, classic

Error first callbacks - the first argument for the callback function 
should be the error object.
If the error argument is null, then the operation was successful.
If the error argument is set, then an error occured and you need to handle it.

 A "callback" is any function that is called by another function which takes 
 the first function as a parameter. A lot of the time, a "callback" is a function 
 that is called when something happens. That something can be called an "event" 
 in programmer-speak.

 We have to be careful when dealing with event emitters (that means streams too), 
 because if there's an unhandled error event it will crash our application.
 
Error event handler: 
 
emitter.on('error', function(err) {
  console.error('something went wrong with the ee:' + err.message);
});

verror - wrap errors with more data

node inspector - debug node applications
 
*/
console.log("Dan 2");

var emptygif = require('emptygif');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/tpx.gif', function(req, res, next) {
  io.emit('visit', {
    ip: req.ip,
    ua: req.headers['user-agent']
  });

  emptygif.sendEmptyGif(req, res, {
    'Content-Type': 'image/gif',
    'Content-Length': emptygif.emptyGifBufferLength,
    'Cache-Control': 'public, max-age=0' // or specify expiry to make sure it will call everytime
  });
});

app.use(express.static(__dirname + '\\dan\\public'));
console.log(__dirname + '\\dan\\public');
//app.use(express.static('public'));
//app.use('/public', express.static('public'));

server.listen(1337);