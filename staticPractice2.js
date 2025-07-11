
class Car {
  constructor(brand) {
    this.brand = brand; // instance variable
  }

  // instance method 
  drive() {
    console.log(this.brand + " is driving.");
  }
  // static method
  static info() {
    console.log("Cars have wheels and an engine.");
  }
}

let car1 = new Car("Toyota");
car1.drive();     // Toyota is driving.
// car1.info(); static method and we cant call it by Object name


Car.info();       // Cars have wheels and an engine.