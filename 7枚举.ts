// 数字枚举, 后续自动增长
enum Direction {
    Up =1,
    Dowm,
    Left,
    Right
}
// 字符串
enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}


enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    kind: ShapeKind.Square,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100,
}

// 反向映射
enum Enum0 {
    A
}
let a = Enum0.A;
let nameOfA = Enum[a]; // "A"

// const枚举
const enum Enum2 {
    A = 1,
    B = A * 2
}
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
// 外部枚举
declare enum Enum {
    A = 1,
    B,
    C = 2
}
