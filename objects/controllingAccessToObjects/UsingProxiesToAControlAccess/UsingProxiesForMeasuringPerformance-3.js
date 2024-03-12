// apply Trap

/*
 * Besides being used for logging property accesses, proxies can be used for
 * measuring the performance of function invocations, without even modifying
 * the source code of a function.
 * Say we want to measure the performance of a function that calculates
 * whether a number is a prime, as shown in the following listing.
 * */

function isPrime(number) {
  if (number < 2) {
    return false
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false
    }

    return true
  }
}

// wrapping the isPrime function within a proxy
isPrime = new Proxy(isPrime, {
  // provides an apply trap that will
  // be called whenever a proxy is called as a function
  apply(target, thisArg, argArray) {
    console.log('target ', target) // [Function: isPrime]
    console.log('thisArg ', thisArg) // undefined
    console.log('argArray ', argArray) // argArray  [ 1299827 ]

    console.time('isPrime')

    // calling the function with this and arguments
    //            isPrime.apply( undefined, [1299827] )
    const result = target.apply(thisArg, argArray)

    console.timeEnd('isPrime')

    console.log('result ', result) // true

    return result
  },
})

// calling function. call works the same as if we had called the
// original function.
isPrime(1299827)

/*
 * In this example, we have a simple isPrime function in which we measure the
 * performance of the isPrime function, but without modifying its code. We
 * could wrap the function into a proxy that has a trap that will be called
 * whenever the function is called:
 *
 * isPrime = new Proxy(isPrime, {
 *   apply: (target, thisArg, args) => {
 *     ...
 *   } });
 *
 * We use the isPrime function as the target object of a newly constructed
 * proxy. In addition, we supply a handler with an apply trap that will be
 * executed on function invocation.
 *
 * Similarly, as in the previous example, we’ve assigned the newly created
 * proxy to the isPrime identifier. In that way, we don’t have to change any
 * of the code that calls the function whose execution time we want to
 * measure; the rest of the program code is completely oblivious to our
 * changes.
 *
 * Whenever the isPrime function is called, that call is rerouted to our
 * proxy’s apply trap, which will start a stopwatch with the built-in
 * console.time method (remember chapter 1), call the original isPrime
 * function, log the elapsed time, and finally return the result of the
 * isPrime invocation.
 *  */

// -----------------------------------------------------------------------------

function delay(callBack, ms) {
  this.kon = 'kya ptaa'
  // return a wrapper that passes the call to
  // callBack function after the timeout
  return function () {
    // (*)
    setTimeout(() => callBack.apply(this, arguments), ms)
  }
}

function sayHi(user) {
  console.log(this.kon)
  console.log(`Hello, ${user}!`)
}

console.log('say hi length ', sayHi.length) // 1

// after this wrapping, calls to sayHi will be delayed for 3 seconds
sayHi = delay(sayHi, 3000)

sayHi('John') // Hello, John! (after 3 seconds)

/*
 * The wrapper function (*) performs the call after the timeout.
 * But a wrapper function does not forward property read/write operations or
 * anything else.
 * After the wrapping, the access is lost to properties of the original
 * functions, such as name, length and others:
 *  */

console.log('say hi length ', sayHi.length) // 0

// -----------------------------------------------------------------------------

// Proxy is much more powerful, as it forwards everything to the target object.

function delayP(callback, ms) {
  //
  return new Proxy(callback, {
    // trap to intercept the call
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms)
    },
  })
}

function sayHiP(user) {
  console.log(`Hello, ${user}!`)
}

console.log('say hi length ', sayHiP.length) // 1

sayHiP = delayP(sayHiP, 3000)

console.log('say hi length ', sayHiP.length) // 1

sayHiP('Jhonny') // Hello, John! (after 3 seconds)

// -----------------------------------------------------------------------------

// some more examples

// Example 1
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

// Wrapping the factorial function within a proxy
factorial = new Proxy(factorial, {
  apply(target, thisArg, argArray) {
    console.log('Calling factorial with arguments:', argArray)

    const result = target.apply(thisArg, argArray)

    console.log('Factorial result:', result)

    return result
  },
})

// Calling the factorial function
console.log(factorial(5)) // Output: 120

console.log('---------------------------------') // Output: 120

// -----------------------------------------------------------------------------

// Example 2
function greet(name) {
  console.log(`Hello, ${name}!`)
}

// Wrapping the greet function within a proxy
const greetProxy = new Proxy(greet, {
  apply(target, thisArg, argArray) {
    console.log('this ', thisArg) // undefined
    // Manipulate the arguments
    const modifiedArgs = argArray.map((arg) => arg.toUpperCase())

    // Call the original greet function with the modified arguments and this value
    return target.apply(thisArg, modifiedArgs)
  },
})

// Call the greet function through the proxy
greetProxy('John') // Output: Hello, JOHN!

console.log('---------------------------------') // Output: 120

// -----------------------------------------------------------------------------

// Example 3
function sayHello() {
  console.log(`Hello, ${this.name}!`)
}

const context = {
  name: 'John Doe',
}

const sayHelloProxy = new Proxy(sayHello, {
  apply(target, thisArg, argArray) {
    return target.apply(context, argArray)
  },
})

sayHelloProxy() // Output: Hello, John Doe!
