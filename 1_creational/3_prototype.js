const car = {
  wheels: 4,
  init() {
    console.log(`I have ${this.wheels} wheels, my owner ${this.owner}`)
  },
}

const carWithOwner = Object.create(car, {
  owner: { value: 'Albert' }, // value в итоге опускается, это такой нюанс
})

carWithOwner.init()
console.log(carWithOwner.__proto__ === car)
