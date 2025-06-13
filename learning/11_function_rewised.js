console.log("This is a function ");

/***
 * NOTES
 * functions are the block of code that are intended for reuse
 * functions have 2 type of syntax 1: common js 2: es6 arrow function ✅
 * function has two parts 1: function definition 2: function call ✅
 * perameters and argumnets ✅
 * positional arguments ✅
 * default perameters ✅
 * return values
 *
 */

// simple function
function greetMyFriends() {
  console.log("hello and welcome to our family");
}


let sayHi = () => {
    alert("Hello guys");
}



// function for student marks percentage
function getMarksPercentage(obtained, total, name) {
  let percentage = (obtained / total) * 100;
  percentage = Math.round(percentage);
  console.log(`${name} got ${percentage}% in Intermediate exams`);
}

let getPercentage = (name, obtained, total=1100 ) => {
  
  let percentage = Math.round((obtained/total)*100);

  return percentage;
  

}

let getGrades = (perc) => {
  if (perc >= 90) {
    console.log(`You have got A+ grade`);
    return "A+";
  } else if (perc >= 80 && perc < 90) {
    console.log(`You have got  A grade`);
    return "A";
  } else if (perc >= 70 && perc < 80) {
    console.log(`You have got  B grade`);
    return "B";
  } else if (perc >= 60 && perc < 70) {
    console.log(`You have got  C grade`);
    return "C";
  } else if (perc < 60) {
    console.log(`You have got  F grade`);
    return "F";
  } else {
    console.log("invalid value");
    return null;
  }
};

// function call
// getMarksPercentage(758, 1100,"Haider");

// getMarksPercentage(1001, 1100,"Shahzad")

// getMarksPercentage(753, 1100,"Sheraz");

// getMarksPercentage(1054, 1100,"Ghufran");


// getMarksPercentage(400,1000,"somethig");
// getPercentage("Shahzad",661,1200);
// let result = getPercentage("Zaid",600);,
let userName = prompt("Enter your Name");
let userTotalMarks = parseInt(prompt("Enter total marks",1100));
let userObtainedMarks = parseInt(prompt("Enter Obtained marks"));
let percentage = getPercentage(userName, userObtainedMarks ,userTotalMarks);
let grades = getGrades(percentage);
alert(`=============================\n Welcome to our Marks Program, ${userName} \n Total Marks: ${userTotalMarks} \n Obtained Marks: ${userObtainedMarks} \n Percentage: ${percentage}% \n Grade: ${grades} \n Thanks for using our program \n =============================`);
console.log(result2,grades);

/**
 * Assignments
 * input two numbers and show their addition and multplication
 * input the percentage and output the grade in A,B,C,F with fail safe
 * create a percentage function
 */