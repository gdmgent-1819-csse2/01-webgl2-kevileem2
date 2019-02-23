class Matrix2
{
  constructor(items)
  {
    this.items = items || [
      [0, 0],
      [0, 0],
    ]
  }

  /**
   * Addition
   * 
   * @param {Matrix2} m 
   */
  add(m)
  {
    const a = this.items
    m = m.items
    const c = []
    c[0] = [a[0][0] + m[0][0], a[0][1] + m[0][1]]
    c[1] = [a[1][0] + m[1][0], a[1][1] + m[1][1]]
    this.items = c
  }

  /**
   * Subtraction
   * 
   * @param {Matrix2} m 
   */
  sub(m)
  {
    const a = this.items
    m = m.items
    const c = []
    c[0] = [a[0][0] - m[0][0], a[0][1] - m[0][1]]
    c[1] = [a[1][0] - m[1][0], a[1][1] - m[1][1]]
    this.items = c
  }

  /**
   * Multiplication
   * 
   * @param {Matrix2} m 
   */
  mul(m)
  {
    const a = this.items
    m = m.items
    const c = []
    c[0] = a[0][0] * m[0][0] + a[0][1] * m[1][0]
    c[1] = a[0][0] * m[0][1] + a[0][1] * m[1][1]
    c[2] = a[1][0] * m[0][0] + a[1][1] * m[1][0]
    c[3] = a[1][0] * m[0][1] + a[1][1] * m[1][1]
    
    this.items = [
      [c[0], c[1]],
      [c[2], c[3]]
    ]
  }

  /**
   * Identity Matrix
   */
  identity()
  {
    const c = [
      [1,0],
      [0,1]
    ]
    return this.mul(c)
  }
}

export default Matrix2