const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 1, name: "lenovo", price: 40000 },
  { id: 2, name: "dell", price: 45000 },
  { id: 3, name: "hp", price: 40000 },
  { id: 4, name: "mac", price: 150000 },
];

// Similar jinish make korte class use kora hoy
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  print() {
    console.log(`My price is ${this.price}`);
  }
}

const lenovo = new Product(1, "lenovo", 65000);
// console.log(lenovo);
// lenovo.print();

// Let creat some Teacher

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log(`${this.name} is teaching us ${this.subject}`);
  }
}

const sohel = new Teacher("Sohel Sir", "Chemistry");
console.log(sohel);
sohel.lecture();

const rana = new Teacher("Ranaaa Sir", "Biology");
console.log(rana);
rana.lecture();
