// set trap
// set trap triggers when a property is written.
// set(target, property, value, receiver):

/*
 * target – is the target object, the one passed as the first argument to new
 * Proxy,
 * property – property name,
 * value – property value
 * receiver – similar to get trap, matters only for setter properties.
 */

// set trap should return true if setting is successful, and false otherwise
// (triggers TypeError).

let numbers = []

numbers = new Proxy(numbers, {
  // (*)
  set(target, prop, val) {
    // to intercept property writing
    if (typeof val == 'number') {
      target[prop] = val
      return true
    } else {
      return false
    }
  },
})

numbers.push(1) // added successfully
numbers.push(2) // added successfully
console.log('Length is: ' + numbers.length) // 2

// numbers.push('test') // TypeError ('set' on proxy returned false)
// console.log('This line is never reached (error in the line above)')