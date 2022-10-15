function person(){
    this.name = 'john';
    this.age = 28;
    this.greet = function(){console.log('Hello')}
}

var person1 = new person();

console.log(person1.name);

console.log(person1.greet());