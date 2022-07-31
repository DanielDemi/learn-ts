// 类型声明有let 和 const.. 


// 解构
// 数组
let input = [1, 2];
let [first, second] = input;
// swap variables
[first, second] = [second, first];
// 对象
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
