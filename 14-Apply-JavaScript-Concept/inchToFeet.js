//Convert inch to Feet

function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var grandFatherFeet = inchToFeet(156);
console.log(grandFatherFeet);
var grandMotherFeet = inchToFeet(288);
console.log(grandMotherFeet);
var MotherFeet = inchToFeet(480);
console.log(MotherFeet);
