console.log("Hello from the Operators");

/**
 * OPERATORS
 * 4 types of operators
 * 
 *  1    Arithmatic operator [+,-,*,/,%,a++,++a ]✅
 *  2   Camparision operator [<,>,<=,>=,==,===,!=,]✅
 *  4    Assignment operator [=,+=,-=,/=,*=,%=] ✅
 *  3    Logical operator   [&& , ||, !] ✅
 * 
 */

let n1 = 34;
let n2 = 10;

// arithematics operator
let result = n1 + n2;
result = n1 - n2;
result = n1 * n2;
result = n1 / n2;
result = n1 % n2;
// console.log(result);


// comparision operator
result = n1 < n2;
result = n1 > n2;
result = n1 >= 34;
result = n1 <= 10;

// value brabar | datatype difference

let user_pass = 21; 
let db_pass = "21";
let condition = user_pass != db_pass; //  check both  value and datatype


let a = "shahzad";
let b = "zeeshan";
let c = "muhtshim" + " Daud";


a = a; // a = shahzad
a = b; // a = zeshan
b = a; // b = zeshan
c = a; // c = zeshan
b = c; // b = zeshan
// console.log(a); 
// console.log(b);
// console.log(c);


let mySalary = 100;
mySalary = mySalary + 5; // 105
mySalary += 5;  // 110
mySalary -= 50; // 60
mySalary *= 2; // 120
mySalary /= 6;
mySalary %= 6;
// console.log(mySalary);


// logical operator
let condition1 = 12 < 34 && 10 > 20; 
let condition2 = 12 < 34 || 10 > 20; 
console.log(!condition1,!condition2);








KGB