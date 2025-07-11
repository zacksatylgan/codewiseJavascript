
//static keyword in JavaScript

class Calculator{

    // Declare static variable
    static appName ="This simple calculator";

    // statuc method
    static add(a, b){
        return  a + b;
    }

    // statuc method
    static multiply(x, y){
        return x * y;
    }

}

//=================

// let calc = new Calculator();
// calc.add(calc.);

let c = 10;
let d = 5;

console.log(Calculator.add(c,d) );
console.log(Calculator.multiply(c,d));
console.log(Calculator.appName);

