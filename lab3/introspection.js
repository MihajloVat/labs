const iface = {
    m1: x => [x],
    m2: function (x, y, e, u, a, h) {
        return [x, y]
    },
    m3(x, y, o) {
        return [x, y, z];
    }
}

const introspected = []
for (const key in iface) {
    const funcInObj = iface[key]
    const innerArray = [key, funcInObj.length]
    introspected.push(innerArray)
}
console.dir(JSON.stringify(introspected))
