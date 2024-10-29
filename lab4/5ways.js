function sum(...args) {

    if ([...args].some(char => typeof char !== 'number' || isNaN(char)) || 
        [...args].length === 0) {
        return 0
    }

    //1)
    let cont = 0
    for (let i = 0; i < [...args].length; i++) {
        cont += [...args][i]
    }

    //2)
    let cont2 = 0
    for (const num of [...args]) {
        cont2 += num
    }

    //3)
    let cont3 = 0
    let i = 0;
    while (i < [...args].length) {
        cont3 += [...args][i]
        i++
    }

    //4)
    let cont4 = 0
    i = 0;
    do {
        cont4 += [...args][i]
        i++
    } while (i < [...args].length)

    //5)
    const cont5 = [...args].reduce((acc, num) => acc + num)

    if ([cont2, cont3, cont4, cont5].every(value => value === cont)) {
        return cont
    }
    else {
        throw ': some results are incorrect'
    }
}

const a = sum(1, 2, 3)
const b = sum(0)
const c = sum()
const d = sum(1, -1, 1)
const e = sum(10, -1, -1, -1)
console.log(a, b, c, d, e)