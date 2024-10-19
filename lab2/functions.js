const average = (a, b) => (a + b) / 2
const square = (x) => x * x
const cube = (x) => x * x * x

function calculate() {
    const array = []
    for (let i = 0; i <= 9; i++) {
        a = square(i)
        b = cube(i)
        result = average(a, b)
        array.push(result)
    }
    return array
}
console.dir(calculate())