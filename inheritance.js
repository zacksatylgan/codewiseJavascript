
// Single Inheritance

// class Animal{
//     eat() {
//         console.log("Animal eats");
//     }

// }

// class Dog extends Animal{ // extends will we inherit method eat() from Animal class(Parent class)
//     bark(){
//         console.log("Dog barks");
//     }

// }

// let dog1 = new Dog();
// dog1.bark();
// dog1.eat();




class Bank {// Parent class
  getRateOfInterest() {
    return "Bank interest rate varies";
  }
}


class Chase extends Bank { //Child class #1
  getRateOfInterest() { // Overrided method getRateOfInterest for Chase
    return "Chase interest rate is 7.5%";
  }
}

class BOFA extends Bank {//Child class #2
  getRateOfInterest() {//  Overrided method getRateOfInterest for BOFA
    return "BOFA interest rate is 5.2%";
  }
}

let chace = new Chase();
console.log( chace.getRateOfInterest());

let bofa = new BOFA();
console.log(bofa.getRateOfInterest() );




