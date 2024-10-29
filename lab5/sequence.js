const seq = (func) => (g) => typeof g === "number" ? func(g) : seq(x => func(g(x)))

const a = seq(x => x + 7)(x => x * 2)(5)
const b = seq(x => x + 7)(x => x * 2)(x => x * 2)(2)
const c = seq(x => x + 7)(x => x - 3)(x => x + 100)(x => x * 0.5)(3)

console.log(a)
console.log(b)
console.log(c)