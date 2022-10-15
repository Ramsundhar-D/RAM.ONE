const person = {
    firstname : 'john',
    lastname : 'david',
    fullname : function(){console.log('FullName is'+this.firstname +this.lastname)}
}

console.log(person.fullname());