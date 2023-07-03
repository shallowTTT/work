# TypeScript 学习总结
## 1. TypeScript简介
TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，它可以编译成纯 JavaScript，可以运行在任何浏览器上。
## 2. 类型
使用 `:` 指定变量的类型。
```ts
let name: string = "Tom";
let age: number = 18;
```
## 3. 解构
可以从对象或数组中提取数据,赋值给变量
```ts
let person = {
  name: "Tom",
  age: 18
};

let { name, age } = person;

console.log(name); // Tom
console.log(age);  // 18
```
## 4. 函数
给函数添加类型注解，省略TS也会自动识别   
**基本定义**
```ts
function add(x: number, y: number): number {
  return x + y;
}

let result = add(1, 2); // OK
let result2 = add(1, "2"); // Error, "2" 不是number
```

**可选参数**
指函数参数可以传递一个值，或者不传递值，在参数名称后面加一个` ? `符号来实现,可选参数必须放到最后面
```ts
ts
function printMessage(message?: string) {
  if (message) {
    console.log(message);  
  }
}

printMessage(); 
printMessage("Hi!");

```

**默认参数**
给函数参数设置默认值。当函数被调用时，如果没有传递该参数或传递的参数为 `undefined`，则使用该参数的默认值。
```ts
function add(x: number, y = 10): number {
  return x + y;
}

add(5);  // 15
add(5, 20); // 25
```

**剩余参数**
将多个参数合并为一个数组。这个特性需要使用 `...` 语法来声明剩余参数，它只能在函数的最后。
```ts
function sum(...nums: number[]): number {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}

sum(1, 2, 3); // 6
```
**箭头函数**
省略function关键字，更简洁的函数定义；
函数体只有一行代码，可以省略 return 关键字将该行代码作为返回值；
```ts
const add = (a: number, b: number): number => a + b;
console.log(add(1, 2)); // 3
```

只有一个参数，则参数列表可以省略括号 ( )。
```ts
const greet = name => console.log(`Hello, ${name}!`);
greet('Tom'); //  "Hello, Tom!"
```

## 5. 类
使用 `class` 关键字定义类。
```ts
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let person = new Person("Tom", 18);
```
**访问修饰符**
- `public`: 公共的,随意访问。
- `private`: 私有的,只能类内部访问,可以在成员名称前面加上一个下划线 `_`
- `protected`: 受保护的,只能在类和子类中访问

**继承**
使用 extends 关键字继承父类。
```ts
class Employee extends Person {
  salary: number;
  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }
}
```

## 6. 模块
将相关的功能封装在一个独立的单元中，使用模块可以避免名称冲突问题。  
**模块导出**
使用 `export` 关键字，将一个变量或函数导出模块，让其他模块可以使用
```ts
//person.ts
export class Person {  
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
```
```ts
// Department.ts
import { Person } from "./person";
export class Department {
  employees: Person[];

}
```



## 7. 范型
使用 <> 指定类或函数支持的类型。可减少代码重复。
```ts  
function func<T>(input: T): T {
  return input;
}

let output1 = func<string>("aaaaaa"); 
let output2 = func<number>(100);     
console.log(typeof output1 );   //string
console.log(typeof output2 );   //number
```

## 8. 联合类型
管道(|)将变量设置多种类型，让值可以是几种类型之一。

```ts
let val: string | number;
val = 1
console.log(val) //1
val = "aaaa" 
console.log(val) //aaaa
```
## 9. 接口
`interface` 关键字来定义一个接口。它是一系列抽象方法的声明，它用于描述对象的形状，有哪些属性和方法.。实现接口使用`implements`。

```ts
interface IPerson{
    name: string;
    age: number;
}

class Person implements IPerson {
  name: string;
  age: number;
  speak() { console.log("Hello!"+ this.name); }
constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let person = new Person("Tom", 18);
person.speak(); //Hello!Tom
```