const bonus = 20;

function sum (first, second){
    let result = first + second + bonus;
    // console.log(result);

    if (result> 9){
        var mood = "happy";
    }
    return result;
   
}
const output = sum (7, 3)
console.log(output);
