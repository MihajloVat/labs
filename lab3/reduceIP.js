const IPreducer = (IP4v = '127.0.0.1') => {
    const arrayIP = IP4v.split('.')
    const result = arrayReduce(arrayIP)
    return result
}

const arrayReduce = (arrayIP) => {
    const slideIP = []
    for (let i = 0; i < arrayIP.length; i++) {
        let slide = arrayIP[i] << 8 * ((arrayIP.length - 1) - i)
        slideIP.push(slide)
    }
    const reducedIP = slideIP.reduce((acc, num) => acc + num)
    return reducedIP
}

const stringIP = '11.0.2.0'
console.log(IPreducer(stringIP))
console.log(IPreducer())