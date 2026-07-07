// here we can write the function for factorial 



const fact=(num)=>{
    if(num==1){
        return 1 ;
    }
    return num*fact(num-1);
}

console.log(fact(21));
