const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

// console.log(student);

const newStudent = Object.assign({}, student);
newStudent.skills.frontEnd = [
  ...newStudent.skills.frontEnd,
  { skill: "Bootstrap", level: 8 },
];
newStudent.skills.backEnd.push({ skill: "Express", level: 9 });
newStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
newStudent.skills.dataScience.push("SQL");

//a. Find the length of student object keys
let lengthOfStudentObjectKeys = Object.keys(newStudent);

console.log(
  `The student object keys: ${lengthOfStudentObjectKeys} and length is ${lengthOfStudentObjectKeys.length}`
);
//b. Find the length of the student object
let lengthOfStudentObjectValues = Object.values(newStudent);

console.log(
  `The student object keys: ${lengthOfStudentObjectValues} and length is ${lengthOfStudentObjectValues.length}`
);

//c. Find the length of skills object keys
let lengthOfStudentObjectSkillsKeys = Object.keys(newStudent.skills);

console.log(
  `The student object keys: ${lengthOfStudentObjectSkillsKeys} and length is ${lengthOfStudentObjectSkillsKeys.length}`
);
//d. check if the student object has graphicDesign property
if (Object.keys(newStudent) !== "graphicDesign") {
  console.log("Not found This property in student object");
} else {
  console.log("The Student object has graphivDesign property");
}

//e. Iterate the keys of the student object
console.log(Object.keys(newStudent));
