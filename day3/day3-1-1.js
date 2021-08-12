const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, scores] = student;

const convertArrayToObject = (arr) => {
  arr = new Map([
    ["name", name],
    ["skills", skills],
    ["scores", scores],
  ]);
  const obj = new Array(Object.fromEntries(arr));

  console.log(obj);
};
convertArrayToObject(student);
