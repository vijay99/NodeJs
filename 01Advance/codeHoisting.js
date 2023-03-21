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