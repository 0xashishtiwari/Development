const express  = require('express');
const mysql = require('mysql2');
const path = require('path');

const methodOverride = require('method-override');

const PORT = 8080;
const app = express();
app.use(express.static(path.join(__dirname , '/public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'delta_app',
    password : 'Ashish@27'
});

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , '/views'));


app.get('/' , (req  , res)=>{
    let q = 'SELECT COUNT(*) FROM user';

    try {

        connection.query(q,(err , result)=>{
            // console.log(result);
            // console.log(count);
            let count = result[0]['COUNT(*)'];
            res.render('home.ejs' , {count});
        })
    } catch (error) {
        console.log(error);
        res.send("Some error occured")
    }
})



app.get('/user' , (req , res)=>{
    let q = "SELECT id , username , email  FROM user";
    try {
        connection.query(q, (err , result)=>{
           
            let data = result;
            // console.log(data);
            res.render('user.ejs' ,  {data});
        });
    } catch (error) {
        console.log(error);
        res.send("Something went wrong")
    }
});

app.get('/user/:id/edit' , (req , res)=>{
    let {id} = req.params;
    console.log(id);
    let q = `SELECT * from user WHERE id = '${id}' `;

    try {
        connection.query(q , (err , result)=>{
        if(err) throw err;
        let user  = result[0];
        console.log(result[0]);
        res.render('edit.ejs' , {user});
    })
    } catch (error) {
    res.send("Some error occured");
    }
    
})

//update route

app.patch('/user/:id'  , (req ,res)=>{
    let {username , password} = req.body;
    console.log(username , password);
    let {id} = req.params;
    // console.log(id);
    let q = `SELECT * from user WHERE id = '${id}' `;

    try {
        connection.query(q , (err , result)=>{
        if(err) throw err;
        let user  = result[0];
        if(user['password']==password) {
            let updateQuery = `UPDATE user set username = '${username}' where id = '${id}'`;
            try {
               connection.query(updateQuery, (err , result)=>{
                if(err) throw err;
                    console.log(result);
                    res.redirect('/user');
               })
            } catch (error) {
                console.log(error);
            }
        }else{
            res.send("Wrong password");
        }   

       
    })
    } catch (error) {
    res.send("Some error occured");
    }
} );



app.listen(PORT , ()=>{
    console.log(`Server started at port ${PORT}`);
});



