//jshint esnext:true

function deposit(...money){
    console.log(money);

    let balance = 0;
    for(let i=0;i<money.length;i++){
        balance +=money[i];
    }
    return balance;
}

console.log(deposit(100,40,50,30));



let addMoney = [78,23,56,9,123];
//console.log(Math.max(addMoney));
console.log(Math.max(...addMoney));