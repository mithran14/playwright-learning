//function-> reusable block of code used to perform a specific task

//1. function declaration or named function

/* 
syntax:
function name(params) {
    
} */

// welcome() //fully hoisted -able to call function before function body {}
// function welcome(){
// console.log("hello team");
// //return "hello team"
// }
//welcome()
//console.log(welcome());  //hello team-> return keyword resturs the result to the function

//Ex: addition
let a=10
let b=29
function add(a,b){

  
    let c=a+b
    console.log(c);
    
}
add(3,9)  //39

//Note: Function parameters act as local variables that receive values from the arguments, so 
// separate variable declarations are not required.




//2. function expression or anonymous function

//funExp()  //hoisted with reference error, cannot access value before initialization
// var funExp= function (){
//     console.log("this is function expression");
// }
// funExp()


//ex: addition
// let add3=function (){

//     let a=10
//     let b=29
//     let c=a+b
//     console.log(c);
    
// }
// add3()  //39




//3. Arrow function-An arrow function is a shorter way of writing a function in JavaScript. 
// It uses the => (arrow) syntax.

// let login=()=>{
//     console.log("login in successful");
    
// }
// login()


//arrow function for addition

// let add1=(x,y)=>x+y  //without {} no need to add return statement
// console.log(add1(2,4));//6


// let add2=(a,b)=>{  //with {}, its manditory to add return statements else the result will be undefined
//     return a+b
// }

// console.log(add2(23,32));//55


//4. callback function => when 1 function is passed as an argument to another function 


// function login(cb1, cb2){

// console.log("log in is successful");
// cb1()
// cb2()

// }

// function username(){
// console.log("enetered username");

// }

// function password(){
// console.log("enetered password");
// }

// login(username,password)



function add(x,y){
 let D= x+y
 return D
}

let c= add(3,5)

console.log(c);

console.log("******************************************");

let addNumbers  = function add(x,y){
 let D= x+y
 return D
}

console.log(addNumbers (8,2));

// let add1=(x,y)=>x+y 
let Numbers  = (a,b) => a+b;
let sub = (a,b) => b-a;
console.log(Numbers (1,2));
console.log(sub (1,2));



// function login(u,p){
//     let c = u(10)
//     let d = p(20)
//     console.log(c+d);
//     return c+d;
// }

// function u(a){
//     return a+2;
// }

// function p(b){
//     return b+5;
// }

// let value = login(u,p)
// console.log(value);
