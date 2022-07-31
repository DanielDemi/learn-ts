// 接口
interface SquareConfig {
    color: string;
    width?: number; // 可选
    readonly x: number; // 只读 ，无法修改
    [propName: string]: any; // 额外拓展
}

// ReadonlyArray<T> 变成只读，不可修改
let a: number[] = [1,2,3,4]
let ro: ReadonlyArray<number> = a;
// ro[0] =  12; // error

// 函数类型
interface SearchFunc {
    (source: string, subString: string) : boolean
}

// 可索引的类型
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
// 类类型
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
