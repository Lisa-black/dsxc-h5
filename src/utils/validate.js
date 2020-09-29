
export default {
  /**
   * @param {string} path
   * @returns {Boolean}
   */
  isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
  },

  /**
   * @param {string} str
   * @returns {Boolean}
   */
  
  validUsername(str) {
    const valid_map = ['admin', 'editor']
    return valid_map.indexOf(str.trim()) >= 0
  },

  /* 手机号*/
  mobile(str) {
    const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    return reg.test(str)
  },

  /* 数字 */
  number(str) {
    const reg = /^\d{4}$/
    return reg.test(str)
  }
}
