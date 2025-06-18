console.log("Welcome to the second dom class");


/**
 * DOM 2 => grabbing elements in a document
 * there are 3 basic ways to grab a element in the document
 * 1: by tag name ✅
 * 2: by class name ✅
 * 3: by id name ✅
 * there are two ways to grab element
 * old format: getElementById etc
 * es6 format : querySelector (. for class , # for id , name for tag)
 * 
 * What can be applied to a document element
 * innerText
 * innerHTML
 * classList
 * style
 * 
 * 
 */



let clickerButton = document.getElementById("clicker");
clickerButton.innerText = "Clicked"


let paragraph = document.getElementsByClassName("para");

let paragraphTags = document.getElementsByTagName("p");
paragraphTags[0].classList.remove("para");
paragraphTags[1].innerText = "Kr dia change";
paragraphTags[1].classList.add("para");
console.log(paragraphTags)


//? newer ES6 grabbing functions

let clickerButton = document.querySelector("#clicker");
console.log(clickerButton);
clickerButton.innerText = "Checked";


let para = document.querySelector(".para");
console.log(para);
para.classList.add('c-red');


let division = document.querySelector("div");
console.log(division);

division.style.backgroundColor = "green";
paragraph[0].innerText = "Checked";


let allDivisions = document.querySelectorAll(".para");
console.log(allDivisions)
console.log(paragraph[1]);