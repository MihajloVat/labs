function Array(IP4v = '127.0.0.1') {
    this.IP4v = IP4v;
}

Array.prototype.reduce = function () {
    const arrayIP = this.IP4v.split('.')
    const slideIP = []
    for (let i = 0; i < arrayIP.length; i++) {
        let slide = arrayIP[i] << 8 * ((arrayIP.length - 1) - i)
        slideIP.push(slide)
    }
    const reducedIP = slideIP.reduce((acc, num) => acc + num)
    console.log(reducedIP)
}

const stringIP = '11.0.2.0'
const IPtoReduce1 = new Array(stringIP)
const IPtoReduce2 = new Array()
IPtoReduce1.reduce();
IPtoReduce2.reduce();
