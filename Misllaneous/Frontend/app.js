
// function personMaker(name , age){
//         const person = {
//             name : name,
//             age : age,
//             talk(){
//                 console.log(`Hi my name is ${this.name}`)
//             }
//         };
//         return person;
// }



    //constructors -- doesn't return anything & start with capital

// function Person(name , age){
//        this.name = name;
//        this.age = age;
// }
// Person.prototype.talk = function(){
//     console.log(`hello ${this.name}`);
// }

//     class Person{
//         constructor(name , age){
//             this.name = name;
//             this.age = age;
//         }

//         talk(){
//             console.log(`Hi , my name is ${this.name}`);
//         }
//     }

// let p1 = new Person("ashish" , 21);
// let p2 = new Person ("eve" , 33);

class Person{
    constructor(name, age ){
        console.log("Person class constructor")
        this.name = name;
        
        this.age = age;
    }
    talk(){
        console.log(`hi , Im ${this.name}`)
    }
}


class Student extends Person{
    constructor(name, age , marks){
        console.log("Student class constructor")
        super(name , age);  // parent class constructor is being called
        
        this.marks = marks;
      
    }
    talk(){
        console.log(`hi , Im ${this.name}`)
    }
}

let stu1 = new Student("ashish", 25, 98);

class Teacher extends Person{
    constructor(name, age , marks){
        this.name = name;
        this.marks = marks;
        this.age = age;
    }
    talk(){
        console.log(`hi , Im ${this.name}`)
    }
}
