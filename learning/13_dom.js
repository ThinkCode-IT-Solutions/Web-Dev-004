console.log("Welcome to the DOM manuplation");

/**
 * DOM Manuplation
 * JavaScript call html the Document
 * in the first step , we learn how to grab elements
 */



let runPercentageFunc = () => {
    let name = prompt("Enter your Name");
    let totalMarks = parseInt(prompt("Enter Your Total Marks in Matric",1100));
    let obtainedMarks = parseInt(prompt("Enter Your Obtained Marks in Matric"));

    let percentage = (obtainedMarks/totalMarks)*100;
    percentage =  Math.round(percentage);

    alert("your matric percentage is " + percentage+ "%");
}

let mainButton = document.getElementById("cta");

console.log(mainButton);
mainButton.innerHTML = "<u>Dont Click me</u>"
mainButton.innerText = "Percentage";
mainButton.addEventListener("dblclick",runPercentageFunc);