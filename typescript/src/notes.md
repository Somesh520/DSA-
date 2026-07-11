function greet(name:string): string{
    return `Hello ${name}`
}
const username:string="somesh"
console.log(greet(username))

let user='somesh'
console.log(user);
////////////////////////////
let sub :number | string =23;

let seat:"middle" | 'side'| "aglie"="middle"
seat="side"
console.log(sub)
console.log(seat);
////////////////////////////


type role="student" | "devloper"|"intern"
function redierectrole(Role :role): string{

    if(Role=="devloper"){
        console.log("redirecting the devloepr role")
        return "develoepr role"
    }
    if(Role=="intern"){
        console.log("redierecr the interhn role");
        return "intern role"
    }
    
        console.log("redirect the student role")
    return "studnet"

}

console.log(redierectrole("devloper"));

/////////////////////       //////////////////////////////////////