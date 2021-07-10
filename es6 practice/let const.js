const name = "shahed"
    // name = "Hello"  you can't change this
console.log(name)

// we can change array values like this
const numbers = [12, 34]
numbers[1] = 34;
numbers.push(12)
    // numbers = ['asdfas'] we can't change entire array
console.log(numbers)
    // we can see with objects

const values = { name: "shahed", age: 12 }
values.name = 'azad'
console.log(values)

let age = 12
age = 34
console.log(age)
    // we can change the value of a variable with let
    // also this is a scope variable
    // for an example

for (var i = 0; i <= 10; i++) {
    console.log(i);
}
console.log(i)

// 
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
// console.log(i)  we can't access this like this
// so let is not accessable outside of a scope