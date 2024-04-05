//object making and for in loop
//let student={[key:"string"]any
console.log("start");
var student = {
    name: "ali",
    age: 12,
    class: 2,
    subjects: { urdu: 23,
        english: 45,
        maths: 24 }
};
var serialNo = 0;
var totalMarks = 0;
console.log(student);
for (var studentDetail in student) {
    totalMarks = totalMarks + student.subjects.urdu;
    //console.log(student);
    //console.log(totalMarks);
}
console.log(student);
console.log("total marks ".concat(totalMarks));
var averageMark = totalMarks / 3;
console.log("the average of urdu english and maths is ".concat(averageMark));
