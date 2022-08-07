/**
 * public 公共
 * private 无法被外部访问
 * protected 保护的，只有继承（派生）类可以访问
 * readonly 只读属性必须在声明时或构造函数里被初始化
 * static 静态类型，直接基于类取值
 */
class Animal {
    public name: string;
    private _name: string;
    protected __name: string;
    static origin = {x: 0, y: 8}
    readonly __age = 10;
    public constructor (theName: string) {
        this.name =theName;
    }
    public move (dis: number) {
        console.log(`aaa:${dis}, ${Animal.origin.x}`)
    }
}
// 存储器
// get和set设置
let passcode = 'secret passcode';
class Employee {
    private _fullName: string;

    get fullName() :string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode === 'secret passcode') {
            this._fullName = newName;
        } else {
            console.log("error: xxx")
        }
    }
}
let employee = new Employee();
employee.fullName = 'Bob Smith';
if (employee.fullName) {
    console.log(employee.fullName);
}
// 抽象类 abstract，不被实例化，继承的派生类需要实现全部抽象方法
abstract class Animals {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}

// 把类当做接口使用
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}
let point3d: Point3d = {x: 1, y: 2, z: 3};
