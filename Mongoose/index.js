// getting-started.js
const mongoose = require('mongoose');

main().then(()=>{
    
    console.log("Connected to database successfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
  name : String,
  email : String,
  age : Number
});

const User = mongoose.model("User" , userSchema);

// User.findOne({_id : "6826c23daf7cc3318fb4b4f0"}).then(res => console.log(res)).catch((err)=>{
//   console.log(err);
// })

User.find({age : {$gte : 47}}).then(res => console.log(res[0]._id.toString())).catch((err)=>{
  console.log(err);
})

// User.insertMany([
// {name : "tarun" , email : "tarun@gmail.com" , age :23},
// {name : "shobit" , email : "shobit@gmail.com" , age :23},
// {name : "gorgia" , email : "gorgia@gmail.com" , age :23},
// ]).then((data)=>{
//   console.log(data);
// })



// const user1 = new User({name : "bob" , email : "bob@gmail.com" , age :23});


// user1
// .save()
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })
  