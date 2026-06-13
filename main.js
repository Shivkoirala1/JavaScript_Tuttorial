// console.log("Hello World");

// console.error("This is the error");
// console.warn("This is warning"); 


// VARIABLES
// let ra const ko herum aba 
// let score = 10;
// if (score == 10){
//     console.log("Your score is not sufficient");
// }
// console.log(score)
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
// console.log(name.split(""))
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
// fruits.unshift("Kaley") 
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
// console.log(person)
// const {firstName, lastName, Address : {City}} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(City);


// OBJECT LITERALS WITHIN THE ARRAY
const Todos = [
    {
        id : 1,
        Work : "Make Highly Healthy Food",
        Status : true
    },
    {
        id : 2,
        Work : "Meeting with Ajayraj Sir",
        Status : true
    },
    {
        id : 3,
        Work : "Completing the PaperWorks",
        Status : true
    },
    {
        id : 4,
        Work : "Submitting work",
        Status : false
    }
]

console.log(Todos);