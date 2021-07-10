const doubleIT = num => num * 2;
console.log(doubleIT(2))

const add = (a, b) => a + b;
console.log(add(1, 2))

const givefive = () => 5;
console.log(givefive())

const arraysum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}
arraysum([1, 2, 3])