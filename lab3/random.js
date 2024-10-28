function random(min, max) {
    if (max === undefined) {
        max = min
        min = 0
    }
    let tempo = Math.random() * (max - min + 1) //+ min
    randomInt = Math.floor(tempo) + min
    return randomInt
}

console.log(random(5, 10))
console.log(random(10))