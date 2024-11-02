const uneq = (array) => {
    set = new Set(array)
    return Array.from(set)
}

const array = [1, 2, 3, 2, 3, 4];
const names = ['mike', 'dasha', 'mike', 'anatoliy', 'varvara']

const res1 = uneq(array)
const res2 = uneq(names)

console.log(res1)
console.log(res2)