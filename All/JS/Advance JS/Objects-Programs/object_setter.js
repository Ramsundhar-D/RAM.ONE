const student = {
    firstname : 'monika',

    set changeName(modifyName){
        this.firstname = modifyName;
    }
}

console.log(student.firstname);

student.changeName = 'Sara';

console.log(student.firstname);