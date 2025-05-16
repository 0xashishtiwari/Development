// getting-started.js
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}






const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    } ,
    author : {
        type : String
    },
    price : {
        type : Number,
        min : [1 , "Price is too low for amazon selling"]
    },
    discount : {
      type : Number,
      default : 0
    },
    category :{
      type : String,
      enum: {
        values :  ["fiction"  , "non-fiction"],
        message : "Values not supported"
      },
    },
    genre :  [String]
    
})

const book = mongoose.model("book" , bookSchema);

// let book1 = new book ({ title : "Marvel comics 2"  , price : "250" , category : "jihadi" , genre : ['comic' , 'fictions']});





// book1.save().then((res)=>{
  
//   console.log(res , `saved book to database `);
// }).catch((err)=>{
//   console.log(err.message);
//   console.log("Error occuered");
// })


book.findByIdAndUpdate('68274453e3ee9b16df0a7ced' , {price : -500} , {runValidators : true}).then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err.errors.price.properties.message);
})