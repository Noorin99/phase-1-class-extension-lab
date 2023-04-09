// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((item, acc) => {
      return (acc += item);
    }, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.sides[0] + this.sides[1] <= this.sides[2]) {
      return false;
    } else if (this.sides[1] + this.sides[2] <= this.sides[0]) {
      return false;
    } else if (this.sides[0] + this.sides[2] <= this.sides[1]) {
      return false;
    } else {
      return true;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (
      this.sides[0] === this.sides[1] &&
      this.sides[2] === this.sides[3] &&
      this.sides[2] === this.sides[1]
    ) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this.sides[0] * this.sides[0];
  }
}

// const square1 = new Square([2, 2, 2, 2]);
// console.log(square1.isValid);
