// 如果不使用泛型的话
// function identity(arg: number): number {
//     return arg;
// }
// function identity2(arg: any): any {
//     return arg;
// }
// 类型缺失


// 使用泛型的时候
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString"); // 类型输出为string

// 使用泛型变量
function loggingIdentity<T>(arg: T[]): T[] {
    return arg;
}

// 泛型类型
let myIdentity: <T>(arg: T) => T = identity;
let myIdentity2: {<T>(arg: T): T} = identity;

// 泛型接口
interface GenericIdentityFn {
    <T>(arg: T): T;
}

let myIdentity3: GenericIdentityFn = identity;

interface GenericIdentityFn2<T> {
    (arg: T): T;
}
let myIdentity4: GenericIdentityFn2<number> = identity;

// 泛型类: 泛型类看上去与泛型接口差不多。 泛型类使用（ <>）括起泛型类型，跟在类名后面。


class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

// 泛型约束
interface Lengthwise {
    length: number;
}
// 现在这个参数被限制必须含有length
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); 
    return arg;
}
// 在泛型里使用类类型
function create<T>(c: {new(): T; }): T {
    return new c();
}
