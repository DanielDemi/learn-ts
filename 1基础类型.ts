// 布尔值: true/flase
let isDone: boolean = false;
// 数字: 浮点、二进制和八进制
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
// 字符串 单引号或双引号/模版字符串
let Name:string = "bob";
Name = 'sss'
let age = `sdsd`;
// 数组
let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
// 元组 Tuple
let x: [string, number]
x = ['aa', 11];
// x = [10, 'hello']; // Error
// 枚举 enum
enum Color {Red = 1, Green=3, Blue= 5};
let c: Color = Color.Blue;
// any是任意类型
let list3: any[] = [1, true, "free"];

list[1] = 100;
// void 没有类型
function warnUser () : void {
    console.log('asdhsa')
}

// null和undefined是所有类型的子类型
let u: undefined = undefined;
let n: null = null;

// never 类型表示的是那些永不存在的值的类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

// Object
function createObject(o: object | null): void {};
createObject({prop: 0})

// 类型断言
let someValue: any = "this is a string";

let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
