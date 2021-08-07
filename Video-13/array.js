var jobAche = true;
var savingAmount = 50000;
if (jobAche = true && savingAmount > 200000) {
    console.log('Amin tore gf kuija dimu');
}
else {
    console.log("Amin tor kopale gf nai");
}
///////
var friendsAge = [15, 17, 14, 16];
console.log(friendsAge)

// 2 number friend age
var friendsAge = [15, 17, 14, 16];
console.log(friendsAge[2])

// zilan age
var friendsAge = [15, 17, 14, 16, 21];
var zilanAge = friendsAge[4];
console.log(zilanAge);

// age add of friends
var friendsAge = [15, 17, 14, 16, 21];
friendsAge[2] = 25;
console.log(friendsAge);

// Position index.of
var friendsAge = [15, 17, 14, 16, 21];
var position = friendsAge.indexOf(14)
console.log(position);

// Position index.of -1
var friendsAge = [15, 17, 14, 16, 21];
var position = friendsAge.indexOf(141)
console.log(position);

// push
var friendsAge = [15, 17, 14, 16, 21];
console.log(friendsAge);
friendsAge.push(20);
console.log(friendsAge);

// length
var friendsAge = [15, 17, 14, 16, 21];
console.log(friendsAge.length);
friendsAge.push(20);
friendsAge.push(30);
console.log(friendsAge.length);

// pop that means element remove
var friendsAge = [15, 17, 14, 16, 21];
console.log(friendsAge);
friendsAge.push(20);
friendsAge.push(25);
console.log(friendsAge);
friendsAge.pop();
console.log(friendsAge);

// String
var tagLine = ['kalam', 'Salam', 'Balam'];
tagLine.push('Jalam')
console.log(tagLine);
tagLine.pop()
console.log(tagLine);

// Remove first string from the line 
var tagLine = ['kalam', 'Salam', 'Balam'];
tagLine.shift();
console.log(tagLine);

// add string of the first line
var tagLine = ['kalam', 'Salam', 'Balam'];
tagLine.unshift('Palam');
console.log(tagLine);

// Slice
var tagLine = ['Zilan', 'Chayan', 'Tonmoy', 'nihil', 'Fokhrul'];
var part = tagLine.slice(1, 4);
console.log(part);

// splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);