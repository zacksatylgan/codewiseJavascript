
//Multilevel Inheritance


class Animal{
    eat() {
     console.log("Animal eats");
   }
}

class Dog extends Animal{
    bark() {
     console.log("Dog barks");
   }

//    eat() {
//      console.log("Animal eats");
//    }
}

class Puppy extends Dog{
    play() {
     console.log("Puppy plays");
   }

}


let dog = new Dog();
dog.bark();
dog.eat();
//dog.play();

console.log("======Puppy class=======");

let puppy = new Puppy();
puppy.bark();
puppy.eat();
puppy.play();


