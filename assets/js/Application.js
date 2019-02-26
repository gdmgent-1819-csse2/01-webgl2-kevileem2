//imports
import Vector2_test from './Test/Vector/Vector2_test.js'
import Vector3_test from './Test/Vector/Vector3_test.js'
import Vector4_test from './Test/Vector/Vector4_test.js'
import Matrix2_test from './Test/Matrix/Matrix2_test.js'
import Matrix3_test from './Test/Matrix/Matrix3_test.js'
import Matrix4_test from './Test/Matrix/Matrix4_test.js'

class Application
{
  constructor()
  {
    // All elements from the DOM
    const allEl = document.getElementById('all')
    const vector2El = document.getElementById('vector2')
    const vector3El = document.getElementById('vector3')
    const vector4El = document.getElementById('vector4')
    const matrix2El = document.getElementById('matrix2')
    const matrix3El = document.getElementById('matrix3')
    const matrix4El = document.getElementById('matrix4')

    /**
     * Add event listeners for all the buttons
     */
    allEl.addEventListener('click', () => {
      new Vector2_test
      new Vector3_test
      new Vector4_test
      new Matrix2_test
      new Matrix3_test
      new Matrix4_test
    })

    vector2El.addEventListener('click', () => {
      new Vector2_test
    })

    vector3El.addEventListener('click', () => {
      new Vector3_test
    })

    vector4El.addEventListener('click', () => {
      new Vector4_test
    })

    matrix2El.addEventListener('click', () => {
      new Matrix2_test
    })

    matrix3El.addEventListener('click', () => {
      new Matrix3_test
    })

    matrix4El.addEventListener('click', () => {
      new Matrix4_test
    })
  }
}

export default Application