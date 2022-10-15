//Regular Function
let x = function(){
    console.log(arguments);
}

//x(4,5,6);

//Arrow Function
let x1 = () => {
    console.log(arguments);
}

//x1(4,5,6);

//Templete String

const name1 = 'Jack';
console.log(`Hello ${name1}`);

const name3 = (name5) =>{
    console.log(`Hello ${name5}`);
}

name3('Monika');