const students = [
    {id: 20, name: "Arif"},
    {id: 21, name: "Sharif"},
    {id: 22, name: "Shanto"}
];

const names = students.map(s => s.name);

const ids = students.map(s => s.id);
// filter
const idNumber = students.filter(s => s.id > 21);

const idnumberForFind = students.find(s => s.id>20);
console.log(idnumberForFind)