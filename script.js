//complete this code
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

// Square class extends Rectangle
class Square extends Rectangle {
  constructor(side) {
    // Calling parent constructor with side as both width and height
    super(side, side);
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this._width; // or 4 * this.width
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
