// Structure -------- Switch, Case, Break, Default
num = 1000
switch (num) {
    case 1000:
        console.log('I am 1000');
        break;
    case 100:
        console.log('i am 100');
        break;
    case 20:
    case 10:
        console.log('I am either 20 or 10');
        break;
    default:
        console.log(`I do not know who are you`)
}

//digit spelling
// 0 - Zero, 1 - one..... 9 - Nine, 10 - Not a valid digit
// Switch, Case, Break, Default

var digit = prompt("Enter any digit : ");
switch (digit) {
    case "0":
        console.log("Zero");
        break;
    case "1":
        console.log("One");
        break;
    case "2":
        console.log("Two");
        break;
    case "3":
        console.log("Three");
        break;
    case "4":
        console.log("Four");
        break;
    case "5":
        console.log("Five");
        break;
    case "6":
        console.log("Six");
        break;
    case "7":
        console.log("Seven");
        break;
    case "8":
        console.log("Eight");
        break;
    case "9":
        console.log("Nine");
    default:
        console.log("Not a digit");

}
