// weher we remove dupllicate in array 

const removeduplicate=(arr)=>{
    // we use filter here because it first we sort then we filter ok 

    const sorted_array=arr.sort((a,b)=>a-b);
// now apply the duplicates

return sorted_array.filter((item,index)=> { return sorted_array.indexOf(item) === index})
    
}

// const removeduplicate=(arr)=>{
//    const newarr= [...new Set(arr)]
//     return newarr
// }

console.log(removeduplicate([1,2,3,4,3,2]))