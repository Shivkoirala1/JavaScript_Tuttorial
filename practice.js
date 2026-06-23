// print garney way 
// variable ko kura
// data type ko kura 
// data types: Sting, Numbers, Boolean, Undefined, Null, Symbol
// STRING MANIPULATION
// OBJECT LITERALS


// console.log("Hello this is me who is trying to be perfect in the code of \n Java Script")
// console.log is the function that is used to print the topics 

// console.warn("Please Follow the Traffic Rule");
// console.warn is used to display something as a warning

// console.error("You are not allowed to park here");
// .error is used to show as a error

// There are three types of variable lets see each of them:
// 1) Var = Functional scope, we can re assign the value in var many times can override
// 2) Const = This is the constant which cannot be changed it is also a block scope based
// 3) Let = block scoped (cannot be overriden inside the same scope)

// Difference between let and Var is var can be re declared but let cannot be recreated again
// var a = 6;
// console.log(a); // This will give the value 6 because a = 6 

// var a ;
// console.log(a); // This will give the value 7 because now a is 6

// const b = 3; // Here the b is assigned as 3 and with const as its variable type
// console.log(b);

// const b = 4; // Here the value of b is again tried to be assigned which will throw an error
// console.log(b); // says identifier b has already been assigned

// let a;
// console.log(a); // output will be undefined
// let a = 8;
// console.log(a); // this will shown an error because we cannot re declare uding let

// for (let i = 0; i < 10; i++) { // let inside one block
//     console.log(i);
// }

// let i= 9; // this will run because it is in other block and has no relationship with the blocked i
// console.log(i)

// Data types in Java script(Its not necessary to give the datatype itself it knows the type)
// var num = 1;
// var name = "shiv";
// var dec = 4.4;
// var undefined;
// var Null = null;
// var bol = true;
// var sy = Symbol;
// var x;

// console.log(num, name, dec, undefined, Null, bol, sy);

//string concatenations and different functions and methods in string
// const fname = "Shiv";
// const lname = "Koirala";

// console.log(`${fname} ${lname}`);
// console.log(fname, lname);

// console.log(fname.toUpperCase());
// const a = (fname.toUpperCase());

// console.log(lname.toUpperCase());
// const b = (lname.toUpperCase());

// const c = a + b;
// console.log(c);

// console.log(c.substring(0,4)); 
// console.log(c.substring(4,11));

// console.log(c.length);

// const fruits = "Apple, Mango, Banana, PineApple";
// console.log(fruits.split(","));

// console.log(fname.split(""));

// ARRAY
// var a = new Array(1,2,3,4,5,6,3);
// console.log(a);

// var a = ["Apple", "Mango", "Fruits", "PineApple"];
// console.log(a);
// console.log(a[1])
// console.log(a.length);
// console.log(a[a.length - 1]);
// console.log(a[11]) // undefined

// a [1] = "Aap";
// console.log(a); // Mango is changed to Aap 

// a.pop(); // pop is used to delete the last entry
// console.log(a);

// a.push("Aap");
// a.push("khau");  // push is used to add something at the end 
// console.log(a);

// a.unshift("1"); // unshift is used to add something at the starting
// console.log(a);

// Once review all the above codes before moving further.

// const b = "shiv";
// console.log(a.indexOf("Apple"));
// console.log(Array.isArray(b));
// console.log(typeof(b));
// console.log(typeof(null));

// OBJECT LITERALS
// const a = {
//     fName : "Shiv",
//     lName : "Koirala",
//     address : "Biratnagar",
//     Age : 19,
//     maritalStatus : false
// }
// console.log(typeof(a));
// console.log(a);
// console.log("My Name is : ", a.fName , a.lName);  // To access the data from object literal

// a.fName = "Shiva";
// console.log(a.fName);

// We can put Array, objectliterals inside the update literals lets see:
// const familyDetails = {
//     person1 : {
//         fName : "Homnath",
//         lName : "Koirala",
//         age : 51,
//         address : "Biratnagar",
//         maritalStatus : true,
//         familyStatus : "Dad"
//     },
//     person2 : {
//         fName : "Nita",
//         lName : "Koirala",
//         age : 45,
//         address : "Biratnagar",
//         maritalStatus : true,
//         familyStatus : "Mom"
//     },
//     person3 : {
//         fName : "Khushi",
//         lName : "Koirala",
//         age : 24,
//         address : "Bisbane",
//         maritalStatus : true,
//         familyStatus : "Daughter"
//     },
//     person4 : {
//         fName : "Damaru",
//         lName : "Koirala",
//         age : 19,
//         address : "Biratnagar",
//         maritalStatus : false,
//         familyStatus : "Son"
//     }
// }

// // console.log(familyDetails); // Gives overall detaisl of the family
// // console.log(familyDetails.person1); // Gives the details of person1
// console.log(familyDetails.person1.fName, familyDetails.person1.lName);
// familyDetails.person1.age = 50; // Any type of data can be manipulated or changed like this
// console.log(familyDetails.person1)
// familyDetails.person1.phoneNumber =9852029933;
// familyDetails.person2.phoneNumber = 9842073333;
// familyDetails.person3.phoneNumber = 9805315424;
// familyDetails.person4.phoneNumber = 9767797797;

// console.log(familyDetails)

// Putting Array inside Object Literals

// const studentDetails = {
//     studentName : "shiv",
//     StudentHobbie : ["Singing", "Dancing", "Workout"],
//     StudentSubjects : ["Maths", "Science", "Computer"],
//     StudentMarks : [88, 87, 92]
// }
// console.log(studentDetails);

// console.log(studentDetails.StudentHobbie.length)
// for (let i = 0; i < studentDetails.StudentHobbie.length; i++) {
//     console.log("The marks of ", studentDetails.studentName, "in", studentDetails.StudentSubjects[i], "is", studentDetails.StudentMarks[i]);
// }

// We will also work on object literals inside an Array so lets have to look on it 

// const Todo = [
//     {
//         id : 1,
//         work: "Wkeup Early",
//         status : true,
//     },
//     {
//         id :2,
//         work: "Make Healthy Breakfast before ",
//         status : true
//     },
//     {
//         id : 3,
//         work: "Meeting with Tutor",
//         status : false
//     }
// ]

// console.log(Todo)

// JSon String
// Lets Talk About Json = JavaScript Object Notation
// Json is a data format and used a lot in full stack development and API the data sent and recieving to a server is basically done in JSON format 
// Its very similar to object literals just difference is "" in all key and attributes

// Json.stringify
// const todoJson = JSON.stringify(Todo);
// console.log(todoJson);


//LOOPS: 1) for loop 2) While loop 

// for (let i = 0; i<10; i++) {
//     console.log("The value of i using the For loop is " + i)
//     };

// console.log("Completed Work list are listed below: ")
// for (let i = 0; i < Todo.length; i++) {
//     if (Todo[i].status === true) {
//         console.log(Todo[i].work);
//     }
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

//  FUNCTION
// OOP
// yo duita matra baki xa aba 


const myform = document.querySelector("#my-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userlist = document.querySelector("#user");

myform.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    if (name.value === "" || email.value === ""){
        msg.classList.add('error');
        msg.innerHTML = "Please Enter This Field to Continue";

        setTimeout(() => msg.remove(), 3000);
    } else {

        // console.log(name.value);
        // console.log(email.value);
        const li = document.createElement('li');
        li.appendChild(document.createTextNode
            (`${name.value} : ${email.value}`));
        
        userlist.appendChild(li);
    }


}