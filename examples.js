const addNum = (a,b) => {
    return a+b;
}

//Find the first non-conservative number

function oddNumberOut(arr){
       for (let i=0; i<arr.length-1; i++){
           if(arr[i+1]-arr[i]!==1){
            return arr[i+1]
           }
       } 
       return null;
}