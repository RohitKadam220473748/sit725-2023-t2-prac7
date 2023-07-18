const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req,res)=>{
    res.render('index.html');
});

app.get('/addingTwoNumberstomakecalculation',(req,res)=>{

    let Code = 200;
    let Messsage = 'successful';
    let number1 = req.query.number1; 
    let number2 = req.query.number2; 
    let result = parseInt(number1) + parseInt(number2); 

    res.json({
        Status: Messsage, 
        code: Code, 
        data: result
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
