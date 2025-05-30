const mongoose = require('mongoose');

const {Schema} = mongoose;

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
    console.log('connection esatablished to database');
}
main();

const orderSchema = new Schema({
    item : String,
    price : Number,
});

const customerSchema = new Schema({
    name : String,
    orders : [
        {
            type  :Schema.Types.ObjectId , 
            ref : "Order"
        }
    ]
});

const Order = mongoose.model("Order" , orderSchema);
const Customer = mongoose.model("Customer" , customerSchema);

const findCustomer = async () => {
    let result = await Customer.find({}).populate('orders');

    console.log(result[0]) ;
}
findCustomer();


// const addOrders = async () => {
//     let res = await Order.insertMany([
//         {item : "samosa" , price : 12},
//         {item : "chips" , price : 10},
//         {item : "chocolate" , price : 40}

//     ]
//     );

//     console.log(res);
// }

// addOrders();

