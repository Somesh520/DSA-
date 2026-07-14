// let me brief the question 
// now question says you have an sentence and word now you code tell me sentence is started with word as given if it given then iutput true otherwise false


issubstring=(str,char)=>{

    str=str.trim().split(" ")
if(str[0].toUpperCase()==char.toUpperCase()){
    return true;
}
return false;

    

}

console.log(issubstring("where is my dog","Where"));
