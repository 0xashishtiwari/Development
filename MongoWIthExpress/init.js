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
  { from: "rahul", to: "neha", message: "I can help at 4 PM", created_at: new Date() },
  { from: "amit", to: "priya", message: "can I borrow your book?", created_at: new Date() },
  { from: "priya", to: "amit", message: "yes, remind me tomorrow", created_at: new Date() },
  { from: "neha", to: "priya", message: "what's the homework?", created_at: new Date() },
  { from: "priya", to: "neha", message: "check the class group", created_at: new Date() },
  { from: "anita", to: "rahul", message: "can we revise together?", created_at: new Date() },
  { from: "rahul", to: "anita", message: "sure, let's plan a time", created_at: new Date() },
  { from: "neha", to: "amit", message: "you missed the test", created_at: new Date() },
  { from: "amit", to: "neha", message: "yeah, was sick", created_at: new Date() },
  { from: "priya", to: "neha", message: "do you have notes?", created_at: new Date() },
  { from: "neha", to: "priya", message: "yes, I’ll send now", created_at: new Date() },
  { from: "anita", to: "amit", message: "what’s for lunch?", created_at: new Date() },
  { from: "amit", to: "anita", message: "not sure, let’s go see", created_at: new Date() },
  { from: "rahul", to: "priya", message: "project meeting today?", created_at: new Date() },
  { from: "priya", to: "rahul", message: "yes, at 3 PM", created_at: new Date() },
  { from: "neha", to: "anita", message: "I liked your presentation", created_at: new Date() },
  { from: "anita", to: "neha", message: "thank you!", created_at: new Date() },
  { from: "amit", to: "rahul", message: "let’s play after class", created_at: new Date() },
  { from: "rahul", to: "amit", message: "deal!", created_at: new Date() },
  { from: "priya", to: "neha", message: "can you explain topic 5?", created_at: new Date() },
  { from: "neha", to: "priya", message: "sure, meet me in library", created_at: new Date() },
  { from: "anita", to: "priya", message: "done with lab work?", created_at: new Date() },
  { from: "priya", to: "anita", message: "almost, just finishing", created_at: new Date() },
  { from: "rahul", to: "neha", message: "free this weekend?", created_at: new Date() },
  { from: "neha", to: "rahul", message: "not really, have a wedding", created_at: new Date() },
  { from: "amit", to: "anita", message: "group project status?", created_at: new Date() },
  { from: "anita", to: "amit", message: "we're halfway done", created_at: new Date() },
  { from: "priya", to: "amit", message: "don’t forget the form", created_at: new Date() },
  { from: "amit", to: "priya", message: "noted!", created_at: new Date() },
  { from: "neha", to: "anita", message: "we need to resubmit", created_at: new Date() },
  { from: "anita", to: "neha", message: "ok, I’ll edit it", created_at: new Date() },
  { from: "rahul", to: "amit", message: "want to code together?", created_at: new Date() },
  { from: "amit", to: "rahul", message: "sure, let’s do it", created_at: new Date() },
  { from: "priya", to: "anita", message: "bring your ID card", created_at: new Date() },
  { from: "anita", to: "priya", message: "will do", created_at: new Date() },
  { from: "neha", to: "priya", message: "send me your exam sheets", created_at: new Date() },
  { from: "priya", to: "neha", message: "sent already", created_at: new Date() },
  { from: "neha", to: "amit", message: "help me with login", created_at: new Date() },
  { from: "amit", to: "neha", message: "use your email ID", created_at: new Date() },
  { from: "neha", to: "priya", message: "when is the next test?", created_at: new Date() },
  { from: "priya", to: "neha", message: "next Monday", created_at: new Date() },
  { from: "anita", to: "rahul", message: "I missed class today", created_at: new Date() },
  { from: "rahul", to: "anita", message: "I'll share the notes", created_at: new Date() },
  { from: "amit", to: "priya", message: "bring your charger?", created_at: new Date() },
  { from: "priya", to: "amit", message: "yes, I have it", created_at: new Date() },
  { from: "neha", to: "anita", message: "submit the form today", created_at: new Date() },
  { from: "anita", to: "neha", message: "okay, on it", created_at: new Date() },
  { from: "rahul", to: "neha", message: "join the Zoom link", created_at: new Date() },
  { from: "neha", to: "rahul", message: "joining now", created_at: new Date() },
  { from: "amit", to: "anita", message: "which topic is tough?", created_at: new Date() },
  { from: "anita", to: "amit", message: "chapter 6, I think", created_at: new Date() },
  { from: "priya", to: "rahul", message: "print my report?", created_at: new Date() },
  { from: "rahul", to: "priya", message: "sure, sending it to the printer", created_at: new Date() },
  { from: "neha", to: "amit", message: "can I copy the code?", created_at: new Date() },
  { from: "amit", to: "neha", message: "yes, here it is", created_at: new Date() },
  { from: "anita", to: "priya", message: "need your feedback", created_at: new Date() },
  { from: "priya", to: "anita", message: "give me 10 mins", created_at: new Date() },
  { from: "rahul", to: "amit", message: "where's the link?", created_at: new Date() },
  { from: "amit", to: "rahul", message: "check the email", created_at: new Date() },
  { from: "neha", to: "priya", message: "let's revise tonight", created_at: new Date() },
  { from: "priya", to: "neha", message: "cool, what time?", created_at: new Date() },
  { from: "anita", to: "neha", message: "don’t forget lab coat", created_at: new Date() },
  { from: "neha", to: "anita", message: "thanks for reminding", created_at: new Date() },
  { from: "rahul", to: "priya", message: "good luck for the viva!", created_at: new Date() },
  { from: "priya", to: "rahul", message: "thanks, fingers crossed", created_at: new Date() },
  { from: "amit", to: "neha", message: "notes on GitHub?", created_at: new Date() },
  { from: "neha", to: "amit", message: "yes, check my repo", created_at: new Date() },
  { from: "priya", to: "anita", message: "which classroom?", created_at: new Date() },
  { from: "anita", to: "priya", message: "room 104", created_at: new Date() },
  { from: "neha", to: "rahul", message: "need a ride?", created_at: new Date() },
  { from: "rahul", to: "neha", message: "yes please!", created_at: new Date() },
  { from: "amit", to: "priya", message: "forgot my pen", created_at: new Date() },
  { from: "priya", to: "amit", message: "I have an extra", created_at: new Date() },
  { from: "anita", to: "neha", message: "presentation time changed", created_at: new Date() },
  { from: "neha", to: "anita", message: "noted, thanks!", created_at: new Date() },
  { from: "rahul", to: "amit", message: "let’s meet at 2", created_at: new Date() },
  { from: "amit", to: "rahul", message: "done, see you", created_at: new Date() },
  { from: "priya", to: "neha", message: "sent the PDF", created_at: new Date() },
  { from: "neha", to: "priya", message: "got it, looks good", created_at: new Date() },
  { from: "anita", to: "rahul", message: "remind me to bring book", created_at: new Date() },
  { from: "rahul", to: "anita", message: "sure, setting a reminder", created_at: new Date() },
  { from: "amit", to: "anita", message: "lab partner today?", created_at: new Date() },
  { from: "anita", to: "amit", message: "yes, we’re together", created_at: new Date() },
  { from: "neha", to: "amit", message: "join me in the library", created_at: new Date() },
  { from: "amit", to: "neha", message: "coming in 10 mins", created_at: new Date() },
  { from: "priya", to: "rahul", message: "did you check results?", created_at: new Date() },
  { from: "rahul", to: "priya", message: "yes, I passed!", created_at: new Date() },
  { from: "anita", to: "priya", message: "let’s practice speaking", created_at: new Date() },
  { from: "priya", to: "anita", message: "yes, 8 PM?", created_at: new Date() },
  { from: "neha", to: "priya", message: "send me your exam sheets", created_at: new Date() }
];


Chat.insertMany(allChats).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


// Chat.deleteMany({}).then((res)=>{
//     console.log(res);
// })