// function greeter (person: string) {
//     return "hello, " + person;
// }

// let user = "JANE User";

// document.body.innerHTML = greeter(user);

class Student {
    fulllName: string;
    constructor (public firstName, public middleInitial, public lastName) {
        this.fulllName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter (person: Person) {
    return 'Hello, ' + person.firstName + " " + person.lastName;
}

let user = new Student("jane", 'M.', 'User');
document.body.innerHTML = greeter(user);