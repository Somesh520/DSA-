// here we find out median of an array ok 


// here we write the code to find the median of an arry

const median=(arr)=>{

    let iseven=arr.length%2==0 ? true : false;

    if(iseven){
        // means it is true  even hai length now we 

    let element =((0+arr.length-1)/2 + (arr.length)/2)/2;
    element=Math.floor(element)

    
    return arr[element]


    }

    // means odd hai 

    let element =(0+arr.length-1)/2;
    return arr[element]
}

console.log(median([1,2,3,4,5,6,7,9]));
