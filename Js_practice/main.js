// `{
// "challenge": "Find the Longest Word",
// "description": "Write a function that takes a string as input and returns the longest word in that string.",
// "rules": {
// "multiple_longest": "Return the first one encountered",
// "empty_input": "Return false if the string is empty or contains only whitespace",
// "whitespace_handling": "Ignore leading and trailing whitespace"
// },
// "input_constraints": "May contain alphabetic characters, digits, spaces, and punctuation"
// }`


//here we can use loop but if we want to use another type use sort method
 
// const longest_word=(s)=>{


//     if(s.length===0){
//         return "string is empty";
//     }

//      const arr=s.split(" ")

//     count="";

//     for(i=0;i<arr.length;i++){
//         if(arr[i].length>count.length){

//             count=arr[i];
//         }
//     }

//     return count;

// }







// const longest_word=(s)=>{
//     if(s.trim().length===0){
//         return "string is empty";
//     }

//     words=s.split(" ");

//     word=words.sort((a,b)=>a.length-b.length)


// return word.at(-1);

// }


// like third method to crate this 

const longest_word=(s)=>{
    str=s.split(" ");
    count=""
str.map((e)=>{
        if(e.length>count.length){
count=e;
        }
    })

    return count;

}
console.log(longest_word("rerrferf erreer ergreg"))
