class Car {
  constructor(model, price) {
    this.model = model
    this.price = price
  }
}

class CarFactory {
  constructor() {
    this.cars = []
  }

  create(model, price) {
    const candidate = this.getCar(model)
    if (candidate) {
      return candidate
    }
    const newCar = new Car(model, price)
    this.cars.push(newCar)
    return newCar
  }

  getCar(model) {
    return this.cars.find((car) => car.model === model)
  }

  getCars() {
    return this.cars
  }
}

const factory = new CarFactory()

const bmwX6 = factory.create('bmw', 60)
const audiRS7 = factory.create('audi', 80)
const bmw4 = factory.create('bmw', 40)
console.log(factory.getCars())
