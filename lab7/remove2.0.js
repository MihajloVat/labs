removeElement = (arrayName, ...items) => {
    for (const item of items) {
        index = arrayName.indexOf(item)
        if (index === -1) continue
        arrayName.splice(index, 1)
    }
    return 0
}


const array = [1, 2, 3, 4, 5, 6, 7];
const names = ['mike', 'dasha', 'anatoliy', 'varvara']
removeElement(array, 4, 3, 2, 1, 0);
removeElement(names, 'anatoliy', 'varvara', 'anton');
console.log(array);
console.log(names);