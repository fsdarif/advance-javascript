const numbers = [2, 4, 9, 10]

const output = [];

for (let i=0; i<numbers.length; i ++) {
    const elements = numbers[i];
    const result = elements * elements;
    output.push(result);
    console.log (output)
}

const numbers = [2, 4, 9, 10];
numbers.map(function (element, index, array) {
    console.log(element, index, array );
}
)

function squre (element){
    return element * element;
}

const squre = element => element * element;

const squre = x => x * x;




const number = [2, 4, 6];
// const result = number.map(function(element){
//     return element * element
// })
const result = number.map(x => x * x);
console.log(result)

filter
const number = [2, 3, 4, 5, 9, 11, 52];
const bigger = number.filter(x => x > 5);
console.log(bigger);