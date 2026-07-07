/// here we write the closure property here 

// ok 

// function greet(name){

//     function greet_human(surname){
//         return `Hello ${name} ${surname}`
//     }
// return greet_human
    
// }

// let name_human=greet("somesh");

// console.log(name_human("Tiwari"));


// var createCounter = function(n) {
    
//     return function counter() {
//        return n++;
        
//     };
// };

// let counter=createCounter(10)

// var expect = function(val) {

//     function toBe(newval){
//         if(newval===val){
//             return "Equal";
//         }
//         else{
//             return "error"
//         }
//     }
//     function notToBe(newv){
//         if(newv===val){
//             return "Equal";
//         }
//         else{
//             return "error"
//         }
//     }

//     return {toBe,notToBe}
    
// }; 

// let expected=expect(5).toBe(7)

// console.log(expected);

// var createCounter = function(init) {
//     let key=init;
//     return {
//         increment(){
//             key++;
//             return key;
//         }
//         ,
//         decrement(){
//             key--;
//             return key;
//         },
//         reset(){
//             key=init
//             return key ;
//         }
//     }
// };

// let cou=createCounter(1);
// console.log( cou.increment(),
// cou.increment(),
// cou.decrement(),
// cou.decrement(),
// cou.reset());


const mmilli =(mill)=>{
    let date=Date.now()
    console.log(date);
}
let date=Date.now()
    console.log(date);





