// given araay we have to find the all  gratest element ok 


// const findgreat=(arr)=>{


//    const gret= arr.reduce((accum,curr)=> Math.max(accum,curr),0)
//    return gret
// }


const findgreat=(arr)=>{
  
return arr.reduce((accum,curr)=>  accum>curr?accum:curr,)
}



console.log(findgreat([9,-12,-32,-43,-54]));
