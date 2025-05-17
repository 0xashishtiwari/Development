//---------Basic chat App -------------------

const express = require('express');
const mongoose = require('mongoose');
const path  = require('path');
const app = express();
const PORT = 3000;

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , '/views'));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

main().then((res)=>{
    console.log('connected to db succesfully');
}).catch((err)=>{
    console.log(err);
});


app.get('/' , (req ,res)=>{
    res.send("Root is working");
})

app.listen(PORT , ()=>{
    console.log(`App listening to port ${PORT}`);
})