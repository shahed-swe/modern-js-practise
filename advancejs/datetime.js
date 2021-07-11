const start = new Date()
let sum = 0;
for (let i = 0; i < 1000000000; i++) {
    sum++;
    console.log(sum)
}
const end = new Date();
console.log(end - start);