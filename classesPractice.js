
// 


class Person {

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHi() {
    console.log("Hi, I'm " + this.name);
  }

  getAge(currentYear) {
    return currentYear - this.year;
  }
}

let person = new Person("Dana", 2004);
person.sayHi();                  // Hi, I'm Dana
console.log(person.getAge(2025)); // 21


let person2= new Person("Kate", 1999);
person2.sayHi();
console.log(person2.getAge(2025));


