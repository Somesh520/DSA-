// here we have to find minimum elemetn in arraya 

// we havr given the array 


// const minarr=(arr)=>{

// return  res=Math.min(...arr)


// }

// now no use builtin method 

const minarr=(arr)=>{
    let minn=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<minn){
            minn=arr[i];
        }
    }
    return minn
}


console.log(minarr([]));
