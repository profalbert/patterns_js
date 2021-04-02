class User {
  constructor(name) {
    this.name = name
    this.room = null
  }

  send(message, to) {
    this.room.send(message, this, to)
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`)
  }
}

class ChatRoom {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user
    user.room = this
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from)
    } else {
      Object.keys(this.users).forEach((key) => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from)
        }
      })
    }
  }
}

const albert = new User('Albert')
const vladilen = new User('Vladilen')
const elena = new User('Elena')

const room = new ChatRoom()

room.register(albert)
room.register(vladilen)
room.register(elena)

vladilen.send('Hello!', elena)
elena.send('Hi-hi!', albert)
albert.send('Hey there!')
