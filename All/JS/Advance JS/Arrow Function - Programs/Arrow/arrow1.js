//Without argument
const add = () => console.log('Hai')

//console.log(add());

//with one argument
const add1 = (a) => console.log(a);

//console.log(add1('Hello'));

//dynamic function creation
let age = 19;

let welcome = (age < 18) ? ()=>console.log('Baby') : ()=>console.log('Adult');

//welcome();

//Multiline arrow function

let sub = (a,b) => {
    let c = a-b;
    return c;
}

console.log(sub(10,5));
