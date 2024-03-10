// Using proxies for logging

function Ninja() {
  let _skillLevel = 0
  let name = 'kk'

  this.WhatIsThis = function () {
    return this
  }

  // https://www.programiz.com/javascript/library/object/defineProperty
  // syntax of the defineProperty() method is:
  // Object.defineProperty(obj, prop, descriptor)
  Object.defineProperty(this, 'skillLevel', {
    get: () => {
      if ('skillLevel get method is called') {
        // We log whenever the skillLevel property is read
        console.log('get')
        return _skillLevel
      }
    },
    set: (value) => {
      if ('skillLevel set method is called') {
        // and whenever the skillLevel property is written to.
        console.log('set')
        _skillLevel = value
      }
    },
  })
}

const ninja = new Ninja()

// Reads the skillLevel property and triggers the get method
console.log('ninja.skillLevel ', ninja.skillLevel)
// 0

// Writes to the skillLevel property and triggers the set method
ninja.skillLevel = 4

// get
console.log('new ninja.skillLevel ', ninja.skillLevel)
// 4

/*
 * We define a Ninja constructor function that adds a getter and a setter to
 * the skillLevel property, which log all attempts of reading and writing
 * to that property.
 *
 * Notice that this isn’t an ideal solution. We’ve cluttered our domain code
 * that deals with reading and writing to an object property with logging
 * code. In addition, if in the future we need more properties on the ninja
 * object, we have to be careful not to forget to add additional logging
 * statements to each new property.
 *
 * Luckily, one of the straightforward uses of proxies is to enable logging
 * whenever we read or write to a property, but in a much nicer and cleaner
 * way.
 *  */

// Defines a function that takes a target object and makes it loggable
function makeLoggable(target) {
  //
  // Creates a new proxy with that target object
  return new Proxy(target, {
    // A get trap that logs property reads
    get: (target, property) => {
      return target[property] || 'property does not exist'
    },

    // A set trap that logs property writes
    set: (target, property, value) => {
      target[property] = value
      return true
    },
  })
}

let ninja2 = { name: 'Yoshi' }
ninja2 = makeLoggable(ninja2)
// A set trap that logs property writes

console.log(ninja2.name) // Yoshi

ninja2.weapon = 'sword'
console.log(ninja2.weapon) // sword

/**
 * Creates a new ninja object that will serve as our target object and make
 * it loggable
 * */

/**
 * Here we define a makeLoggable function that takes a target object and
 * returns a new Proxy that has a handler with a get and a set trap.
 *
 * These traps, besides reading and writing to the property, log the
 * information about which property is read or written to.
 *
 * Next, we create a ninja object with a name property, and we pass it to the
 * make- Loggable function, in which it will be used as a target for a newly
 * created proxy.
 * We then assign the proxy back to the ninja identifier, overriding it.
 * (Don’t worry, our original ninja object is kept alive as the target
 * object of our proxy.)
 *
 * Whenever we try to read a property (for example, with ninja.name), the get
 * trap will be called, and the information about which property has been
 * read will be logged.
 * A similar thing will happen when writing to a property:
 * ninja.weapon = "sword".
 *
 * Notice how much easier and more transparent this is when compared to the
 * standard way of using getters and setters. We don’t have to mix our
 * domain code with our logging code, and there’s no need to add separate
 * logging for each object property. Instead, all property reads and writes
 * go through our proxy object trap methods. Logging has been specified in
 * only one place and is reused as many times as necessary, on as many
 * objects as necessary.
 *  */
