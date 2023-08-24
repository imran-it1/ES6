const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 1, name: "lenovo", price: 40000 },
  { id: 2, name: "dell", price: 45000 },
  { id: 3, name: "hp", price: 40000 },
  { id: 4, name: "mac", price: 150000 },
];

// Map
const name = products.map((product) => product.name);
const price = products.map((product) => product.price);
// console.log(name);
// console.log(price);
// For Each
// products.forEach((p) => console.log(p.id));
//Filter
const komdami = products.filter((p) => p.price < 50000);
// console.log(komdami);

const expensive = products.filter((p) => p.price > 50000);
// console.log(expensive);

// Find

const lowestPrice = products.find((p) => p.price > 200000);
console.log(lowestPrice);

// Reduce

const totalPrice = products.reduce((pre, current) => pre + current.price, 0);
console.log(totalPrice);
