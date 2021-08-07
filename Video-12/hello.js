//console.log(21);
//console.log("good Morning");
//console.log("I am Amin");
//console.log("My name is Amin");


// variable
// var bananaPrice = 12;
// console.log(bananaPrice);

// type of number variable
// var age = 18;
// console.log(typeof age);

// type of string variable
// var name = "Aminur Rahman";
// console.log(typeof name);

// type of boolean variable
// var isHot = true;
// var isRich = false;
// console.log(typeof isHot);

// Video 5
// var name = 'Hero Alom'

// Video 6
var promise = 'I promise I will work Hard to become a programmer';
// console.log(promise.toUpperCase());
// console.log(promise.toLocaleLowerCase());
console.log(promise.toLocaleUpperCase())


var promise = 'I promise I will work Hard to become a programmer';
// console.log(promise.indexOf('will'));
// console.log(promise.indexOf('work'));
console.log(promise.split('will'));

// Video 7 number 

var number1 = 25;
var number2 = '15.5';
console.log(number1 + number2);

var number1 = 20;
var number2 = '20.25';
number2 = parseFloat(number2);
console.log(number1 + number2);

var number1 = 50;
var number2 = '50.25';
number2 = parseInt(number2);
console.log(number1 + number2);

var number1 = 20;
var number2 = '10.5';
number2 = +number2;
console.log(number1 + number2);

var number1 = 0.1;
var number2 = 0.2;
// console.log(number1 + number2);
var total = number1 + number2;
total = total.toFixed(3);
console.log(total)

// Video 8 number 

var price1 = 15;
var price2 = 20;
var total = price1 + price2;
console.log(total);

var price1 = 15;
var price2 = 20;
var total = price1 - price2;
console.log(total);

// Video 9 number 

var number = 5;
var absoluteNumber = Math.abs(number);
console.log(absoluteNumber);

var number = 5.54555;
var result = Math.round(number);
console.log(result);

var number = 5.49999;
var result = Math.round(number);
console.log(result);

var number = 5.099999;
var result = Math.ceil(number);
console.log(result);

var number = 5.99999;
var result = Math.floor(number);
console.log(result);

var number = 15.000000;
var result = Math.random(number);
console.log(result);