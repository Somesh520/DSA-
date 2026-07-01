// //Question: You are given a function that accepts three arguments representing the sides of a triangle. Based on the logic discussed in the video, how would you classify the triangle if all three sides have different lengths?

// // A) Equilateral
// // B) Isosceles
// // C) Scalene
// // D) Right-angled

const find_triangle=(a,b,c)=>{
    if(a<=0 || b<=0 || c<=0){
        return "trianlfe side is not negative !";
    }

    let arr=[a,b,c];
    const ar=arr.map((e)=>e*e)
    .sort((a, b) => a - b);

    
    if(a===b && b===c && c==a){
        return "equilateral "
    }
    if(a===b || a===c  || b==c){
        return "isoceles"
    }
console.log(arr);

    const rectanle=ar[0]+ar[1]==ar[2];
if(rectanle){
    return "rectangle"
}


    
return "scalence"

}


console.log(find_triangle(3,4,5));
