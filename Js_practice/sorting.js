// Question: Why does the default JavaScript .sort() method fail to sort an arr of numbers like [1, 3, 5, 8, 10] correctly, and what is the proper way to fix it (3:06 - 3:47)?

// A) It sorts numbers based on their mathematical value, but requires a callback for performance.
// B) It converts the numbers into strings and sorts them lexicographically (by character value), so you must provide a compare function like (a, b) => a - b.
// C) It ignores any number greater than 9.
// D) It only works for floating-point numbers, not integers.


// so right here we have chaneces to do this question by help of map function ok becuase we doest'n wnat ot  change current arr ok..

const sorting =(arr)=>{
 n =arr.length;
 for(i=0;i<n-1;i++){
    for(j=0;j<n-i-1;j++){
        if(arr[j]>arr[j+1]){
            //swap 
           let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }

 }
return arr;
    // so directly ways to return arr  we use built in sort method 
    // return arr.sort((a,b)=>a-b);
}


console.log(sorting([2,67,4,56,6,7,34]));
