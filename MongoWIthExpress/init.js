const mongoose = require("mongoose");
const Chat = require("./models/chat");

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

  const allChats = [
  { from: "neha", to: "priya", message: "send me your exam sheets", created_at: new Date() },
  { from: "priya", to: "neha", message: "sure, sending now", created_at: new Date() },
  { from: "neha", to: "anita", message: "did you finish the assignment?", created_at: new Date() },
  { from: "anita", to: "neha", message: "almost done, will send soon", created_at: new Date() },
  { from: "rahul", to: "priya", message: "are you joining the call?", created_at: new Date() },
  { from: "priya", to: "rahul", message: "joining in 5 minutes", created_at: new Date() },
  { from: "neha", to: "amit", message: "check your inbox", created_at: new Date() },
  { from: "amit", to: "neha", message: "got it, thanks!", created_at: new Date() },
  { from: "priya", to: "anita", message: "can we meet after class?", created_at: new Date() },
  { from: "anita", to: "priya", message: "sure, see you then", created_at: new Date() },
  { from: "neha", to: "rahul", message: "need help with math", created_at: new Date() },
 
];


Chat.insertMany(allChats).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


// Chat.deleteMany({}).then((res)=>{
//     console.log(res);
// })