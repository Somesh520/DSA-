// now the question is the revese the string 
// without using built in method ok 

// const reversee=(char)=>{
//     // here we use builtin method and another code we seee withut built in method
//     return char.split("").reverse().join("");
//     // this is built in method 

// }

const reversee=(char)=>{
    let str=""
    char =char.trim().replaceAll(" ","")
    for(let i=char.length-1;i>=0;i--){
        str+=char[i];

    }
    return str
}

console.log(reversee("somesh tiwari"));
