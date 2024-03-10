/*
 * Two fundamental ways to create arrays
 * - using Array constructor
 * - using array literals []
 *  */

// array literal
const ninjas = ['Kuma', 'Hattori', 'Yagyu']

// Array constructor
const samurai = new Array('Oda', 'Tomoe')

/*
 * ARRAY LITERALS VERSUS THE ARRAY CONSTRUCTOR
 *
 * Using array literals to create arrays is preferred over creating arrays
 * with the Array constructor. The primary reason is simplicity:
 *
 * */

// each array has a length property
if (ninjas.length === 3) console.log('There are three ninjas')
if (samurai.length === 2) console.log('And only two samurai')

//first item of an array is at index 0
if (ninjas[0] === 'Kuma') console.log('Kuma is the first ninja')

// last item of an array is at index length - 1
if (samurai[samurai.length - 1] === 'Tomoe')
  console.log('Tomoe is the last' + ' samurai')

// if we try to access an index outside those bounds—for example, with
// ninjas[4] (remember, we have only three ninjas!), we won’t get “Array
// index out of bounds” exception. Instead, undefined is returned, signaling
// that there’s nothing there:
if (ninjas[4] === undefined)
  console.log('We get undefined if we try to access an out of bounds index')
// This behavior is a consequence of the fact that JavaScript arrays are objects.

console.log(ninjas.length)
//  if we try to write to a position outside of array bounds, the array is
// automatically expanded to accommodate the new element:
ninjas[4] = 'Ishi'
if (ninjas.length === 5) console.log('Arrays are automatically expanded')
// [ 'Kuma', 'Hattori', 'Yagyu', <1 empty item>, 'Ishi' ]
/*
 *  We’ve essentially created a hole in the array, and the item at index 3 is
 *  undefined. This also changes the value of the length property, which now
 * reports a value of 5, even though one array item is undefined.
 *  */
console.log(ninjas[3]) // undefined

// We can also shrink the array by setting the length property to a smaller
ninjas.length = 2
if (ninjas.length === 2) console.log('There are only two ninjas now')
if (ninjas[0] === 'Kuma' && ninjas[1] === 'Hattori')
  console.log('Kuma and Hattori')
