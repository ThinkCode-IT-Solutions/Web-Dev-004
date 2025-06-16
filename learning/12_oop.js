console.log("Hello from the JavaScript OOP");

/**
 * Classes are the blueprint of some functionality
 * objects are derived out of class for using the functionality
 * class can only hold variables (property) and functions (method)
 * constructor is a method which run when object is being created from class
 */
class Car {
    name = undefined;
    model = undefined;
    constructor (carName, model){
        this.name = carName;
        this.model = model;
    }
    sound  = () => {
        console.log("vroom vroom");
    }

    printCarDetails = ()=>{
        let carDetails = `Car Name : ${this.name} \n Car Model : ${this.model} `;
        alert(carDetails);
    }
  
}



class Calculator {
    add = (x,y) => {
        let addition = x + y;
        console.log("Additoin result is " + addition);
    }
    subtract =  (x,y) => {
        if(x < y){
            let minus = y - x;
            console.log("Subtaction result is " + minus);
        }else{
            let minus = x - y;
            console.log("Subtaction result is " + minus);
        }
    }
}

// create object out of class
let camry = new Car("Toyota Camry",2002);
console.log(camry.name);
camry.printCarDetails();


let mehran = new Car("Suzuki Mehran",2018);
console.log(mehran.name);
mehran.printCarDetails();


let calculator = new Calculator();
calculator.add(2,3);
calculator.subtract(4,12);