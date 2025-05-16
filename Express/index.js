const express = require("express");

const app = express();
// console.dir(app);



let PORT = 8080;

app.listen(PORT, () => {
  console.log(`app listening o port ${PORT}`);
});


app.get('/' , (req , res)=>{
    res.send("you contacted root path");
});

app.get('/:username/:id' , (req , res)=>{
    let {username , id} = req.params;
    let htmlstr = `<h1>welcome to the account of @${username}</h1>`
    console.log(req.params);
    res.send(htmlstr);
})

app.get("/search" , (req , res)=>{
    let {q} = req.query;
    if(!q){
        res.send(`<h1>Nothing searched</h1>`)
    }
    console.log(req.query);
    res.send(`search result for ${q}`);
})