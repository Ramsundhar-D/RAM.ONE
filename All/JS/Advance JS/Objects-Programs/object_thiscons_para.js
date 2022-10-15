function person(fname,fage,flast){
    this.name = fname;
    this.age = fage;
    this.lastname = flast;
    this.greet = function(){
        return this.fullname = this.name + this.lastname;
    }
}

var person1 = new person('david',30,'Raja');

console.log(person1.name);
console.log(person1.age);
console.log(person1.greet());