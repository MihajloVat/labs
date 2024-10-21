function range(start = 15, end = 30) {
    const wholeNums = []
    let num = start
    for (num; num <= end; num++) {
        wholeNums.push(num)
    }
    return wholeNums
}
console.log(range())


function rangeOdd(start = 15, end = 30) {
    const oddNums = []
    let num = start
    for (num; num <= end; num++) {
        if (num % 2 === 0) continue
        oddNums.push(num)
    }
    return oddNums
}
console.log(rangeOdd())
