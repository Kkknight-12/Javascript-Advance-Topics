// Sets in JavaScript

// mimicking sets with standard objects

function CustomSetObject() {
  this.data = {}
  this.length = 0
}

// We will create three methods: has, add, and remove on the CustomSetObject's
// prototype.

// The has method checks if a value is in the CustomSetObject's collection.
CustomSetObject.prototype.has = function (item) {
  // checks if the item is in the CustomSetObject's collection.
  return typeof this.data[item] !== 'undefined'
}

// The add method adds a value to the CustomSetObject's collection.
CustomSetObject.prototype.add = function (item) {
  // checks if the item is not in the CustomSetObject's collection.
  if (!this.has(item)) {
    // adds the item to the CustomSetObject's collection.
    this.data[item] = true
    // increments the length of the CustomSetObject's collection.
    this.length++
  }
}

/*
 * The check in the add method using this.has(item) will not work effectively
 * with non-primitive values like objects. This is because when an object is
 * used as a key in another object (like this.data in this case), JavaScript
 * will convert the object to a string. This means that different objects
 * will be treated as the same key, because they all convert to the string
 * "[object Object]".
 * */

// The remove method removes a value from the CustomSetObject's collection.
CustomSetObject.prototype.remove = function (item) {
  // checks if the item is in the CustomSetObject's collection.
  if (this.has(item)) {
    // removes the item from the CustomSetObject's collection.
    delete this.data[item]
    // decrements the length of the CustomSetObject's collection.
    this.length--
  }
}

const ninjasObj = new CustomSetObject()

// adds a value to the Set's collection.
ninjasObj.add('Hattori')

// add method will not add a duplicate value.
ninjasObj.add('Hattori')

// checks if the value is in the Set's collection and the length of the
// Set's collection is 1.
console.log(ninjasObj.has('Hattori') && ninjasObj.length === 1) // true

// removes a value from the Set's collection.
ninjasObj.remove('Hattori')

// checks if the value is not in the Set's collection and the length of the
// Set's collection is 0.
console.log(!ninjasObj.has('Hattori') && ninjasObj.length === 0) // true

/*
 *
 * this implementation is a poor imitation of a true Set. This is
 * because it has limitations:
 *
 * - It can only store strings and numbers, not objects.
 * - There's a risk of unintentionally accessing prototype properties.
 *
 * Because of these limitations, the ECMAScript committee introduced a new
 * type of collection in ECMAScript 6 (ES6): the Set object. This built-in
 * object allows you to store unique values of any type, overcoming the
 * limitations of the object-based implementation.
 * */

// --------------------------------------------

// Sets are a new object type with ES6 (ES2015) that allow you to create
// collections of unique values. The values can be primitive types or object
// references. A value in a Set may only occur once; it is unique in the
// Set's collection.

// JavaScript Set constructor expects an iterable object (like an array) as
// an argument. If you want to create an empty Set, you can pass null to the
// constructor.

// creating set

const ninjas = new Set(['Kuma', 'Hattori', 'Yagyu', 'Hattori'])

// methods of Set
// - add(value): Adds a value to the Set's collection.

// - has(value): Checks if a value is in the Set's collection.
console.log(ninjas.has('Hattori'), 'Hattori is in our set') // true

// - size: Returns the number of values in the Set's collection.
console.log(ninjas.size === 3, 'There are only three ninjas in our set!') // true

console.log(!ninjas.has('Yoshi'), 'Yoshi is not in, yet..') // true

// The add method adds a value to the Set's collection.
ninjas.add('Yoshi')
console.log(ninjas.has('Yoshi'), 'Yoshi is added') // true
console.log(ninjas.size === 4, 'There are four ninjas in our set!') // true

console.log(ninjas.has('Kuma'), 'Kuma is already added') // true
ninjas.add('Kuma')
console.log(ninjas.size === 4, 'Adding Kuma again has no effect')

console.log('ninjas ', ninjas)

// We can iterate over the values in the Set's collection using the for...of
for (let ninja of ninjas) {
  console.log(ninja !== null, ninja)
}

//- forEach(callback): Calls a callback for each value in the Set's collection.
ninjas.forEach((ninja) => console.log(ninja !== 'Yagyu', ninja))

