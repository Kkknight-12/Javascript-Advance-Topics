// functions as objects

// //////////////////////////////////
// Attaching properties to function /
// //////////////////////////////////

var weildSword = function () {}
weildSword.swordType = 'katana'
console.log(weildSword.swordType) // katana

// properties must be added after you have created function
// so you should pass empty function, as properties defined
// while creating function will we refered as undefined when
// when you call them

console.log('-----------Callback--ends-------------')

// /////////////////////////////////
// storing function in collection //
// /////////////////////////////////
var store = {
  nextId: 1,
  cache: {},
  add: function (fn) {
    if (!fn.id) {
      // if function don't have id property then proceed
      // store the current value of nextId to function.id
      // then increment the current value of nextId
      // knight.id = 1, netninja.id = 2
      fn.id = this.nextId++ // here adding property to function
      fn.age = new Date().getTime().toString()
      // now save function as key and id as value {1: ƒ, 2: ƒ}
      this.cache[fn.id] = fn // here we are adding function to cache object
      return true
    }
  },
}
function knight() {
  return 'this is knight'
}
store.add(knight)
// assert( store.add(knight), "Function was safely added.");
// assert( store.add(knight), "but it was only added once.");
store.add(function netninja() {
  return 'I am ninja'
})
console.log(store.cache) // {1: ƒ, 2: ƒ}
console.log(store.cache[1]())
console.log(store.cache[1].id)

console.log('----------storing function ends--------------')

// //////////////////////////
// Self-memoizing functions /
// //////////////////////////
function isPrime(value) {
  if (!isPrime.answers) {
    // adding answers property to isPrime function
    isPrime.answers = {}
  }
  // new value will be undefined as its not stored in answers obj
  if (isPrime.answers[value] !== undefined) {
    return isPrime.answers[value]
  }
  // will set prime to true if value is neither 0 or 1
  var prime = value !== 0 && value !== 1

  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      prime = false
      break
    }
  }

  return (isPrime.answers[value] = prime)
}
console.log(isPrime(5))
console.log(isPrime.answers) //{5: true}

console.log('--------Attaching properties to function ends----------------')

// -----------------------------------------------------
