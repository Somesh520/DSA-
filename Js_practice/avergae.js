// here we have given an array we calacute the average of array
// 

const aver=(arr)=>{
    return (arr.reduce((acc,cur)=>{ return acc+cur},0))/arr.length;
}

console.log(aver([1,-2,3,4,5,6]));
