// Objects have access to properties that weren’t explicitly defined

const dictionary = {
  ja: {
    'Ninjas for hire': 'レンタル忍者',
  },
  zh: {
    'Ninjas for hire': '忍者出租',
  },
  ko: {
    'Ninjas for hire': '고용 닌자',
  },
}

console.log(dictionary.ja['Ninjas for hire']) // レンタル忍者

/*
 * In JavaScript, both objects and maps can be used to store key-value pairs.
 * However, there are several reasons why you might want to use a Map over
 * an Object:
 *
 * Key Types: In an object, keys can only be strings or symbols, but a map
 * can have keys of any type, including functions, objects, or any primitive.
 *
 * Order of Elements: The Map object holds key-value pairs and remembers the
 * original insertion order of the keys. This is not the case with Object,
 * where the order of keys can be inconsistent.
 *
 * Size: With an object, you have to manually keep track of the size by
 * iterating over the properties. The Map object has a size property which
 * gives the number of entries in the map.
 *
 * Performance: If you're performing frequent additions and removals, a Map
 * could perform better than an Object because it doesn't need to rehash the
 * entire object whenever a change is made.
 *
 * Iteration: A Map is iterable, so you can directly iterate over it, whereas
 * with an Object, you have to obtain the keys or values and iterate over those.
 *
 * You should consider using a Map when:
 *
 * You have keys of different types or keys that are objects.
 * You need to keep track of the insertion order of keys.
 * You require direct size access.
 * You're performing frequent additions or removals of key-value pairs.
 * You want to be able to directly iterate over the key-value pairs.
 * */

// when we store non string keys in an object, it
// automatically converts them to strings.
const firstElement = { id: 'firstElement' }
const secondElement = { id: 'secondElement' }

const obj = {}
obj[firstElement] = { data: 'firstElement' }
// we will overwrite the first element here
// as both keys are converted to the same string
// that is [object Object]
obj[secondElement] = { data: 'secondElement' }

console.log(obj[firstElement]) // { data: 'secondElement' }
console.log(obj[secondElement]) // { data: 'secondElement' }
// This happens because with objects, keys are stored as strings

// The second element overwrites the first element because both keys are converted to the same string.
// This is because the default toString() method of an object returns [object Object].
// To avoid this, you can use a Map instead:
console.log(obj)

console.log('---------------------------')
// ------------------------------------------------------------------------------------

// Creating our first map

const ninjaIslandMap = new Map()

const ninja1 = { name: 'Yoshi' }
const ninja2 = { name: 'Hattori' }
const ninja3 = { name: 'Kuma' }

// set() method
// The set() method adds or updates an element with a specified key and value to a map.
ninjaIslandMap.set(ninja1, { homeIsland: 'Honshu' })
ninjaIslandMap.set(ninja2, { homeIsland: 'Hokkaido' })

// get() method
// The get() method returns a specified element from a map.
console.log(ninjaIslandMap.get(ninja1).homeIsland) // Honshu
console.log(ninjaIslandMap.get(ninja2).homeIsland) // Hokkaido

console.log(ninjaIslandMap.get(ninja3) === undefined) // true

// size property
// The size property returns the number of elements in a map.
console.log(ninjaIslandMap.size) // 2

// has() method
// The has() method returns true if the map contains the specified key, otherwise false.
console.log(ninjaIslandMap.has(ninja1) && ninjaIslandMap.has(ninja2)) // true

// delete() method
// The delete() method removes the specified element from a map.
ninjaIslandMap.delete(ninja1)
console.log(!ninjaIslandMap.has(ninja1) && ninjaIslandMap.size) // 1

// clear() method
// The clear() method removes all elements from a map.
ninjaIslandMap.clear()
console.log(ninjaIslandMap.size) // 0

console.log('---------------------------')
// ------------------------------------------------------------------------------------

// Key equality

// The Map object uses the sameValueZero algorithm to determine whether two keys are the same.
// This algorithm is similar to the strict equality operator (===), but with one exception:
// NaN is considered equal to NaN.
// This means that if you use NaN as a key, you can retrieve the value using another NaN as the key.

const map = new Map()
const currentLocation = 'http://www.google.com'

const firstLink = new URL(currentLocation)
const secondLink = new URL(currentLocation)

map.set(firstLink, { description: 'firstLink' })
map.set(secondLink, { description: 'secondLink' })

//  two URL objects, even though they’re separate objects, still point to
//  the same URL location:
console.log(map.get(firstLink).description)

console.log(map.get(secondLink).description)

console.log(map.size)

console.log('---------------------------')
// ------------------------------------------------------------------------------------

// Iterating over maps

const directory = new Map()

directory.set('Yoshi', '+81 26 6462')
directory.set('Kuma', '+81 52 2378 6462')
directory.set('Hiro', '+81 76 277 46')

console.log('directory ', directory)
/*
{
  'Yoshi' => '+81 26 6462',
  'Kuma' => '+81 52 2378 6462',
  'Hiro' => '+81 76 277 46'
}
 */

for (let item of directory) {
  console.log('item ', item) // item  [ 'Yoshi', '+81 26 6462' ]
  console.log('Key:' + item[0])
  console.log('Value:' + item[1])
  console.log('---------------------------')
}

console.log('')
console.log('accessing keys')
console.log('')

// The keys() method returns an iterator that contains the keys for each
// element in the map object in insertion order.
for (let key of directory.keys()) {
  console.log('Key:' + key)
  console.log('Value:' + directory.get(key))
  console.log('---------------------------')
}

console.log('')
console.log('accessing values')
console.log('')

// The values() method returns an iterator that contains the values for each
// element in the map object in insertion order.
for (const value of directory.values()) {
  console.log('Value:' + value)
  console.log('---------------------------')
}