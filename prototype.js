
// prototype

function student(){
    this.firstName="Lara";
    this.sudentID=1234;
}

// How do we add new property to our function by using prototype
student.prototype.lastName = "Kennedy";
student.prototype.gender="female";


let stu = new student();

console.log("First name:", stu.firstName);
console.log("Student ID:", stu.sudentID);
console.log("Last namme:", stu.lastName);
console.log("Gender:", stu.gender);

