// function add(x: number, y: number): number {
//     return x + y;
// }

// let myAdd = function (x: number, y: number): number {
//     return x + y;
// }

// // 类型推断
// let myAdd2 = function (x: number, y: number): number {
//     return x + y;
// }
// let myAdd3: (baseValue: number, increment: number) => number =
//     function(x, y) { return x + y; };

// function buildName (firstName: string, lastName: string) {
//     return firstName 
// }

// 可选参数
function buildName (firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + lastName;
    } else {
        return firstName;
    }
}

// 默认参数 
function buildName2 (firstName: string, lastName = 'Smith') {
    return firstName + lastName;
}

// 剩余参数
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");