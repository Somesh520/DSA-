// The Challenge:
// Create a function that checks if a sequence of characters reads the same forward and backward.

// Consaints:
// Case-Insensitivity: The function should treat uppercase and lowercase letters as identical (1:37).
// Ignore Non-Alphanumeric Characters: You must ignore spaces, punctuation, and special symbols when checking for a palindrome (1:53).
// Return Type: Return true if the input sing is a palindrome, otherwise false (2:00).

// so we have sing in js we should change into an join of them and hide white spaces and case senstiove 

// const is_palindrone=(s)=>{
//     // let we have empty sing figureotut ok ..
//     if(s.trim().length===0) return "string is empty";
// const arr=s.split(" ").join("").toUpperCase()



// let i=0;
// let j=arr.length-1;

// while(i<j){
//    if(arr[i]!=arr[j]){
//     return "not palindrone"
//    }
//    i++;
//    j--;
// }

// return "palindrone";
// }

// new method for this 

const is_palindrone=(str)=>{
        let st=str.toLowerCase().split(" ").join("");
        console.log(st);
        
        let reve=st.split("").reverse().join("");
        console.log(reve);
        
        return st==reve ? "palindrone":"notpalindrone";
}



console.log(is_palindrone("akana"));