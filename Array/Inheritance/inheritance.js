// By Using extend sub class can use some property from super class

// Super Class
class Vahicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("Gari chole na chole na chole na re");
  }
}

const gari = new Vahicle("Thela Gari", 12000);
console.log(gari);

// Sub Class
class Bus extends Vahicle {
  constructor(name, price, seat, tickerPrice) {
    super(name, price);
    /**
     * Subidha jeta holo---
     * Er jonno this.name and this.price ta lekha laglo na
     */
    this.seat = seat;
    this.tickerPrice = tickerPrice;
  }
}

const hanif = new Bus("Hanif", 1200000, 45, 650);
// console.log(hanif);

class Truck extends Vahicle {
  constructor(name, price, load, speed) {
    super(name, price);
    this.load = load;
    this.speed = speed;
  }
}

const volvo = new Truck("Volvo", 300000, "12Ton", "55KM");
console.log(volvo);
