class Matrix3
{
  constructor(items)
  {
    this.items = items || [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
  }

  /**
   * Addition
   * 
   * @param {Matrix3} m 
   */
  add(m)
  {
    const a = this.items
    const c = []
    c[0] = a[0][0] + m[0][0], a[0][1] + m[0][1], a[0][2] + m[0][2]
    c[1] = a[1][0] + m[1][0], a[1][1] + m[1][1], a[1][2] + m[1][2]
    c[2] = a[2][0] + m[2][0], a[2][2] + m[2][2], a[2][2] + m[2][2]
    this.items = c
  }

  /**
   * 
   * @param {Matrix3} m 
   */
  sub(m)
  {
    const a = this.items
    const c = []
    c[0] = a[0][0] - m[0][0], a[0][1] - m[0][1], a[0][2] - m[0][2]
    c[1] = a[1][0] - m[1][0], a[1][1] - m[1][1], a[1][2] - m[1][2]
    c[2] = a[2][0] - m[2][0], a[2][2] - m[2][2], a[2][2] - m[2][2]
    this.items = c
  }

  /**
   * 
   * @param {Matrix3} m 
   */
  mul(m)
  {
    const a = this.items

    //rij 1
    const c_0_0 = a[0][0] * m[0][0] + a[0][1] * m[1][0] + a[0][2] * m[2][0]
    const c_0_1 = a[0][0] * m[0][1] + a[0][1] * m[1][1] + a[0][2] * m[2][1]
    const c_0_2 = a[0][0] * m[0][2] + a[0][1] * m[1][2] + a[0][2] * m[2][2]
    
    //rij 2
    const c_1_0 = a[1][0] * m[0][0] + a[1][1] * m[1][0] + a[1][2] * m[2][0]
    const c_1_1 = a[1][0] * m[0][1] + a[1][1] * m[1][1] + a[1][2] * m[2][1]
    const c_1_2 = a[1][0] * m[0][2] + a[1][1] * m[1][2] + a[1][2] * m[2][2]

    //rij 3
    const c_2_0 = a[2][0] * m[0][0] + a[2][1] * m[1][0] + a[2][2] * m[2][0]
    const c_2_1 = a[2][0] * m[0][1] + a[2][1] * m[1][1] + a[2][2] * m[2][1]
    const c_2_2 = a[2][0] * m[0][2] + a[2][1] * m[1][2] + a[2][2] * m[2][2]

    const c = [
      [c_0_0, c_0_1, c_0_2],
      [c_1_0, c_1_1, c_1_2],
      [c_2_0, c_2_1, c_2_2],
    ]
    
    this.items = c
  }
}

export default Matrix3