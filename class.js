const products = [
    {id:1, name: 'lenovo', price: 65000},
    {id:2, name: 'dell', price: 45000},
    {id:3, name: 'hp', price: 30000},
    {id:4, name: 'mac air3', price: 150000},
]
class product{
    country = 'bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }

}
const lenovo = new product('lenovo');
console.log(lenovo)
lenovo.speak('here is your new product');

class teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching math');
    }
}
const topon = new teacher('topon sir');
console.log(topon);
const rashid = new teacher('math', 'english');
console.log(rashid);