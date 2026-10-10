//Arithmetic operators

// let a=10, b=2

// console.log(a+b) //12
// console.log(a-b) //8
// console.log(a*b) //20
// console.log(a/b) //10/2(division)=returns quotient =5
// console.log(a%b) //10/2(modulus)=returns reminder =0


//Assignment operators

// console.log(a+=2) //a=a+2=>10+2=12  //new value of a=12
// console.log(a-=2) //a=a-2=>12-2=10  //new value of a=10
// console.log(a*=4) //a=a*4=>10*4=40  //new value of a=40
// console.log(a/=4) //a=a*4=>40/4=10  //new value of a=10
// console.log(a%=4) //a=a*4=>10/4=10  //new value of a=2
// console.log(a**=4) //a=a**4=>2**4=2*2*2*2  //new value of a=16

//comparision operators

// let x=20,y=10

/* console.log(x>y) //true
console.log(50>100) //false
console.log(x<y) //false
console.log(x<=20) //true
console.log(x>=10) //true */

//strict equality(===) , this compares both the datatype and the value 
// console.log(1==="1") //false, number===string, value is same but datatype is different, so it returns false
// console.log(undefined===null)//

//loose equality(==), this compares only the value
//coerction-type conversion takes place
// console.log(1=="1")//true
// console.log(1==true)//true
// console.log(undefined==null)//true

//difference '='(assignment operator) and '===' or '=='(comparision operators)

//logical operators
//and(&&)=> (true&&true)=>true
//OR(||)=> (true||false)=>true
//Not(!)=> (!(true))=> false

// let c=4, d=2

// console.log(c>d && d<c)//true && true =true
// console.log(c<d || d>c)//false || false =false
// console.log(!(d>c))//(!(false))=true

//unary operators , works on a single operand

//1. increment(pre-increment(++p) and post-increment(p++))
//2. decrement(pre-decrement(--p) and post-decrement(p--))

let p=2

//pre-increment=Increment first, then use the new value.
console.log(++p) //3 
console.log(p)//3

//post-increment=Use the current value first, then increment.
console.log(p++)//3 
console.log(p)//4 

//pre-decrement
console.log(--p) //3
console.log(p)//3

//post-decrement
console.log(p--)//3
console.log(p)//2


