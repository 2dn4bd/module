const products = [
    {id:1, name: 'lenovo', price: 65000},
    {id:2, name: 'del', price: 45000},
    {id:3, name: 'hp', price: 30000},
    {id:4, name: 'mac air3', price: 150000},
]
const names = products.map(product => product.name)
// console.log(names);

// forEach
products.forEach(p => console.log(p.id));

// filter
const expensive = products.filter(p => p.price > 50000)
// console.log(expensive);

// find
const affordable = products.find(p => p.price < 50000);
// console.log(affordable);

// reduse
const total = products.reduce((acum, current) => acum + current.price, 0 );
console.log(total);