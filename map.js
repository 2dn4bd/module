// map ==> loops through each element of the array and do the operation that you passed in the callback function and hold the result from each operation in an array and finally returns you the array
const numbers = [4, 5, 2, 8, 10];
function doubleIT(num){
    console.log('now num', num);
    return num * 2;
}
const result = numbers.map(doubleIT);
// console.log(result);

const double2 = n => n * 2;
const output = numbers.map(double2);
// console.log(output);

const output2 = numbers.map(n => n * 2);
console.log(output2);