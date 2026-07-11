// where we givene an string after that we count the vowels .. 
// give me total vowels 

const countvowels=(str)=>{
    // here we write we change the string to arr
   const vowels = ["a","e","i","o","u"];

    return arr=str.
    toLowerCase()
    .replaceAll(" ",".").split("")
    .reduce((accum,curr)=> vowels.includes(curr) ? accum + 1 : accum,0);


    
}

console.log(countvowels("whrere is my son"));
