const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const part = nums.slice(2, 5);
//const removed = nums.splice(2, 3)
const removed = nums.splice(2, 3, 100, 200, 300)

const together = nums.join (",")
// console.log(removed);
console.log(together);
