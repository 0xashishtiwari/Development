const { faker, da } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password : 'Ashish@27'
});


let getRandomUser = ()=>{
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
   faker.internet.password()

  ];
};


let data = [];
for(let i=0;i<100;++i){
  data.push(getRandomUser());
}

// console.log(data);

let q = "INSERT INTO user (id , username , email , password) VALUES ?" ;
// let users = [
//    ["123b" , "123_newuserb" ,"abc@gmail.comb" , "abcb"],
//  ["123c" , "123_newuserc" ,"abc@gmail.comc" , "abcc"],
// ];


try {
  connection.query(q , [data],  (err , result )=>{
  if(err)
    console.log(err);
  console.log(result);
  // console.log(result);

});
} catch (error) {
  console.log(error);
}


connection.end();


// console.log(getRandomUser());