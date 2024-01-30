//  Iteration with “ownKeys” and “getOwnPropertyDescriptor”

let user = {
  name: 'John',
  age: 30,
  _password: '***',
}

//    new Proxy( target, handler )
user = new Proxy(user, {
  // target – is the target object, the one passed as the first argument to new
  ownKeys(target) {
    // filter out properties that don't start with '_'
    return Object.keys(target).filter((key) => !key.startsWith('_'))
  },
})

// "ownKeys" filters out _password
for (let key in user) console.log(key) // name, then: age

// same effect on these methods:
console.log(Object.keys(user)) // name,age
console.log(Object.values(user)) // John,30

// --------------------------------------------------------------------------

let user2 = {}

user2 = new Proxy(user, {
  ownKeys(target) {
    return ['a', 'b', 'c']
  },
})

console.log(Object.keys(user2)) // [] empty

/*
 * why ?
 * The reason is simple: Object.keys returns only properties with the
 * enumerable flag.
 * */