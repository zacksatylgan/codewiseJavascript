
//Class, Object & Methods

class Car{

    // to initialize object
    constructor (brand, color){
        this.brand=brand;
        this.color=color;
    }

    //instance method or non-static method.
    drive(){
        console.log(this.brand, "is driving");
    }

    paint(newColor){
        this.color = newColor;
        console.log("My cars new color is: ", this.color);
    }


}

// Example create object car1, car2 from class Car
let car1 = new Car("Toyota", "red");
let car2 = new Car("Volvo", "white");

// How do we call the  instance method by object name
car1.drive();
car2.drive();
console.log("My car brand is: ", car1.brand);
console.log("My car brand is: ", car2.brand);



//console.log("My car color is before paint: ", car2.color);

car2.paint("blue");
console.log("My car color is after paint: ", car2.color);

