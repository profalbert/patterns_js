class MyIterator {
  constructor(data) {
    this.index = 0
    this.data = data
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false,
          }
        } else {
          this.index = 0
          return {
            value: void 0, // что за строчка?
            done: true,
          }
        }
      },
    }
  }
}

// что за строчка?
function* generator(array) {
  let index = 0

  while (index < array.length) {
    yield array[index++] // что за строчка?
  }
}

const iterator = new MyIterator(['this', 'is', 'iterator'])
const gen = generator(['this', 'is', 'iterator'])

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

// for (const val of gen) {
//   console.log('Value: ', val)
// }

// for (const val of iterator) {
//   console.log('Value: ', val)
// }

// let array = ['this', 'is', 'iterator']
// for (let index = 0; index < array.length; index++) {
//   console.log('Value: ', array[index])
// }
