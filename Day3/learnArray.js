//array-> collection of elements of heterogeneous data types
// non-primitive data type

/* Separate variables are used to store values for different data.
let name="vidya"
let age=36
let isarrys=true 

Instead of using separate variables, we can store different types of values in a single array.
let arr1=["vidya",36,true] 
*/

// array index starts from 0
// array length starts from 1
// index   -> 0    ->1  ->2
// length   -> 1    ->2  ->3  (length=index+1)
// let arr1=["vidya",36,true] 
// console.log(arr1);  //[ 'vidya', 36, true ]

// print the single value from the array
// console.log(arr1[0]); //vidya

// add the element to the array
// arr1[3]="welcome" // = assignment opertaor
// console.log(arr1); //[ 'vidya', 36, true, 'welcome' ]

// if no element is present in array index, then prints undefined
// console.log(arr1[4]);//undefined

//replace array elements in the array(true value with false in the array)
// arr1[2]=false
// console.log(arr1);//[ 'vidya', 36, false, 'welcome' ] //length=4

//push-> adds 1 or more elements at the end of the array
// arr1.push("Good", "Day")//return new length =6
// console.log(arr1.push("Good", "Day"))//return the new length=8
// console.log(arr1);
/* [
  'vidya', 36,
  false,   'welcome',
  'Good',  'Day',
  'Good',  'Day'
] */

//pop-> removes 1 element at the end of the array
// console.log(arr1.pop());//Day
// console.log(arr1);//[ 'vidya', 36, false, 'welcome', 'Good', 'Day', 'Good' ]

//unshift() -> add 1 or more elements at the start of the array
// console.log(arr1.unshift(100, 150));//9
// console.log(arr1); //[ 100, 150,'vidya', 36, false, 'welcome', 'Good', 'Day', 'Good' ]

//shift() -> removes 1 element at the start of the array
// console.log(arr1.shift()); //100
// console.log(arr1);//[ 150,'vidya', 36, false, 'welcome', 'Good', 'Day', 'Good' ]

//slice()-> extracts the portion of the array and it will not modify the original array
// console.log(arr1.slice(5,7));// [ 'Good', 'Day' ]
// console.log(arr1);//[ 150,'vidya', 36, false, 'welcome', 'Good', 'Day', 'Good' ]


//splice() -> alters the original array
//1st index=>start index
//2nd index=> delete count
//add elements

// let num=[1,6,7,9,2,5]
// console.log(num.splice(1,2,"selenium",undefined,"hello world")) //[ 6, 7 ]
// console.log(num) //[ 1,'selenium', undefined, 'hello world', 9, 2, 5 ]

// console.log(num.splice(1,"11",12));//previous result [ 'selenium', undefined, 'hello world', 9, 2, 5 ]
// console.log(num.splice(1,0,"11",12));//[] //nothing to remove, so return empty array.
// console.log(num)//[ 1, '11', 12, 12 ]

// includes()=> checks whether the element is present in the array
// let  num1=["day", "month", "year"]
// console.log(num1.includes("year")) //true


// //reverse() => reverses the array of elements
// console.log(num1.reverse()); //[ 'year', 'month', 'day' ]


// //join() => converts array into string
// console.log(num1.join('-'));//year-month-day


//sort() =>JS default sort, arranges elements based on ASCII value.
// let sarray=[100, "apple", 2, 10]
// console.log(sarray.sort());  //[ 10, 100, 2, 'apple' ]


//actual number sorting can be done using arrow functions
// let numarray=[45,20,17,8]
// console.log(numarray.sort((a,b)=>a-b));  //[ 8, 17, 20, 45 ]=> ascending order
// console.log(numarray.sort((a,b)=>b-a));  //[ 45, 20, 17, 8 ]=> descending order