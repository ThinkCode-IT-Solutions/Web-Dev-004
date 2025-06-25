console.log("Welcome to the third part in DOM manuplation");

let clickerButton = document.querySelector("#cta");
console.log(clickerButton);

// clickerButton.addEventListener("click", () => {
//   alert("you have clicked the button");
//   clickerButton.style.backgroundColor = "blue";
//   clickerButton.style.color = "white";
// });

let doubleClickFunc = ()=>{
    console.log("you have double clicked on the button");
}
clickerButton.addEventListener("dragstart", doubleClickFunc)




let image = document.querySelector("img");
console.log(image);

image.addEventListener("drag",()=>{
    console.log("why you are dragging the image");
})
image.addEventListener("dragend", ()=> {
    console.log("Thank God, the drag ended");
})


let paraBox = document.querySelector("#para1");
paraBox.addEventListener("dragover",()=>{
    paraBox.style.backgroundColor = "red";
    console.log("no dragging over this box");
})

let pageBody = document.querySelector("body");
pageBody.addEventListener("keydown", (event) => {
    // console.log(`${event.key} key is pressed`);
    if(event.key == "K" && event.shiftKey ){
        console.log("Welcome to the Secret World of SPies");
    }
    

})


let x = document.querySelector(".name");
input.addEventListener("blur", (e) => {
    console.log("you have clicked the input tag it is now focus");
    console.log(e);
    e.target.style.padding = ".7rem 1rem";
    e.target.style.backgroundColor = "green";
    e.target.style.color = "white";
    pageBody.style.backgroundColor = "black";
})