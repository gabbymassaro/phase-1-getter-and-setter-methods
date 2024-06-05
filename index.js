class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  set diameter(diameter) {
    this.radius = diameter * 2
  }

  get circumference() {
    return this.diameter * Math.PI
  }

  set circumference(circumference) {
    this.radius = (circumference * Math.PI)
  }

  get area() {
    return (this.radius * this.radius) * Math.PI
  }

  set area(area) {
    this.radius = (Math.sqrt(area)) * Math.PI
  }

}

let test = new Circle(6)
console.log("Radius: ", test.radius)
console.log("Diameter: ", test.diameter)
console.log("Circumference: ", test.circumference)
console.log("Area: ", test.area)