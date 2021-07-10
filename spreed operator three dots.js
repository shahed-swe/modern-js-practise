const age = [12, 34, 43, 6, 89]
const age2 = [23, 56, 78, 12, 34]
const age3 = [2, 3, 4, 5, 6]

const agesum = age.concat(age2).concat(age3).concat([3, 34])
console.log(agesum)


const newage = [...age, ...age2, 5, 6, ...age3]
console.log(newage)


const maximum = Math.max(age)
console.log(maximum) //this is showing us NaN

// to do the operation we can do like this
const maximum2 = Math.max(...age)
console.log(maximum2) //this is showing us 89