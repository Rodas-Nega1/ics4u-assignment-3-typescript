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

    userTriangle.validTriangle(sideA, sideB, sideC)
    console.log(`\n${userTriangle.getTriangleType()}`)

    userTriangle.trianglePerimeter(sideA, sideB, sideC)
    console.log(`\nThe perimeter is ${userTriangle.getPerimeter()} cm.`)

    userTriangle.triangleArea(sideA, sideB, sideC)
    console.log(`\nThe area is ${userTriangle.getArea()} cm².`)

    userTriangle.triangleAngles(sideA, sideB, sideC)
    console.log(`\nAngle A is ${userTriangle.getAngleA()}°.`)

    userTriangle.triangleAngles(sideA, sideB, sideC)
    console.log(`\nAngle B is ${userTriangle.getAngleB()}°.`)

    userTriangle.triangleAngles(sideA, sideB, sideC)
    console.log(`\nAngle C is ${userTriangle.getAngleC()}°.`)

    userTriangle.triangleHeights(sideA, sideB, sideC)
    console.log(`\nHeight A is ${userTriangle.getHeightA()} cm.`)

    userTriangle.triangleHeights(sideA, sideB, sideC)
    console.log(`\nHeight B is ${userTriangle.getHeightB()} cm.`)

    userTriangle.triangleHeights(sideA, sideB, sideC)
    console.log(`\nHeight C is ${userTriangle.getHeightC()} cm.`)

    userTriangle.incircleRadius()
    console.log(`\nThe incircle radius is ${userTriangle.getInradius()} cm.`)

    userTriangle.circumcircleArea(sideA, sideB, sideC)
    console.log(
      `\nThe circumcircle area is ${userTriangle.getCircumcircleArea()} cm².`
    )
  }
} catch (e) {
  console.log('\nThat is an invalid input.')
}

console.log('\nDone.')
