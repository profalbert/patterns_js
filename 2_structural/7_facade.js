class Complaints {
  add(complaint) {
    return this.reply(complaint)
  }
}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}, ${customer}, ${details}`
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${id}, ${customer}, ${details}`
  }
}

class ComplaintReqistry {
  register(customer, type, details) {
    const id = Date.now()

    let complaint
    if (type === 'service') {
      complaint = new ServiceComplaints()
    } else if (type === 'product') {
      complaint = new ProductComplaints()
    }

    return complaint.add({ id, customer, details })
  }
}

const reqistry = new ComplaintReqistry()

console.log(reqistry.register('Albert', 'service', 'not available'))
console.log(reqistry.register('Elena', 'product', 'available'))
