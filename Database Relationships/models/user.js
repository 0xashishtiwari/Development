const mongoose = require('mongoose');
const {Schema} = mongoose;
main().then(()=>{
    console.log('connection sucessfull');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const userSchema = new Schema({
    username : {
        type: String,

    },
    addresses : [
        {   
            _id : false,  // this is used because mongo create object id for every document
            location : String,
            city : String
        },
    ]
});


const User = mongoose.model("User" , userSchema);  // schema ki class bana rahe h 


 const addUsers = async () => {
    let user1 = new User({
        username : "sherlockhomes",
        addresses :   [
            {   
                
                location : "burhanpur",
                city : "bhopal"
            },
            {
                location : "mp nagar",
                city : "bhopal"
            }
        ]
    });
    let res =await user1.save();
    console.log(res);
};

addUsers();
