// getting-started.js
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

//find method in mongoose

// User.findOne({_id : "6826c23daf7cc3318fb4b4f0"}).then(res => console.log(res)).catch((err)=>{
//   console.log(err);
// })

// User.find({age : {$gte : 47}}).then(res => console.log(res[0]._id.toString())).catch((err)=>{
//   console.log(err);
// })

// User.findById('6826c23daf7cc3318fb4b4f0').then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

//       ---------- update method in mongooose-------------

// User.updateOne({name : "adam"} , {age : 35}).then((res)=>{
//   console.log(res) ;
//   console.log("User updated sucessfully");
// }).catch((err)=>{
//   console.log(err);
// })

// User.updateMany({age : {$gt : 20}} , {age : 42}).then((res=>console.log(res))).catch(err =>console.log(err));

// ---------------find and update---------------

User.findOneAndUpdate({name : "adam"}, {age : 34} , {new : true}).then((res)=>{
  console.log(res);
})


User.findByIdAndUpdate('6826c66c29518108534844cf' , {age : 18} , {new : true} ).then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
});


//-------------- Delete method in mongoose -------------------

// User.deleteOne({name : "adam"}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

// User.deleteMany({age : {$gte : 42}}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })



// User.findByIdAndDelete('6826c66c29518108534844cf').then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });


User.findOneAndDelete({name : "bob"}).then((res)=>{console.log(res)}).catch((err)=>{
  console.log(err);
})


//----------- Insert method in mongoose --------------


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