// - delete(value): Removes a value from the Set's collection.
ninjas.delete('Yagyu')
console.log(!ninjas.has('Yagyu'), 'Yagyu has been removed')

// - keys(): Returns an iterator over the values in the Set's collection.
console.log(ninjas.keys()) // SetIterator { 'Kuma', 'Hattori', 'Yoshi' }

// - values(): Returns an iterator over the values in the Set's collection.
console.log(ninjas.values()) // SetIterator { 'Kuma', 'Hattori', 'Yoshi' }

// - entries(): Returns an iterator over the values in the Set's collection.
console.log(ninjas.entries()) // SetIterator { 'Kuma', 'Hattori', 'Yoshi' }

/*
 * The keys() and values() methods of a Set object both return a new
 * iterator object that contains the values for each element in the Set
 * object in insertion order. For Set objects, there is no difference
 * between the keys and values, so the keys() and values() methods produce
 * the same result.
 *  */

// - clear(): Removes all values from the Set's collection.
ninjas.clear()
console.log(ninjas.size === 0, 'All ninjas have been removed') // true

const ninjas2 = new Set([
  { name: 'Kuma', weapon: 'kusarigama' },
  { name: 'Hattori', weapon: 'wakizashi' },
  { name: 'Yagyu', weapon: 'shuriken' },
])

ninjas2.forEach((ninja) => console.log(ninja.name))
console.log(ninjas2.keys())

// other methods
// - [Symbol.iterator](): Returns an iterator over the values in the Set's collection.
// - [Symbol.toStringTag]: A string value that is used for the object's string representation.
// - [@@iterator](): Returns an iterator over the values in the Set's collection.
// - [@@toStringTag]: A string value that is used for the object's string representation.
// - [@@unscopables]: An object that specifies the behavior of the Set object when it is used in a with statement.
// - [@@species]: A constructor function that is used to create derived objects.
// - [@@isConcatSpreadable]: A Boolean value that specifies if the Set object should be flattened to its array elements when using the Array.prototype.concat() method.

// --------------------------------------------

// Union of sets

// The union of two sets A and B is the set of elements that are in A, in B,
// or in both A and B. In other words, the union of two sets A and B is the
// set of all elements that are in A, in B, or in both A and B.
// but items are unique in a set, so we don't have to worry about duplicates.

const ninjas3 = ['Kuma', 'Hattori', 'Yagyu']
const samurai = ['Hattori', 'Oda', 'Tomoe']

const warriors = new Set([...ninjas3, ...samurai])

console.log(warriors.has('Kuma'), 'Kuma is here')
console.log(warriors.has('Hattori'), 'And Hattori')
console.log(warriors.has('Yagyu'), 'And Yagyu')
console.log(warriors.has('Oda'), 'And Oda')
console.log(warriors.has('Tomoe'), 'Tomoe, last but not least')

console.log(warriors.size === 5, 'There are 5 warriors in total')
console.log('warriors ', warriors)
// hattoori is not duplicated, it's unique in the set

// --------------------------------------------
// Intersection of sets

// The intersection of two sets A and B is the set of elements that are in
// both A and B. In other words, the intersection of two sets A and B is the
// set of all elements that are in both A and B.

const ninjas4 = new Set(['Kuma', 'Hattori', 'Yagyu'])
const samurai1 = new Set(['Hattori', 'Oda', 'Tomoe'])
// The intersection of ninjas and samurai1 is the set of all elements that are
// in both ninjas and samurai1.

const ninjaSamurais = new Set(
  [...ninjas4].filter((ninja) => samurai1.has(ninja)),
)

console.log(ninjaSamurais.size === 1, "There's only one ninja samurai")
console.log(ninjaSamurais.has('Hattori'), 'Hattori is his name')

// --------------------------------------------
// Difference of sets

const ninjas5 = new Set(['Kuma', 'Hattori', 'Yagyu'])
const samurai2 = new Set(['Hattori', 'Oda', 'Tomoe'])

// ninjas that are not samurais
const pureNinjas = new Set([...ninjas5].filter((ninja) => !samurai2.has(ninja)))

console.log(pureNinjas.size === 2, "There's only one ninja samurai")
console.log(pureNinjas.has('Kuma'), 'Kuma is a true ninja')
console.log(pureNinjas.has('Yagyu'), 'Yagyu is a true ninja')