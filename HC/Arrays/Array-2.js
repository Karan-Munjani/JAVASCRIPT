let testArray = [2, 3, 4, 8, 5, 9, 1, 15]

console.log(testArray.fill("0", 2, 6));

//start index inclusive ending index exclusive
console.log(testArray.fill("K", 1, 4));
console.log(testArray.fill("K", 5));
// will change entire ARRAY PASS BY REFRENCE


let marks = [55, 80, 60, 72, 85, 90,91];

let gradeA = marks.filter((mark) => mark >= 90);
let gradeB = marks.filter((mark) => mark >= 70 && mark < 90);
let gradeC = marks.filter((mark) => mark <50);

console.log(gradeA);
console.log(gradeB);
console.log(gradeC);