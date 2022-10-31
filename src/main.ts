/**
 * The program returns information about the triangle
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-10-29
 */

import Triangle from './triangle'
import promptSync from 'prompt-sync'

const prompt = promptSync()

try {
  // input
  const sideInputA = prompt('Enter side A (cm): ')
  const sideA = parseFloat(sideInputA)
  const sideInputB = prompt('Enter side B (cm): ')
  const sideB = parseFloat(sideInputB)
  const sideInputC = prompt('Enter side C (cm): ')
  const sideC = parseFloat(sideInputC)

  // output
  if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    console.log('\nThat is an invalid number.')
  } else if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    console.log('\nThat is an invalid input.')
  } else if (sideA + sideB < sideC) {
    console.log('This is an invalid triangle.')
  } else {
    const userTriangle = new Triangle(sideA, sideB, sideC)

    userTriangle.validTriangle()
    console.log(`\n${userTriangle.getTriangleType()}`)

    userTriangle.trianglePerimeter()
    console.log(`\nThe perimeter is ${userTriangle.getPerimeter()} cm.`)

    userTriangle.triangleSemiperimeter()
    console.log(`\nThe semiperimeter is ${userTriangle.getSemiperimeter()} cm.`)

    userTriangle.triangleArea()
    console.log(`\nThe area is ${userTriangle.getArea()} cm².`)

    userTriangle.angleA()
    console.log(`\nAngle A is ${userTriangle.getAngleA()}°.`)

    userTriangle.angleB()
    console.log(`\nAngle B is ${userTriangle.getAngleB()}°.`)

    userTriangle.angleC()
    console.log(`\nAngle C is ${userTriangle.getAngleC()}°.`)

    userTriangle.heightA()
    console.log(`\nHeight A, B, and C are ${userTriangle.getHeightA()} cm.`)

    userTriangle.heightB()
    console.log(`\nHeight A, B, and C are ${userTriangle.getHeightB()} cm.`)

    userTriangle.heightC()
    console.log(`\nHeight A, B, and C are ${userTriangle.getHeightC()} cm.`)

    userTriangle.incircleRadius()
    console.log(`\nThe incircle radius is ${userTriangle.getInradius()} cm.`)

    userTriangle.circumcircleArea()
    console.log(
      `\nThe circumcircle area is ${userTriangle.getCircumcircleArea()} cm².`
    )
  }
} catch (e) {
  console.log('\nThat is an invalid input.')
}

console.log('\nDone.')
