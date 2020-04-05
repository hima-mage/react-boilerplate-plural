// let arr = [0, 1, 2, 3, 4, 5]
// const it = arr[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())



let map = new Map()
map.set('key1', 'val1')
map.set('key2', 'val2')
map.set('key3', 'val3')
const mapIterator = map[Symbol.iterator]()
console.log(mapIterator.next())
console.log(mapIterator.next())