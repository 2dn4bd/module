// filer selects elements based on a conditon and returns an array with the elements that fulfill the condition
const numbers = [1, 5, 6, 5, 15];
const palyers = [75, 65, 67, 72, 55, 59];
// const selected = palyers.filter(p => p > 70);
// console.log(selected);

// const selected = palyers.filter(p => p > 80);
const selected = palyers.filter( p => p % 2 === 1);
console.log(selected);

const friends = ['tom', 'jon', 'oliver'];
const fourDigitFriendsName = friends.filter(frnd => frnd.length > 4);

console.log(fourDigitFriendsName);


