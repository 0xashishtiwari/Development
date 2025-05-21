const express = require('express');
const app = express();
const ExpressError = require('./ExpressError');


//middleware -> response send

// app.use((req, res, next)=>{

//      console.log('hi im a middleware');
//     //  console.log(res);
//     res.send("middleware finished")
// } )

// app.use((req , res, next)=>{
//     req.time = Date.now();
//     console.log(req.method  , req.hostname);
//    return next();
// })


// app.get('/random' , (req, res , next)=>{
//     res.send('hi im for random');
// })

// app.get('/random' , (req ,res)=>{
//     res.send('this is a random page');
// })

const checkToken = ('/api' ,(req ,res , next)=>{
    let {token} = req.query;
    if(token == 'giveacess')
        next();
    throw new ExpressError(401 , "access denied " )

})

app.get('/api' , checkToken , (req ,res)=>{
    res.send("data");
})


app.get('/admin' , (req ,res)=>{
    throw new ExpressError(403 , "Access to admin is forbidden");
});


app.use((err , req, res, next)=>{
   let {status  , message} = err;
   res.status(status).send(message);
})


//--------404---------
app.use((req ,res)=>{
    res.status(404).send("Page not found");
})

app.listen(8080 , ()=>{
    console.log('Server is listening');
})