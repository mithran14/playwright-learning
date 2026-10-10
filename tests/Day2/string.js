//strings- sequence of characters, represented using '',"",``

//1. string literal =assigning the value directly to the variable
//2. string objects= Creates a String object using the new String() constructor. 

//string literal-> compares value and datatype

let companyName = "testleaf" //1000
let firmName = "testleaf"    //1000(same memory-so unique data)//true
//let firmName="Testleaf"    //2000(different data)//false

//console.log(companyName===firmName)//true


//string objects-> compares the object reference:
// let companyName1=new String("testleaf")
// let firmName1=new String("testleaf")

// console.log(companyName1===firmName1)//false(different memory)
// console.log(companyName===companyName1)//false

//compares the string object data 
//console.log(companyName1.toString()===firmName1.toString())//true


// let course="playwright"
// console.log(course.length);  //10

//index starts from 0 and length starts from 1
//index p-0,l-1,a-2,....t-9
//length p-1, l-2,......t-10

//string methods
//escape characters \n, \t, \

// let data='it\'s a \n regression\ttesting'
// console.log(data);

/* it's a 
 regression     testing */

//cancat(),+,`${}`-template literal  => adds 2 strings

// let v1= "50"
// let v2= "test cases"

// console.log("there are ",v1.concat(v2));//there are  50test cases
// console.log("there are" ,+v1+ v2);//there are 50test cases
// console.log(`there are ${v1} ${v2}`);//there are 50 test cases

//charAt()-> returns the character at the specified index

let course = "playwrightg"
console.log(course.charAt(4));//w

//indexof() -> returns the index of first occuring character
console.log(course.indexOf('g'));//7 (first occurance)
console.log(course.indexOf('g', 8));//10(second occurance)




