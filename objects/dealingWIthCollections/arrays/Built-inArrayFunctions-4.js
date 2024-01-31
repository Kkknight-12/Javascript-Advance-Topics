/*
 * The provided code is an example of how you can create an object in
 * JavaScript that mimics some behaviors of an array. This is done by using
 * the Array.prototype methods and applying them to the object.
 *
 * The object elems has a length property and three methods: add, gather, and
 * find.
 *
 * The add method uses Array.prototype.push.call(this, elem) to add an
 * element to the object. The call method is used to apply the push method
 * to the object, treating it as an array. This increments the length
 * property and adds a numbered property to the object referencing the passed
 * element.
 *
 * The gather method is a convenience method that takes an id, finds the
 * element with that id, and adds it to the object using the add method.
 *
 * The find method uses Array.prototype.find.call(this, callback) to find an
 * item in the object. Again, the call method is used to apply the find
 * method to the object, treating it as an array.
 *
 * This approach allows you to use existing array methods on your object,
 * avoiding the need to write your own code for these operations. However,
 * it's important to note that this is a somewhat unconventional use of
 * objects and arrays in JavaScript, and it may not be suitable or efficient
 * for all use cases.
 *  */

const elems = {
  // length: 0, // this is not needed
  add: function (elem) {
    Array.prototype.push.call(this, elem)
  },
  find: function (callback) {
    return Array.prototype.find.call(this, callback)
  },
}

elems.add({ id: 'first' })
console.log(elems.length) // 1

const found = elems.find((elem) => elem.id === 'first')
console.log(found) // { id: 'first' }

if (found && found.id === 'first') console.log("We've found our element")

/*
 * HOW length property changes ?
 *
 * The length property of the elems object is changing due to the
 * use of Array.prototype.push.call(this, elem) in the add method.
 *
 * When Array.prototype.push is called with this context set to elems, it
 * treats elems as an array-like object. The push method adds a new element
 * to the end of an array and updates the length property accordingly.
 *
 * In this case, Array.prototype.push.call(this, elem) is adding a new
 * property to elems and incrementing its length property, just like it would
 * for a regular array. This is possible because JavaScript allows objects to
 * have properties with numeric keys, and length is a special property that
 * gets automatically updated when properties with numeric keys are added or
 * removed.
 * */