// // старый подход
// function Server(name, ip) {
//   this.name = name
//   this.ip = ip
// }

// Server.prototype.getUrl = function () {
//   return `https://${this.ip}:8080`
// }

// новый подход
class Server {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }

  getUrl() {
    return `https://${this.ip}:8080`
  }
}

const aws = new Server('Aws German', '81.81.42.42')
console.log(aws.getUrl())
