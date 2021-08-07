var student = { id: 121, Phone: 01745, name: "Amin" };
var student2 = { id: 100, Phone: 01798, name: "Zilan" };
// property access get on  3 ways
// no-1
var phoneNo = student.Phone;
console.log(phoneNo);
// no-2
var phoneNo = student["Phone"];
console.log(phoneNo);
// no-3
var phonePropName = "Phone";
var phoneNo = student[phonePropName];

// update phone number

student2.phone = 5589446;

console.log(student);
console.log(student2);