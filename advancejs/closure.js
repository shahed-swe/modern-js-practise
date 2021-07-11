const stopwatch = () => {
    let count = 0;

    return () => {
        count++;
        return count;
    };
}

const clock = stopwatch();
console.log(clock())
console.log(clock())
console.log(clock())
console.log(clock())
console.log(clock())