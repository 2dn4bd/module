const numbers = [12, 10 , 8, 15, 7];
const double = numbers.map( num =>num * 2);
// console.log(double);
const fiveBonous = numbers.map( num => num + 5);
// console.log(fiveBonous);
const half = numbers.map( num => num / 2);
// console.log(half);
const friends = ['tom', 'jon', 'oliver'];
const length = friends.map( frnd => frnd.length);
// console.log(length);
const firstLetter = friends.map( friend => friend[0]);
console.log(firstLetter);