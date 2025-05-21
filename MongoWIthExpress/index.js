//---------Basic chat App -------------------

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = 3000;
const Chat = require("./models/chat");
const methodOverride = require('method-override')

app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
  .then((res) => {
    console.log("connected to db succesfully");
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(express.static(path.join(__dirname , '/public')));
  app.use(express.urlencoded({extended:true}));
  app.use(express.json());
  // --------INDEX ROUTE ----------

  app.get('/chats' , async(req  , res)=>{
      console.log(req.method , req.url);
       let chats =  await Chat.find({});
      //  console.log(chats);
       res.render('index.ejs' , {chats});
  });


  //---------------NEW ROUTE---------

  app.get('/chats/new' , (req , res)=>{
     console.log(req.method , req.url);
    res.render('new.ejs');
  })


  //-------POST ROUTE----------
  app.post('/chats', (req , res)=>{
     console.log(req.method , req.url);
    let {from ,message , to  } = req.body;
    let newchat = new Chat({from : `${from}` , message : `${message}` , to : `${to}` ,created_at : new Date() });
    newchat.save().then(()=>{
        res.redirect('/chats');
    }).catch((err)=>{
        res.send('Error ocuured');
    })
   
    
  })

//-----------Edit Route------------
app.get('/chats/:id/edit' , async(req , res)=>{
   console.log(req.method , req.url);
    let {id} = req.params;
    let chat = await Chat.findById(id);
    console.log(chat);
    res.render('editForm.ejs' , {chat});
})


//-----------PUT ROUTE----------------

app.put('/chats/:id' , (req , res)=>{
   console.log(req.method , req.url);
    let {message} = req.body;
    let {id} = req.params;
    Chat.findByIdAndUpdate({_id : `${id}`} , {message : `${message}`} , {runValidators : true} ).then(()=>{
        res.redirect('/chats');
    }).catch((err)=>{
        console.log(err);
        res.send("ERROR OCCURED");
    })
})

//---------DELETE ROUTE------------
app.delete('/chats/:id' ,  (req , res)=>{
   console.log(req.method , req.url);
    let {id} = req.params;
    Chat.findByIdAndDelete(`${id}`).then(()=>{
        res.redirect('/chats');
    }).catch((err)=>{
        res.send(err);
    });
})


function asyncWrap(fn){
  return function(req , res, next){
    fn(req , res, next).catch(err)=>next(err);
  }
}

app.get("/", (req, res) => {
   console.log(req.method , req.url);
  res.send("Root is working");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App listening to port ${PORT}`);
});
