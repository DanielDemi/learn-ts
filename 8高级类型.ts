// 交叉类型
// A & B & C同时拥有以下几种类型
// 联合类型： 我们只能访问此联合类型的所有类型里共有的成员。
// A | B
function padLeft(value: string, padding: string | number) {
    // ...
}

interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
}

// let pet = getSmallPet();
// pet.layEggs(); // okay
// pet.swim();    // errors

let pet = getSmallPet();

if ((<Fish>pet).swim) { // 需要类型断言
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}

// 用户自定义的类型保护
// 谓词为 parameterName is Type这种形式

function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

// 'swim' 和 'fly' 调用都没有问题了

if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
// 索引类型
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}
interface Person {
    name: string;
    age: number;
}
let person: Person = {
    name: 'Jarid',
    age: 35
};
let personProps: keyof Person; 

// 索引类型查询操作符 keyof T： 对于任何类型 T， keyof T的结果为 T上已知的公共属性名的联合
// 索引访问操作符 T[K]

// 内置条件类型
// 
type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"；
type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "a" | "c"
type T04 = NonNullable<string | number | undefined>;  // string | number
type T10 = ReturnType<() => string>;  // string
type T21 = InstanceType<any>;  // any
