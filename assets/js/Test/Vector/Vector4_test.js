//imports
import Vector4 from '../../Library/Math/Vector/Vector4.js'

class Vector4_test
{
  constructor(){
    /* Vector 4 tests */
    console.log('------ Class Vector4 Tests --------')
    console.log(' ')

    //Norm function
    console.log('Check norm function:')
    const v_norm = new Vector4(1,2,3,4)
    console.log('Expected value of v(1,2,3,4) = 5.477')
    console.log('Got: ', v_norm.norm())
    console.log(' ')

    //Normalization function
    console.log('Check normalization function:')
    const v_normalize = new Vector4(3,1,2,0)
    console.log('Expected value of v(3,1,2) = v(0.801,0.267,0.534,0)')
    console.log('Got: ', v_normalize.normalization())
    console.log(' ')

    //Addition function
    console.log('Check add function:')
    const v_add1 = new Vector4(2,2,5,9)
    const v_add2 = new Vector4(3,2,-3, 3)
    v_add1.add(v_add2)
    console.log('Expected value of v(2,2,5,9) + v(3,2,-3, 3) = v(5,4,2,12)')
    console.log('Got: ', v_add1)
    console.log(' ')

    //Subtraction function
    console.log('Check subtraction function:')
    const v_sub1 = new Vector4(2,2,-3, 4)
    const v_sub2 = new Vector4(3,2,-7, -2)
    v_sub1.sub(v_sub2)
    console.log('Expected value of v(2,2,-3,4) - v(3,2,-7,-2) = v(-1,0,4,6)')
    console.log('Got: ', v_sub1)
    console.log(' ')

    //Scalar multiplication function
    console.log('Check scalar multiplication function:')
    const v_scal = new Vector4(-3,5,4,3)
    v_scal.scalar(2)
    console.log('Expected value of v(-3,5,4,3) * 2 = v(-6,10,8,6)')
    console.log('Got: ', v_scal)
    console.log(' ')

    //Dot product function
    console.log('Check dot product function:')
    const v_dot1 = new Vector4(-3,5,3,1)
    const v_dot2 = new Vector4(2,4,6,0)
    console.log('Expected value of v(-3,5,3,1) * v(2,4,6,0) = 32')
    console.log('Got: ', v_dot1.dot(v_dot2))
    console.log(' ')

    //Planar angle function
    console.log('Check planar angle function:')
    const v_plan1 = new Vector4(-3,5,2,2)
    const v_plan2 = new Vector4(2,4,2,0)
    console.log('Expected value of angle between v(-3,5,2,2) & v(2,4,2,0) = 0.968')
    console.log('Got: ', v_plan1.plan(v_plan2))
    console.log(' ')
  }
}

export default Vector4_test