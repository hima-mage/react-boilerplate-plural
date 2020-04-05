function myIterator(start, finish) {
    let index = start,
        count = 0
    return {
        next() {
            let result
            if (index < finish) {
                result = { value: index, done: false }
                index++
                count++
                return result
            } else if (index == finish) {
                return { value: index, done: true }
            }
        }


    }
}

let arr = myIterator(0, 10)
let res = arr.next()
while (!res.done) {
    console.log(res.value)
    res = arr.next()
}