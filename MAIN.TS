#! usr/bin/env node
//object making and for in loop is used in objects only and for of loop is used in arry only

console.log("start");
let student={
    name:"ali",
    age:12,
    class:2,
    subjects:{urdu:23,
        english:45,
        maths:24}
}
let serialNo=0;
let totalMarks=0;
console.log(student);
for(let studentDetail in student){
    totalMarks=totalMarks+student.subjects.urdu
    //console.log(student);
    //console.log(totalMarks);
} console.log(student);
console.log(`total marks ${totalMarks}`);
let averageMark=totalMarks/3;
console.log(`the average of urdu english and maths is ${averageMark}`);