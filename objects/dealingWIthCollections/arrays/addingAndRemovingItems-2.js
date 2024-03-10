const ninjas = ['Kuma', 'Hattori', 'Yagyu']

// splice() method changes the contents of an array by
// removing or replacing existing elements and/or adding
// new elements in place.
// it work on the original array

// syntax
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// delete and insert
// delete hattori at index 1 and insert 'Yoshi'
ninjas.splice(1, 1, 'Yoshi')
console.log(ninjas) // [ 'Kuma', 'Yoshi', 'Yagyu' ]

// delete only
// delete yoshi at index 1
ninjas.splice(1, 1)
console.log(ninjas) // [ 'Kuma', 'Yagyu' ]

// insert only
// insert 'Hanzo' at index 1
ninjas.splice(1, 0, 'Hanzo')
console.log(ninjas) // [ 'Kuma', 'Hanzo', 'Yagyu' ]

// delete and insert multiple
// delete 'Hanzo' at index 1 and insert 'Yoshi' and 'miyazaki'
ninjas.splice(1, 1, 'Yoshi', 'miyazaki')
console.log(ninjas) // [ 'Kuma', 'Yoshi', 'Yagyu', 'Yagyu' ]

// delete only multiple
// delete 'Yoshi' and 'miyazaki' at index 1
ninjas.splice(1, 2)
console.log(ninjas) // [ 'Kuma', 'Yagyu' ]

// slice() method
/*
 * The slice() method returns a shallow copy of a portion of an array into a
 * new array object selected from begin to end (end not included) where begin
 * and end represent the index of items in that array. The original array
 * will not be modified.
 * */

// syntax
// arr.slice([begin[, end]])

// slice() method with no arguments
const slicedNinjas = ninjas.slice()
console.log(slicedNinjas) // [ 'Kuma', 'Hattori', 'Yagyu' ]

// slice() method with begin argument
const slicedNinjas1 = ninjas.slice(1)
// from index 1 to end create a new array
console.log(slicedNinjas1) // [ 'Hattori', 'Yagyu' ]

// slice() method with begin and end arguments
const slicedNinjas2 = ninjas.slice(1, 2)
// from index 1 to 2 create a new array
console.log(slicedNinjas2) // [ 'Hattori' ]
