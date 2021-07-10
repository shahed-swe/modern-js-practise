const numbers = [1, 2, 3, 4, 5, 56, 7, 9, 8, 11, 12, 17]

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

const res = numbers.filter((elem) => {
    return elem % 2 == 0;
})


console.log(res)


numbers.forEach(element => {
    console.log(element)
});


const resnew = numbers.find(element => {
    return element % 2 == 0;
})
console.log(resnew)