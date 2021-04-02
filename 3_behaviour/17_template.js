class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {
    return `program creation process`
  }

  work() {
    return `${this.name} fulfills ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} has a salary ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return `program creation process`
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return `testing program process`
  }
}

const developer = new Developer('Albert', 170000)
console.log(developer.getPaid())
console.log(developer.work())

console.log('')

const tester = new Tester('Elena', 100000)
console.log(tester.getPaid())
console.log(tester.work())
