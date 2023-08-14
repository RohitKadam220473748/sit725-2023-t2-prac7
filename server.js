const express = require('express');
const app = express();
const port = 3000;
require('./dbConnection');
let router = require('./routers/router');
app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', router);

app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

