// we have given an array we try to suare them and give output sum 



// easy question 

// const sumofsquare=(arr)=>{
//     // ok now we let the use built in method to reduce and map 
//     return arr.map((e)=>e*e).reduce((accum,cur)=> accum+=cur,0)

//     // 
// }

// next method to try these 

const sumofsquare=(arr)=>{
    // ok first we squre then add 

let sum=0;
   
for(let i=0;i<arr.length;i++){
    sum+=arr[i]*arr[i];
    }

return sum;
}

console.log(sumofsquare([1,2,3,4,8,9]));
