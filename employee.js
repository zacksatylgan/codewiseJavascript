
// Objects with Methods

let employee =
{
    firstname: "Scott",
    empID: 12345,
    job: "QA Engineer",
    basicSalary: 100000,
    bonus: function() {
        return (this.basicSalary * 10) / 100;
    }
}

console.log(employee.firstname);
console.log(employee.basicSalary);
console.log(employee.bonus());
