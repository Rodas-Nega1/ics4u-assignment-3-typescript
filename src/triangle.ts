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
  private triangleCheck = ' '
  private angleA = 0
  private angleB = 0
  private angleC = 0
  private perimeter = 0
  private semiperimeter = 0
  private area = 0
  private heightA = 0
  private heightB = 0
  private heightC = 0
  private inradius = 0
  private circumradius = 0
  private circleArea = 0
  private readonly pi = 3.14
  private readonly degree = 180

  constructor(sideA: number, sideB: number, sideC: number) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }

  // method that checks if lengths can make a certain type of triangle
  validTriangle(sideA: number, sideB: number, sideC: number): string {
    if (sideA === sideB && sideB === sideC && sideA === sideC) {
      return (this.triangleCheck = 'This is an equilateral triangle.')
    } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
      return (this.triangleCheck = 'This is an isosceles triangle.')
    } else if (
      sideA ** 2 + sideB ** 2 === sideC ** 2 ||
      sideC ** 2 + sideA ** 2 === sideB ** 2 ||
      sideC ** 2 + sideB ** 2 === sideA ** 2
    ) {
      return (this.triangleCheck = 'This is a right angle triangle.')
    } else {
      return (this.triangleCheck = 'This is a scalene triangle.')
    }
  }

  // setter method for perimeter
  trianglePerimeter(sideA: number, sideB: number, sideC: number): void {
    this.perimeter = sideA + sideB + sideC
  }

  // setter method for triangle area using Heron's formula
  triangleArea(sideA: number, sideB: number, sideC: number): void {
    this.semiperimeter = (sideA + sideB + sideC) / 2
    this.area = Math.sqrt(
      this.semiperimeter *
        (this.semiperimeter - sideA) *
        (this.semiperimeter - sideB) *
        (this.semiperimeter - sideC)
    )
  }

  // setter method for angles using rearranged cosine law
  triangleAngles(sideA: number, sideB: number, sideC: number): void {
    this.angleA =
      Math.acos((sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC)) *
      (this.degree / this.pi)
    this.angleB =
      Math.acos((sideA ** 2 + sideC ** 2 - sideB ** 2) / (2 * sideA * sideC)) *
      (this.degree / this.pi)
    this.angleC =
      Math.acos((sideA ** 2 + sideB ** 2 - sideC ** 2) / (2 * sideA * sideB)) *
      (this.degree / this.pi)
  }

  // setter method to find heights
  triangleHeights(sideA: number, sideB: number, sideC: number): void {
    this.heightA = (2 * this.area) / sideA
    this.heightB = (2 * this.area) / sideB
    this.heightC = (2 * this.area) / sideC
  }

  // setter method to calculate radius of incircle of a triangle
  incircleRadius(): void {
    this.inradius = this.area / this.semiperimeter
  }

  // setter method for circumcircle area of triangle
  circumcircleArea(sideA: number, sideB: number, sideC: number): void {
    this.circumradius =
      (sideA * sideB * sideC) / (4 * this.inradius * this.semiperimeter)
    this.circleArea = this.pi * this.circumradius ** 2
  }

  // getter method returns the type of triangle
  getTriangleType(): string {
    return this.triangleCheck
  }

  // getter method returns the perimeter
  getPerimeter(): number {
    return Math.floor(this.perimeter)
  }

  // getter method returns the area
  getArea(): number {
    return Math.floor(this.area)
  }

  // return angle A
  getAngleA(): number {
    return Math.floor(this.angleA)
  }

  // return angle B
  getAngleB(): number {
    return Math.floor(this.angleB)
  }

  // return angle C
  getAngleC(): number {
    return Math.floor(this.angleC)
  }

  // return height A
  getHeightA(): number {
    return Math.floor(this.heightA)
  }

  // return height B
  getHeightB(): number {
    return Math.floor(this.heightB)
  }

  // return height C
  getHeightC(): number {
    return Math.floor(this.heightC)
  }

  // return radius of incircle of triangle
  getInradius(): number {
    return Math.floor(this.inradius)
  }

  // return circumcircle area of triangle
  getCircumcircleArea(): number {
    return Math.floor(this.circleArea)
  }
}

// export class for the main to use its methods
export = Triangle
