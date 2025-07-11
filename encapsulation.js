
// Encapsulation


class Student{

    constructor(){
      //  let name, id;
    }

    setName(name){ // Set value (name) to object Student
        this.name=name;
    }

    getName(){ // Get value (name) from object Student
        return this.name;
    }

    setID(id){
        this.id=id;
    }

    getID(id){
        return this.id;
    }

}

let student = new Student();
student.setName("Mary");
student.setID(1234);

console.log("Student name: ", student.getName());
console.log("Student ID:", student.getID());



