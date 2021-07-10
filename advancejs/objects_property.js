const student = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Peter", age: 25 },
    { id: 3, name: "Paul", age: 22 },
]


const names = student.map(x => {
    console.log(`
        id: ${x.id},
        name: ${x.name},
        age: ${x.age}
    `)
})