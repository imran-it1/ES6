class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  test() {
    console.log("Hello");
  }
  exampleFunction() {
    let number = [1, 2, 3];
    number.find(() => {
      this.test();
    });
  }
}

let person = new Person("Imran", 35);
person.exampleFunction();
