//imports
import Matrix2 from '../../Library/Math/Matrix/Matrix2.js'

class Matrix2_test
{
  constructor(){
    /* Matrix 2x2 tests */
    console.log('------ Class Matrix 2x2 Tests --------')
    console.log(' ')

    //Addition function
    console.log('Check add function:')
    const m_add1 = new Matrix2
    const m_add2 = new Matrix2([
      [1,2],
      [2,3]
    ])
    m_add1.add(m_add2)
    console.log('Expected value of m([0,0],[0,0]) + m([1,2],[2,3]) = m([1,2],[2,3])')
    console.log('Got: ', m_add1)
    console.log(' ')

    //Subtraction function
    console.log('Check subtraction function:')
    const m_sub1 = new Matrix2
    const m_sub2 = new Matrix2([
      [1,2],
      [2,3]
    ])
    m_sub1.sub(m_sub2)
    console.log('Expected value of m([0,0],[0,0]) - m([1,2],[2,3]) = m([-1,-2],[-2,-3])')
    console.log('Got: ', m_sub1)
    console.log(' ')

    //Multiplication function
    console.log('Check Multiplication function:')
    const m_mul1 = new Matrix2([
      [3,4],
      [4,3]
    ])
    const m_mul2 = new Matrix2([
      [1,2],
      [2,3]
    ])
    m_mul1.mul(m_mul2)
    console.log('Expected value of m([3,4],[4,3]) * m([1,2],[2,3]) = m([11,18],[10,17])')
    console.log('Got: ', m_mul1)
    console.log(' ')
  }
}

export default Matrix2_test