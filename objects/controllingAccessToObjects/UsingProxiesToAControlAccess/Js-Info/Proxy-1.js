// let proxy = new Proxy(target, handler)

/*
 * target – is an object to wrap, can be anything, including functions.
 * handler – proxy configuration: an object with “traps”, methods that
 * intercept operations.
 * – e.g. get trap for reading a property of target, set trap for writing a
 *  property into target, and so on.
 *  */

let target = {}
let proxy = new Proxy(target, {}) // empty handler

proxy.test = 5 // writing to proxy (1)

console.log(proxy.test) // 5, we can read it from proxy too (2)

for (let key in proxy) console.log(key) // test, iteration works (3)

//  get trap

let dictionary = {
  Hello: 'Hola',
  Bye: 'Adiós',
}

dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    // intercept reading a property from dictionary
    if (phrase in target) {
      // if we have it in the dictionary
      return target[phrase] // return the translation
    } else {
      // otherwise, return the non-translated phrase
      return phrase
    }
  },
})

console.log(dictionary['Hello'])
console.log(dictionary['Welcome to Proxy'])