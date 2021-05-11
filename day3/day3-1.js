const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, scores] = student;
const [, , jsScore, reactScore] = scores;
console.log(name, skills, scores);

console.log(jsScore, reactScore);
// const student = new Map([
//   ["name", "David"],
//   ["skills", ["HTM", "CSS", "JS", "React"]],
//   ["scores", [98, 85, 90, 95]],
// ]);

// // const obj = Object.fromEntries(student);
// // console.log(obj);
// // const data = ["name", "skills", "scores"];
// // const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

// const convertArrayToObject = (arr) => {
//   console.log(Object.fromEntries(arr));
// };
// convertArrayToObject(student);
