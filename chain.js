// data access
const data = [{id:1, name: 'sohel', address: 'dhaka'}];
// console.log(data[0].address); //dhaka

const product = {
    const: 5000,
    data:[
        {id:1, name: 'mobile phone', price: 18000},
        {id:2, name: 'TV', price: 20000}
    ]
}

// give second product price
console.log(product.data[1].price);


const user = {
    id: 5001,
    name: 'tushar',
    address:{
        street:{
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'nodorai'
        },
    city:'dhaka'
    }
}

console.log(user.address.street.second);