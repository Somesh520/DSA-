// `{
// "question": "Is coding challenge mein reduce method ka istemal kyun kiya gaya hai? (3:45 - 6:30)",
// "options": {
// "A": "Kyunki humein string ko sort karna tha.",
// "B": "Kyunki humein ek single calculated value (total count) return karni thi.",
// "C": "Kyunki humein har character ko modify karna tha.",
// "D": "Kyunki reduce method sirf arrays ke saath hi kaam karta hai."
// },`


// `now you have question count char where we reutrn no of output char appear in string 
// so `

// const countchar=(str,c)=>{
//     if(str.trim().length===0){
//         return false
//     }

//     s=str.toUpperCase()
//     charac=c.toUpperCase()

//     count=0;
//    for(i=0;i<s.length;i++){
//     if(s[i]==charac){
//         count++;
//     }
//    }

//     return count;
// }


// console.log(countchar("helllo LLL","L"));


// arr=[1,2,3,4];
// const add=arr.reduce((acc,cur)=>acc+cur,0);
// console.log(add);


// let change number inot binary format ok 

const binary_change=(num)=>{
    if(num===0){
        return "0";
    }

    n=1;
    while(n==1){
        let char=num%2;
        num=num/2;
        ch=ch+char;
    }

    return ch;
}