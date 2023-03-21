//COde hoisting means we should not be using a variable and declare it later on ,we should
 //first be declaring it and using it or may be just on go declare it at the same time intialize 
 //it as well.



var getData = (temp = cold,cold=10) => {
    console.log(temp);
    console.log(cold);
    if(temp < cold){
        return "This is cold here"
    } else {
        return "This is not so cold";
    }
}

console.log(getData());