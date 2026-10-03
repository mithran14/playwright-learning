//hoisting => default behaviour JS where declarations alone gets hoisted to the top of the scope, here we have 2 phases 
//1. memory creation phase-JavaScript prepares variables and functions
//2. execution phase-JavaScript executes the code line by line.

console.log(a);
var a = 10 //undefined 
var a = 11

/* internally
var a
console.log(a);
a=10 */

// console.log(b); //ReferenceError: Cannot access 'b' before initialization
// let b=20

//const  => hoisting takes place but throws ReferenceError

console.log(c)// ReferenceError: Cannot access 'c' before initialization
const c = 30

//TDZ(temporal dead zone)- time period between the variable declaration and value assignment to it.
