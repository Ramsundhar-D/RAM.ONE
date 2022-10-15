function person(){
    this.name = 'jack',
    this.age = 20,
    this.sayname = function(){
        console.log(this.age);
        let innerfunc = () => {
            console.log(this.name);
        }
        innerfunc();
    }
}

var p = new person();
p.sayname();