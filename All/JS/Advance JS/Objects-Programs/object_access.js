const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

//barcket
console.log("Bracket");
console.log("========");
console.log(student["name"]);
console.log(student["marks"]);
console.log(student["marks"]["math"]);

//dot
console.log("DOT Notation");
console.log("=============");
console.log(student.name);
console.log(student.marks);
console.log(student.marks.math);