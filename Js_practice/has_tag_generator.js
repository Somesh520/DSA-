`Question: In the #Generator challenge, the instructor needs to convert an input string into a hashtag. 
According to the requirements mentioned (0:39 - 1:47),
which of the following is a condition that should trigger the function to return false?


A) The string contains more than one word.
B) The string length exceeds 280 characters or is empty/whitespace.
C) The string contains special characters like '@' or '$'.
D) The input string is already capitalized.`

const hash=(s)=>{
   if (s.trim().length === 0 || s.length > 280) {
    return "Invalid input";
}

const result='#' + s.trim().split(" ").map(word => word[0].toUpperCase() + word.slice(1))
            .join("");

return result;

}


console.log(hash("here is my.  @@"))