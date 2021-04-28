/**
 * Errors wrapper decorator.
 * Wrapps hanlder fn with try catch block.
 * In case of error, calls next() to pass error to error handle middleware
 * @param {*} handlerFn: controller handler function
 * @returns Promise<handlerFn()>
 */
const errorsWrap = (handlerFn) => {
  return async (...params) => {
    try {
      return await handlerFn(...params)
    } catch (err) {
      params.next && params.next(err)
    }
  }
}

module.exports = errorsWrap
