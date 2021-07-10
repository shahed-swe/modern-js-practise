const numbers = [1, 2, 3, 45, 56]

// const resutl = []

// for (let i = 0; i < numbers.length; i++) {
//     resutl.push(numbers[i] ** 2)
// }

// console.log(resutl)


// old ways
numbers.map((elem, index, array) => {
    console.log(elem ** 2, index, array[index])
})


// storing into a value
const result = numbers.map((elem, index, array) => {
    return elem ** index + array[index];
})

console.log(result)