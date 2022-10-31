/**
 * This class calculates information about a triangle.
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-10-28
 */

class Triangle {
  // fields required for various mathematical formulas
  private readonly sideA: number
  private readonly sideB: number
  private readonly sideC: number

  constructor(sideA: number, sideB: number, sideC: number) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }

  // method that checks if lengths can make a certain type of triangle
  validTriangle(): string {
    let triangleCheck = " "
    if (this.sideA === this.sideB && this.sideB === this.sideC && this.sideA === this.sideC) {
      return (triangleCheck = 'This is an equilateral triangle.')
    } else if (this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC) {
      return (triangleCheck = 'This is an isosceles triangle.')
    } else if (
      this.sideA ** 2 + this.sideB ** 2 === this.sideC ** 2 ||
      this.sideC ** 2 - this.sideA ** 2 === this.sideB ** 2 ||
      this.sideC ** 2 - this.sideB ** 2 === this.sideA ** 2
    ) {
      return (triangleCheck = 'This is a right angle triangle.')
    } else {
      return (triangleCheck = 'This is a scalene triangle.')
    }
  }

  // setter method for perimeter
  trianglePerimeter(): number {
    let perimeter = 0
    return perimeter = this.sideA + this.sideB + this.sideC
  }

  // setter method for semiperimeter
  triangleSemiperimeter(): number {
    let semiperimeter = 0
    return semiperimeter = (this.sideA + this.sideB + this.sideC) / 2
  }

  // setter method for triangle area using Heron's formula
  triangleArea(): number {
    let area = 0
    return area = Math.sqrt(
      this.triangleSemiperimeter() *
        (this.triangleSemiperimeter() - this.sideA) *
        (this.triangleSemiperimeter() - this.sideB) *
        (this.triangleSemiperimeter() - this.sideC)
    )
  }

  // setter method for angle B using rearranged cosine law
  angleA(): number {
      let angleA = 0 
      let pi = 3.14
      let degree = 180
    return angleA =
      Math.acos((this.sideB ** 2 + this.sideC ** 2 - this.sideA ** 2) / (2 * this.sideB * this.sideC)) *
      (degree / pi)
  } 

  // setter method for angle B using rearranged cosine law
  angleB(): number {
    let angleB = 0 
    let pi = 3.14
    let degree = 180

    return angleB =
      Math.acos((this.sideA ** 2 + this.sideC ** 2 - this.sideB ** 2) / (2 * this.sideA * this.sideC)) *
      (degree / pi)
  } 

  // setter method for angle C using rearranged cosine law
  angleC(): number {
    let angleC = 0 
    let pi = 3.14 
    let degree = 180

    return angleC =
      Math.acos((this.sideA ** 2 + this.sideB ** 2 - this.sideC ** 2) / (2 * this.sideA * this.sideB)) *
      (degree / pi)
  }

  // setter method to find height A
  heightA(): number {
    let heightA = 0 
    return heightA = (2 * this.triangleArea()) / this.sideA
  }

  // setter method to find height B
  heightB(): number {
    let heightB = 0 
    return heightB = (2 * this.triangleArea()) / this.sideB
  }

  // setter method to find height C
  heightC(): number {
    let heightC = 0 
    return heightC = (2 * this.triangleArea()) / this.sideC
  }

  // setter method to calculate radius of incircle of a triangle
  incircleRadius(): number {
    let inradius = 0
    return inradius = this.triangleArea() / this.triangleSemiperimeter()
  }

  // setter method for circumcircle area of triangle
  circumcircleArea(): number {
    let circumradius = 0 
    let circleArea = 0 
    let pi = 3.14
    circumradius =
      (this.sideA * this.sideB * this.sideC) / (4 * this.incircleRadius() * this.triangleSemiperimeter())
    return circleArea = pi * circumradius ** 2
  }

  // getter method returns the type of triangle
  getTriangleType(): string {
    return this.validTriangle()
  }

  // getter method returns the perimeter
  getPerimeter(): number {
    return Math.floor(this.trianglePerimeter())
  }

  // getter method returns the semiperimeter
  getSemiperimeter(): number {
    return Math.floor(this.triangleSemiperimeter())
  }

  // getter method returns the area
  getArea(): number {
    return Math.floor(this.triangleArea())
  }

  // return angle A of the triangle
  getAngleA(): number {
    return Math.floor(this.angleA())
  }

  // return angle B of the triangle
  getAngleB(): number {
    return Math.floor(this.angleB())
  }

  // return angle C of the triangle
  getAngleC(): number {
    return Math.floor(this.angleC())
  }

  // return height A of the triangle
  getHeightA(): number {
    return Math.floor(this.heightA())
  }

  // return height B of the triangle
  getHeightB(): number {
    return Math.floor(this.heightB())
  }

  // return height C of the triangle
  getHeightC(): number {
    return Math.floor(this.heightC())
  }

  // return radius of incircle of triangle
  getInradius(): number {
    return Math.floor(this.incircleRadius())
  }

  // return circumcircle area of triangle
  getCircumcircleArea(): number {
    return Math.floor(this.circumcircleArea())
  }
}

// export class for the main to use its methods
export = Triangle
