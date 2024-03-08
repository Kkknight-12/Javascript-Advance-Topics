function someF() {
  this.name = 'aaa'
  this.nFunc = function () {
    console.log(this.name) // aaa
  }
  this.aFunc = () => {
    console.log(this.name) // aaa
  }
}

const s = new someF()
s.nFunc() // aaa
s.aFunc() // aaa
new someF().aFunc() // aaa

console.log('-----------------')

// --------------------------------------------------------------------

const obj = {
  name: 'bbb',
  nFunc: function () {
    console.log(this.name) // bbb
  },
  aFunc: () => {
    console.log(this.name) // undefined
  },
}

obj.nFunc() // bbb
obj.aFunc() // undefined

console.log('-----------------')

// --------------------------------------------------------------------

/*
 * The difference in behavior you’re seeing is due to how this is bound in
 * different contexts.
 *
 * In JavaScript, this inside a function refers to the object that the
 * function is a method of. When you use the new keyword to create an
 * instance of someF, this inside nFunc and aFunc refers to that new instance.
 *
 * However, when you define aFunc as an arrow function inside obj, this does
 * not refer to obj. Arrow functions do not have their own this. Instead,
 * they inherit this from the surrounding scope at the time they are created.
 * In your case, this in obj.aFunc refers to the global scope, not obj.
 *
 * When you invoke someF.aFunc, it’s not undefined because aFunc is not a
 * method of someF. It’s a method of instances of someF. If you want to call
 * aFunc on someF, you would need to add it to someF’s prototype or define it
 * as a static method.
 *
 * Here’s an example of how you could define aFunc as a static method:
 *  */

someF.aFunc = () => {
  console.log(this.name) // undefined
}
someF.nFunc2 = function () {
  console.log(this) // someF()
}
someF.aFunc() // undefined
someF.nFunc2() // someF()

// --------------------------------------------------------------------

// this in arrow function

/*
 * The this inside an arrow function is lexically or statically bound to the
 * scope in which it was defined, not the object that invokes the function.
 * This means that the value of this inside an arrow function remains the
 * same throughout the lifecycle of the function and is always bound to the
 * value of this in the closest non-arrow parent function.
 *  */

let obj2 = {
  name: 'obj',
  regularFunc: function () {
    console.log(this.name) // logs 'obj'
    let arrowFunc = () => {
      console.log(this.name) // logs 'obj'
    }
    arrowFunc()
  },
}

obj2.regularFunc() // logs 'obj' and 'obj'

/*
 * arrowFunc is defined inside regularFunc, so it inherits this from
 * regularFunc. When regularFunc is invoked as a method of obj, this inside
 * regularFunc (and therefore arrowFunc) refers to obj.
 *  */

// --------------------------------------------------------------------

// this in normal function

/*
 * In normal (non-arrow) functions, the value of this is determined by how a
 * function is invoked, not where the function is defined.
 *
 * When a function is called as a method of an object, this is set to the
 * object the method is called on.
 *  */

let obj3 = {
  name: 'obj3',
  func: function () {
    console.log(this.name) // logs 'obj'
  },
}

obj3.func() // 'this' inside func refers to 'obj'

// However, if the same function is called as a standalone function, this is
// set to the global object (or undefined in strict mode):

let func = obj3.func
func() // 'this' inside func refers to the global object
