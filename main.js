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
// const day = 1;
// switch (day){
//     case 1:
//         console.log("Today you have to go to the Job");
//         break;
//     case 2:
//         console.log("Holiday");
//         break;
// }

//CREATING SIMPLE ADD FUNCTION WITHOUT RETURN STATEMENT
// function ADD(NUM1,NUM2){
//     console.log("The sum of the number are", NUM1 + NUM2);
// } 
// ADD(5,4);

// CREATING FUNCTION WITH THE DEFAULT PARAMETER AND return Statement
// function substract(num1 = 3, num2 = 2){
//     return num1-num2;
// }
// console.log(substract())// output should be 1
// Default Parameter is always overrided by the parameter passed while calling the function

// ARROW FUNCTION ARROW FUNCTION INTRODUCED IN ES6 2015
// Arrow functions cut down the complexity of the code which is seen in normal functions
// lets see how it can be implemented\
// const Add = (num1,num2) => {
//     return num1+num2;
// }
//  console.log(Add(3,3))

// const addition = num1 => num1+5;
// console.log(addition(5))


// LETS TALK ABOUT CONCEPTS OF OOP object oriented programming
// In this section we will talk about constructor, instantating an object
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getFullBirth = function(){
//         return this.dob.getFullYear();
//     }
// }

// person1 = new Person ("Shiv", "Koirala", "2-2-2007");
// person2 = new Person ("Nishma", "Raut", "5-8-2006");

// console.log(person1);
// console.log(person2.dob);
// console.log(person2.getFullBirth());

// Practicing the same logic once again to be confirmed with prototype

// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }
// Person.prototype.getBirthyear= function(){
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function(){
//     return`${this.firstName} ${this.lastName}`
// }

// person1 = new Person("John", "Doe", "02-02-2007");
// person2 = new Person("Khushi", "Koirala", "5-2-2001");
// console.log(person1)
// // console.log(person2.dob)
// console.log(person1.getBirthyear());
// console.log(person2.getFullName());


// Implementing the concept of Class in OOP
// class Person{
//     constructor (firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }
// getfullName(){
//     return `${this.firstName} ${this.lastName}`;
// }
// getbirthYear(){
//     return this.dob.getFullYear()
// }
// }

// person1 = new Person("Ram", "Niroula", "4-4-2000");
// person2 = new Person("Himkala", "Niroula", "2-2-2002");

// console.log(person1);
// console.log(person2.getbirthYear())
// console.log(person1.getfullName())



// WE WILL START THE FORM VALIDATING CONCEPT (DOM- data object manipulation) FROM HERE
// console.log(document.getElementById("my-form"));
// const form = document.getElementById("my-form");
// console.log(form);

// console.log(document.querySelector(".msg")) // for class

// Multiple class selector
// console.log(document.querySelectorAll(".item")); // preffered one should always use this not others

// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("li"));

// const items = document.querySelectorAll(".item");

// items.forEach((item) => 
//     console.log(item));



// const ul = document.querySelector(".items");
// // console.log(ul);
// // ul.remove();
// ul.firstElementChild.textContent= "Apple";
// ul.children[1].innerText= "Mango";
// ul.lastElementChild.textContent = "Litchi";
// ul.lastElementChild.innerHTML = "<h4>Litchi</h4>"

// const btn = document.querySelector(".btn");
// btn.style.background = "red"


// Some small concepts of event listener and accessing the submit button and performing things on it 
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", (e) => {
    // e.preventDefault()
    // console.log("Clicked")
    // document.querySelector("#my-form").style.background = "#ccc"
    // document.querySelector("body").classList.add(".bg-dark")
    // btn.style.background = "green"
    // alert("Form submitted sucessfully")
// }
// );


