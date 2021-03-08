const Shape = require('./shape');

class Rectangle extends Shape {
  constructor(sideA, sideB) {
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    super(area, perimeter);
    this.sideA = sideA;
    this.sideB = sideB;
  }
}

const rectangle = new Rectangle(12, 9);
console.log(rectangle.sideA);
console.log(rectangle.sideB);
console.log(rectangle.area);
console.log(rectangle.perimeter);
rectangle.printInfo();
