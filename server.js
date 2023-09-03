const express = require('express');
const app = express();
const port = 3000;
require('./dbConnection');
let router = require('./routers/router');

const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);


app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', router);

app.get('/', function (req, res) {
    res.render('index.html');
});


io.on('connection',(socket)=>{
    console.log('something');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000)
});

http.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

