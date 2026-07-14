// we know the camel case 
// like example is input. my name is somesh 
//  output be like- myName // that it 

const camelcase = (str) => {
    // first we change the string into array then conacte with second one only 

    return arr = str
    .trim()
    .split(" ")
    .map((e, index) => {
        if (index == 0) {
            return e
        }
    return e[0].toUpperCase() + e.slice(1)})
    
    .reduce((accum, cur, index) => {
       
        return accum + cur
    }
    )

    console.log(arr);
}


console.log(camelcase("my name is somesh"))