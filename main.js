// console.log("Hello World");

// console.error("This is the error");
// console.warn("This is warning"); 


// VARIABLES
// let ra const ko herum aba 
// let score = 10;
// if (score == 10){
//     console.log("Your score is not sufficient")
// };
// console.log(score);
// const name = "shiv";
// const name = "dipesh";

// console.log(name); //this give an error


// DATA TYPES
// data types: Sting, Numbers, Boolean, Undefined, Null, Symbol
// const name = "SHIV";
// const age =20;
// const isCool = true;
// const rating = 4.6;
// const ex = null;
// const crushes = undefined;
// let breakups;
// // Simple Concatenation using + Operator
// console.log ("My name is " + name + " I am "+ age + "Years Old");
// // Templated String
// console.log (`My name is ${name} and I am ${age} years old`);


// STRING
// some String Properties and funcitons
// .length, .toUpperCase(), toLowerCase(), split(), subString()
// const name = "Shiv Koirala";
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.substring(0,4));
// console.log(name.split(""));
// const nume = "Nishma, Shiv, Koirala, Raut, Nita, Homnath, Rajan, Karuna, Khushi, Nishkarsha"
// console.log(nume.split(","));


// ARRAY
// Creating Array There are two way to do so 1: Creating a constructor, 2: doing it using []
// const nUMBER = new Array(1,2,3,4,5,6,7,8);
// console.log(nUMBER);

// const fruits = ["Apple", "Mango", "Tree", true, 1, null, undefined];
// console.log(fruits);

// fruits[3] = "SYau"
// fruits.push("MYau");
// fruits.unshift("Kaley");
// console.log(fruits);   
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf("Apple"));


// OBJECT LITERALS //This is like the dictionary of the python
// const person =  {
//     firstName : "Shiv",
//     lastName : "Koirala",
//     fatherFName : "Homnath Koirala",
//     Hobbies : ["Gaming", "Coding", "QA"],
//     Address : {
//         Country : "Nepal",
//         State : "Koshi Province",
//         City : "Biratnagar",
//         Ward : 3
//     }
// };
// // console.log(person.Hobbies[1]);
// // console.log(person.Address.City);
// person.age = 19;
// person.email = "koirala.khushi456@gmail.com";
// console.log(person);
// const {firstName, lastName, Address : {City}} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(City);


// OBJECT LITERALS WITHIN THE ARRAY
// We will be working with this Array for the loops concepts as well.
// const Todos = [
//     {
//         id : 1,
//         Work : "Make Highly Healthy Food",
//         Status : true
//     },
//     {
//         id : 2,
//         Work : "Meeting with Ajayraj Sir",
//         Status : true
//     },
//     {
//         id : 3,
//         Work : "Completing the PaperWorks",
//         Status : true
//     },
//     {
//         id : 4,
//         Work : "Submitting work",
//         Status : false
//     }
// ];

// console.log(Todos);
// console.log(Todos[0]);
// console.log(Todos[1].Work);

// Todos.push(
//     {id:5, 
//     Work : "To Reach Home Before 7 pm ",
//     Status : false
// })
// console.log(Todos);



// Lets Talk About Json = JavaScript Object Notation
// Json is a data format and used a lot in full stack development and API the data sent and recieving to a server is basically done in JSON format 
// Its very similar to object literals just difference is "" in all key and attributes

// JSON.stringfy is the function that is used to conver into JSON string.
// const TodoJson = JSON.stringify(Todos);
// console.log(TodoJson);


//LOOPS: 1) for loop 2) While loop 
// for (let i = 0; i<10; i++) {
//     console.log("The value of i using the For loop is " + i)
//     };

// let i = 0;
// while(i<10){
//     console.log("The value of i using the While loop is " + i)
//     i++
// }


// for (let i = 0; i < Todos.length; i++) {
//     console.log(Todos[i].Work);
// };

// for (let todos of Todos){
//     console.log(todos.Work)
// }


// lets see some High Ordered Array Methods: For Each, map, filter
//  SOME FUNCTION BASED WORKS 
// Todos.forEach(function(todo){
//     console.log(todo.id)
// }
// );

// Todos.forEach(function(todo){
//     console.log(todo.Work)
// });

// const todo = Todos.map(function(todo){
//     return todo.Status
// });
// console.log(todo)

// const todoz = Todos.filter(function(todo){
//     return todo.Status === true;
// }).map(function(todo){
//     return todo.Work
// })
// console.log(todoz)

// for (let i = 0; i<=10; i++){ // star pattern
//     console.log(" ".repeat(i)+ "*".repeat(i))
// }

// CONDITIONAL // should know difference between === and ==
// const x = 1;
// if (x<0){
//     console.log("X is Negative number")
// }else if(x>0){
//     console.log('X is Positive Number')
// }else{
//     console.log("x is 0")
// }

// //  DOUBLE CONDITION IN 2 VARIABLES
// const A = 1;
// const B = -2;
// if(A<1 && B < 1){
//     console.log("BOTH A AND B ARE NEGATIVE")
// }else if (A>0 && B>0){
//     console.log("BOTH A AND B ARE Positive")
// }else if (A>0 && B<0){
//     console.log("A IS POSITIVE AND B IS NEGATIVE")
// }else{
//     console.log("A IS NEGATIVE AND B IS POSITIVE")
// }

// INTRODUCTION TO TERNARY OPERATOR
// const age = 15;
// const check = age>18 ? "You are allowed to voting" : "You are not eligible for Voting";

// console.log (check);

// SWITCH CASE
const day = 1;
switch {
    case "1

}
