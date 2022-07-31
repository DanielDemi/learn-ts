// function greeter (person: string) {
//     return "hello, " + person;
// }
// let user = "JANE User";
// document.body.innerHTML = greeter(user);
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fulllName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + " " + person.lastName;
}
var user = new Student("jane", 'M.', 'User');
document.body.innerHTML = greeter(user);
