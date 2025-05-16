const express = require('express');
const app = express();
const path = require('path');
const port = 8080;


app.use(express.static(path.join(__dirname, '/public/css')));  //
app.use(express.static(path.join(__dirname, '/public/js')));  //


app.set('view engine' ,'ejs');   //it is directly requiring by express app
console.log(__dirname)
app.set('views',path.join(__dirname, "/views"));

app.get('/' , (req, res)=>{
    res.render('home.ejs');
})
app.get('/rolldice' , (req ,res)=>{
    let diceval = Math.floor(Math.random()*6+1);
    res.render('rolldice.ejs' ,{diceval});
})



app.get('/ig/:username' , (req, res)=>{
    let {username} = req.params;
    const instadata = require('./data.json');
    let data = instadata[username];
    // console.log(data);
    // console.log(instadata);
    if(data)
   res.render('instagram.ejs' , {data});
    else
   res.render('error.ejs');
})


app.listen(port , ()=>{
    console.log(`server started at port ${port}`);
})