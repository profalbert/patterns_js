class SimpleMembership {
  constructor(name) {
    this.name = name
    this.cost = 50
  }
}

class StandartMembership {
  constructor(name) {
    this.name = name
    this.cost = 150
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name
    this.cost = 500
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandartMembership,
    premium: PremiumMembership,
  }

  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type]
    const member = new Membership(name)
    member.type = type
    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    }
    return member
  }
}

const factory = new MemberFactory()

const members = [
  factory.create('Vlad', 'simple'),
  factory.create('Elena', 'standard'),
  factory.create('Albert', 'premium'),
  factory.create('Petr'),
]

members.forEach((member) => member.define())
