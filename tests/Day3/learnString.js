//string methods


//slice() ->extracts the portion of the string and this accepts negative value

// let data="playwright"
// console.log(data.slice())//playwright
// console.log(data.slice(4))//wright
// console.log(data.slice(4,9))//wrigh
// console.log(data.slice(4,10))//wright

// //negative index to print "play"
// console.log(data.slice(-10,-6));//play
// console.log(data.slice(-6,-10));//null/empty
// console.log(data.slice(10,4));//null/empty(if start index is greater than end index it returns empty value)


//substring() -> extratcts the portion of the string, this doesnot accept negative values

// let data="playwright"
// console.log(data.substring(-6,-10));//(0,0)//empty
// console.log(data.substring(-6,5));//playw
// console.log(data.substring(8,4))//swaps(4,8)=>wrig


//split()-> converts string into an array
// let value="today is saturday" //3 words
// let splitvalue=value.split()
// console.log(splitvalue);//[ 'today is saturday' ]  =>string into array
// console.log(value.split(""))  //splits char by char
/*
[
  't', 'o', 'd', 'a', 'y',
  ' ', 'i', 's', ' ', 's',
  'a', 't', 'u', 'r', 'd',
  'a', 'y'
]  */

  // console.log(value.split(" ")) //[ 'today', 'is', 'saturday' ]//0 index=today,1 index=is, 2nd index=saturday
  // console.log(value.split("a"));//[ 'tod', 'y is s', 'turd', 'y' ]
  
  

//reverse the string(Activity)
// let str="testleaf" //index=0, len=1 (i+1)
//length of testleaf =8 
// let rev=""

// for(i=str.length-1;i>=0;i--){

//   rev=rev+str[i]

// }
// console.log(rev);


// //direct method to reverse the string

// let rev1=str.split('').reverse().join('')
// console.log(rev1);









