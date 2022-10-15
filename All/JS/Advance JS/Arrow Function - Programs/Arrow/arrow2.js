function Person(){
    this.name = 'John',
    this.age = 20,
    this.sayname = function(){
        console.log(this.age);
        function innerfunc(){
            console.log(this.age);
            //console.log(this);
        }
        innerfunc();
    }
}

let person1 = new Person();
person1.sayname();


function sub(a,b){
    return a-b;
}

function add(a,b){
   let a1 =  sub(a,b);
    return a+b+' '+a1;
}

//console.log(add(10,5));
