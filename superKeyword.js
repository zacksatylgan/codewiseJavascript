

// Super

class Animal { // parent class
  constructor(color) {
    this.color = color;         // Save color for every Animal
  }
  printColor() {
    console.log(this.color);    // Print the color
  }
}


class Dog extends Animal{ // child class

    constructor(color, food) {
        super(color);               // Call Animal's constructor, set color
        this.food = food;           // Set Dog's own property: food
    }

    eating() {
     console.log("Eating:", this.food);
    }

    display(){
        this.printColor();          // Inherited from Animal
        this.eating();              // Dog's own method
    }
//    printColor() {
//     console.log(this.color);    // Print the color
//   } 
}


let dog1 = new Dog("Golden clor", "Sausage");
dog1.printColor();
dog1.eating();

console.log("===============Display method==========")
dog1.display();





