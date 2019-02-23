//imports
import Vector2_test from './Test/Vector/Vector2_test.js'
import Vector3_test from './Test/Vector/Vector3_test.js'
import Vector4_test from './Test/Vector/Vector4_test.js'
import Matrix2_test from './Test/Matrix/Matrix2_test.js'

class Application
{
  constructor()
  {
    console.info('WebGL2 Demo')
    let test = prompt(
      'What would you like to test? \n' +
      'press "0" for all class test \n' +
      'press "1" for Vector 2D class test \n' +
      'press "2" for Vector 3D class test \n' +
      'press "3" for Vector 4D class test \n' +
      'press "4" for Matrix 2x2 class test \n' +
      'press "5" for Matrix 3x3 class test \n' +
      'press "6" for Matrix 4x4 class test \n'
  )
    switch(test)
    {
      case('0'):
        new Vector2_test
        new Vector3_test
        new Vector4_test
        new Matrix2_test
        break
      case('1'):
        new Vector2_test
        break
      case('2'):
        new Vector3_test
        break
      case('3'):
        new Vector4_test
        break
      case('4'):
        new Matrix2_test
        break
      default:
        new Application
    }
  }
}

export default Application