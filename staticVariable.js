
// static variable VS instance variable

class Student {
  
  constructor(name) {
    this.name = name; // Instance variable
  }
  
  static school = "Codewise"; // Static variable

}

let s1 = new Student("Anna"); // 

console.log(s1.name);        // Anna

console.log(Student.school); // Codewise
