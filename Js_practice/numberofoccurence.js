// we have an array we find the occurence , how many time this eleent occur in array

//
// approach-> we use another array and store the value ok 

// find_occurence=(arr)=>{
    
//     // first we sort the array 
//     arr.sort()
//     const newarray=[];

//     // now array like [1,1,1,2,2,3]
//     let occur=0;
// for(let i=0;i<arr.length;i++){
    
//     if(arr[i]==arr[i+1]){
//         occur++;

//     }
//     else{
//         newarray.push({[arr[i]]:occur})
//         occur=0;
//     }
// }
//     return newarray



// }


// second method to do this 

find_occurence=(arr)=>{
    const count={}
     arr.forEach(element => {
             count[element]=(count[element]||0)+1;
        
        
    });

    return count;


}
console.log(find_occurence([1,2,1,3,2,1,4]));
