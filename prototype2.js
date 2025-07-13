
// How do we add new property to our class


class Employee{

    constructor(firstName, empID){
        this.fisrName=firstName;
        this.empID=empID;
    }

    // function display to properies from constractor
    // display(){
    //     console.log("Employee First Name:", this.fisrName);
    //     console.log("ID:", this.empID);
    // }

}

Employee.prototype.display = function(){
        console.log("Employee First Name:", this.fisrName);
        console.log("ID:", this.empID);
        console.log("Salary:", this.salary);
};


Employee.prototype.salary = 100_000;

//Create new object Employee
let emp1 = new Employee("Naomi", 7463);


// console.log("Employee first name:", emp1.fisrName);
// console.log("Employee id:", emp1.empID);
// console.log("Salary:", emp1.salary);

emp1.display();


console.log("=====Emp2==================")
let emp2 = new Employee("Jackson", 1234);

emp2.display();
