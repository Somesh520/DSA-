// here we check character is upper case or lower case 
// now we look the code 



// here main logic phase 

// we find the character assci value 

// A to Z - 65-90

// a to z - 97-122

// Digits `0-9` → `48` to `57`

// ok now difference is 32 ok 

// ‘A’ + 32=’a’

//  so above message we included that we convert first chalracter at 
// not use buil in method 


// const isupperorlower=(char)=>{
// console.log("a".charCodeAt(0))
// // console.log("A".charCodeAt(0));
//     // built in method
//     if(char.charCodeAt(0) >=65 && char.charCodeAt(0)<90){
//         return "uppercase"
//     }
//     else if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<122){
//         return "lowercase"
//     }
    
// now next method to solve this question is return 
const isupperorlower=(char)=>{
    // if char is uppercase is true otherwsie false;
    return  char===char.toLowerCase()
}

// return "not an character"
// }

console.log(isupperorlower("E"));
