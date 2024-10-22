function random(max) {
    const randomNum = Math.floor(Math.random() * (max + 1))
    return randomNum
}

function generateKey(lengthOfKey, SetOfChars) {
    const charsArray = Array.from(SetOfChars)
    const keyArray = []
    for (let i = 1; i <= lengthOfKey; i++) {
        const RanIn = random(SetOfChars.length - 1)
        keyArray.push(charsArray[RanIn])
    }
    return keyArray.join('')
}

const characters = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const numbersOnly = '0123456789'
const lettersOnly = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

const key1 = generateKey(10, characters)
const key2 = generateKey(3, numbersOnly)
const key3 = generateKey(3, lettersOnly)

console.log(key1)
console.log(key2)
console.log(key3) 
