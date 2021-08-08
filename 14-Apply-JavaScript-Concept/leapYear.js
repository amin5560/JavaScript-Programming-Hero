// const year = 3788;
// console.log(year % 4);

// const year = 3788;
// const remainder = year % 4;
// console.log(remainder == 0);

// const year = 3789;
// const remainder = year % 4;
// if (remainder == 0) {
//     console.log('Your year is leap Year');
// }
// else {
//     console.log('Your year is not leap Year');
// }

function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        return true;
    } else {
        return false;
    }
}
const check200 = isLeapYear(3789);
console.log(check200);