// Testing array items

// every method tests whether all items in the array pass the test implemented
// by the provided function. It returns a Boolean value.

// some method tests whether at least one item in the array passes the test
// implemented by the provided function. It returns a Boolean value.

// find method returns the value of the first item in the array that passes the
// test implemented by the provided function. It returns undefined if no item
// passes the test.

// findIndex method returns the index of the first item in the array that passes
// the test implemented by the provided function. It returns -1 if no item
// passes the test.

// includes method determines whether an array includes a certain value among
// its items, returning true or false as appropriate.

// The following snippet shows how to use the every method to test whether all
// the items in an array are numbers:

const items = [1, 2, 3, 4, 5]
const allNumbers = items.every((item) => {
  return typeof item === 'number'
})
console.log(allNumbers) // true

// The following snippet shows how to use the some method to test whether at
// least one item in an array is a number:
const items2 = [1, 2, 3, 4, 5, 'six']
const someNumbers = items2.some((item) => {
  return typeof item === 'number'
})

console.log(someNumbers) // true

// ----------------------------------------------------------
// Searching arrays

// find

// The following snippet shows how to use the find method to find the first
// number in an array:
const items3 = [1, 2, 3, 4, 5, 6]
const firstEvenItem = items3.find((item) => {
  return item % 2 === 0
})
console.log(firstEvenItem) // 2

// filter

// The following snippet shows how to use the filter method to find all the
// numbers in an array that satisfy a certain condition:
const items5 = [1, 2, 3, 4, 5, 6]
const evenItems = items5.filter((item) => {
  return item % 2 === 0
})
console.log(evenItems) // [2, 4, 6]

// indexOf

// The following snippet shows how to use the indexOf method to find the index
// of the first occurrence of a certain value in an array:
const items5B = [1, 2, 3, 4, 5, 5, 6]
const indexOf5 = items5B.indexOf(5)
console.log('indexOf5 ', indexOf5) // 4

// findIndex -
// when we don’t have a reference to the exact item whose index we
// want to search for, we can use the findIndex

// The following snippet shows how to use the findIndex method to find the
// index of the first number in an array:
const items4 = [1, 2, 3, 4, 5, 6]
const firstEvenItemIndex = items4.findIndex((item) => {
  return item % 2 === 0
})
console.log('firstEvenItemIndex ', firstEvenItemIndex) // element [2] at index 1
// return undefined if no item passes the test

// lastIndexOf

// The following snippet shows how to use the lastIndexOf method to find the
// index of the last occurrence of a certain value in an array:
const items5A = [1, 2, 3, 4, 5, 5, 6]
const lastIndexOf5 = items5A.lastIndexOf(5)
console.log(lastIndexOf5) // 5

// includes
// syntax: includes(searchElement, fromIndex)
// The following snippet shows how to use the includes method to test whether
// an array contains a certain value:
const items6 = [1, 2, 3, 4, 5, 6]

const includes1 = items6.includes(1)
console.log(includes1) // true

const includes2 = items5.includes(0)
console.log(includes2) // false

// The following snippet shows how to use the includes method to test whether
// an array contains a certain value starting from a certain index:
const items7 = [1, 2, 3, 4, 5, 6]

// search for 1
// from index 1
const includes3 = items7.includes(1, 1)
console.log(includes3)

// search for 1
// from index 2
const includes4 = items7.includes(1, 2)
console.log(includes4)

// search for 1
// from index 0
const includes5 = items7.includes(1, 0)
console.log(includes5)
