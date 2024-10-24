// https://tech-docs.corndel.com/js/functions.html

/**
 * Returns 'fizz' if the number is divisible by 3,
 * 'buzz' if divisible by 5, and 'fizzbuzz' if divisible by both.
 *
 * Returns an empty string if the number is not divisible by 3 or 5.
 *
 * @param {number} num The number to be checked.
 * @returns {string} 'fizz', 'buzz', 'fizzbuzz' or ''
 */
export function fizzBuzz(num) {
  // return 'fizz' if num is divisible by 3
  // return 'buzz' if num is divisible by 5
  // return 'fizzbuzz' if num is divisible by both 3 and 5
  // return an empty string if num is not divisible by 3 or 5
  let str = ''
  if (num % 3 === 0) {
    str += 'fizz'
  }
  if (num % 5 === 0) {
    str += 'buzz'
  }
  return str
}
