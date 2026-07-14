

// here we can write the mean question 
// now we can write the code 

// const mean=(arr)=>{
//     // first we use built in method
//     // here log sum 


//     return arr.reduce((acc,cur)=>{return acc+cur}) / arr.length
// }


// now we use tradiotnal method to solve this question 

const mean=(arr)=>{
    let sum=0;
if(arr.length===0){
    return "Array is empty!!"
}
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }

    return sum/arr.length
}


console.log(mean([1,2,3,4,5,6]));
console.log(mean([]));
console.log(mean([-1,-2,3,-4,5,-6]))



