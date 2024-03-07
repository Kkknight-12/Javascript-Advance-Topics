/**
 * 'this' is an implicit parameter passed to function when a function is
 * invoked. It refers to an object that's associated with the function
 * invocation. Often termed as FUNCTION CONTEXT.
 *
 * Example:
 * let obj = {
 *      value: 'Hello, World!',
 *      print: function() {
 *                console.log(this.value);
 *            }
 * };
 * here obj is the context of the print function.
 * this refers to obj.
 * obj.print(); // Hello, World!
 *
 *
 * what this parameter points to isn't defined only by how and where the
 * function is defined, but it also heavily influenced by how function is
 * invoked.
 *
 * function print() {
 *      'use strict';
 *      console.log(this);
 * }
 * print(); // logs undefined
 */

/** the manner in which a function is invoked has a huge impact on how the
 *  code within it operates, primarily in how the 'this' parameter,
 *  the function context, is established
 */
// ------------------------------------------------------------------------------

// /////////////////////////////////
// Invoking functions              /
// /////////////////////////////////

// We can invoke a function in four ways

/**
 * 1. As a function - simple()
 * 2. As a method - ninja.simple() which ties the invocation to an object,
 * enabling object-oriented programming.
 * 3. As a constructor - new Ninja(), in Which a new object is brought into
 * being
 * 4. via function's call and apply methods - simple.call(ninja) or
 * simple.apply(ninja)
 */

// ------------------------------------------------------------------------------

// /////////////////
// Simple function /
// /////////////////
function ninja() {} // function declaration
ninja()

// expression to which the () operator is applied
// doesn’t reference the function as a property of an object.
var samurai = function () {} // function expresion
samurai('a')
;(function () {})() // Immediately invoked expression invoked as a function

// //////////////////////////////////////////
// behaviour of this in simple function    //
// when using strict mode vs not using it  //
// //////////////////////////////////////////
function ninja() {
  // return this // => window
}
console.log(ninja()) // return window object

function samurai() {
  ;('use strict')
  return this // undefined
}
console.log(samurai()) // return undefined

//
function WhatIsThis() {
  this.normalFunc = function () {
    return this // object
  }
  this.arrowFunc = () => {
    return this // object
  }
  this.nestedNormal = function () {
    return function () {
      // return this // global
    }
  }
  this.nestedNormal2 = function () {
    return () => this // object
  }

  this.nestedArrow = () => {
    return () => this // object
  }

  this.nestedArrow2 = () => {
    return function () {
      // return this // global
    }
  }
}

const getWhatIsThis = new WhatIsThis()
// object
console.log('normalFunc', getWhatIsThis.normalFunc())
// object
console.log('arrowFunc', getWhatIsThis.arrowFunc())
// global
console.log('nestedNormal', getWhatIsThis.nestedNormal()())
// object
console.log('nestedNormal2', getWhatIsThis.nestedNormal2()())
// object
console.log('nestedArrow', getWhatIsThis.nestedArrow()())
// global
console.log('nestedArrow2', getWhatIsThis.nestedArrow2()())

// ------------------------------------------------------------------------------

// ////////////////////////////////
// Invoking a function as method //
// ////////////////////////////////

// function is assigned to a property of an object
let ninjaObj = {}
ninjaObj.skill = function () {
  console.log('you got me')
}

// invocation occurs by referencing the function using that property
ninjaObj.skill()

/* 
special thing about it is object to which a method belongs
is available within body of the method as 'this'.
which means you can refer to object with 'this' inside method

When we invoke a function as a method of an object, that
object becomes function context as is available within
function via 'this' parameter.
*/

function getMyThis() {
  return this
}

function getName() {
  return this.name
}

const thisObj = {
  // not invoking getMyThis
  // checkingThis will recieve reference to getMyThis function
  // doing so we created a method named checkingThis on object thisObj
  // getMyThis didn't become a method of object thisObj
  checkingThis: getMyThis,

  getNameValue: getName,

  name: 'knight',
}
// return this which is whole object so we are getting whole object as return value
console.log('thisObj', thisObj.checkingThis())
// this refer to object
/* {
  checkingThis: [Function: getMyThis],
  getNameValue: [Function: getName],
  name: 'knight'
} */
console.log(thisObj.checkingThis() === thisObj) // true
console.log(thisObj.getNameValue()) // knight

/* 
Look closely the getMyThis and getName are normal function.
And "this" in normal function refer to windows.
But We are invoking these function with the help of object thisObj
so left side of dot is thisObj which means this will refer to 
thisObj which is invoking it.
*/

const thisObjTwo = {
  checkingThisAgain: getMyThis,
}
console.log(thisObjTwo.checkingThisAgain() === thisObjTwo) // true

/* 
here we go again using the same getMyThis function and this time it is returning
this equal to thisObjTwo.

So, we can confirm that context returned by 'this' changes depending on how
getMyThis is invoked.

We dont need make different copy of getMyThis to perform exact same processing on
different object.
*/

const WhatIsThisInObj = {
  normalFunc: function () {
    return this // object
  },
  arrowFunc: () => {
    return this // empty object
  },
  nestedNormal: function () {
    return function () {
      // return this // global
    }
  },
  nestedNormal2: function () {
    return () => this // object
  },

  nestedArrow: () => {
    return () => this // empty object
  },
  nestedArrow2: () => {
    return function () {
      // return this // global
    }
  },
}

console.log('normalFunc Obj', WhatIsThisInObj.normalFunc())
console.log('arrowFunc Obj', WhatIsThisInObj.arrowFunc())
console.log('nestedNormal Obj', WhatIsThisInObj.nestedNormal()())
console.log('nestedNormal2 Obj', WhatIsThisInObj.nestedNormal2()())
console.log('nestedArrow Obj', WhatIsThisInObj.nestedArrow()())
console.log('nestedArrow2 Obj', WhatIsThisInObj.nestedArrow2()())

console.log('----------Invoking a function as method----------')

// ------------------------------------------------------------------------------

// ///////////////////////////////////////
// invoking a function as a constructor //
// ///////////////////////////////////////

/* 
* 'Constructor function' can be declared just like any other function.
* They can use 'declaration' and 'expression' for constructing 'new object'.

'Constructor function' are function that we use to create and initialise
object instances.
*/

// we use keyword 'new' to invoke constructor function
function whatMyContext() {
  this.name = 'whatMyContext function'
  // return this // global
}
// invoking
console.log('whatMyContext->', whatMyContext()) // global window object
const a = new whatMyContext()
console.log('new whatMyContext-> a ', a) // whatMyContext { name: 'whatMyContext function' }

console.log('typeof a is', typeof a) // object

/* 
re-calling Function() constructors from chapter.
they enable us to new function from string. 3*/
const sum = new Function('a', 'b', 'return a + b')
console.log(sum(1, 2))
/* 
DONT MIX FUNCTION() CONSTRUCTOR WITH CONSTRUCTOR FUNCTIONS.
Here we are studying constructor function that create and initialise
object instance
*/

function Knight() {
  this.skill = function () {
    return this
  }
}

let knight1 = new Knight()
let knight2 = new Knight()

console.log(knight1.skill() === knight1) // this will be knight1
console.log(knight2.skill() === knight2) // this will be knight2
/* 
new keyword trigger a new empty object, object is passed
to the constructor as this parameter thus becomes constructor's
function context. Newly constructed object is returned as new opertor's value.
if we compare it to the previous function we create to check this.
We escaped the hassle to write the same code again as
we are using new Knight() to refer to the function. We can create
as many new copy as we want and each time the property of new Knight
will be borrowed by new function.
*/

// ///////////////////////////////
// constructor return primitive //
// ///////////////////////////////

// adding a return value of the function
function Knight1() {
  this.skill = function () {
    return this
  }
  return 1
}
console.log(Knight1()) // 1
let samurai1 = new Knight1()
console.log(samurai1) // Knight1 {skill: ƒ}
console.log(typeof samurai1) // object
console.log(typeof samurai1.skill === 'function') // true

/* 
- if we call Knight1 function it returns 1 and 
- if we call it as a constructor
- with new key word a new samurai1 object is constructed and returned 

- Test varify that the return value of 1 IS IGNORED and 
- that a new, initialzed object has been returend from new*/

// /////////////////////////////////////////
// constructor return non premitive value //
// /////////////////////////////////////////

let puppy = {
  labrador: false,
  re: this, // empty object
  func: function () {
    return this // object
  },
  nestedFunc: function () {
    return function () {
      // return this // global
    }
  },

  // Arrow functions inherit the this
  // context from the enclosing execution context
  nestedFunc2: function () {
    return () => this // object
  },
  arrow: () => {
    return this // empty object
  },
  nestedArrow: () => {
    return () => this // empty object
  },
  nestedArrow2: () => {
    return function () {
      // return this // global object
    }
  },
}

function Dog() {
  this.labrador = true
  this.name = 'knight'
  return puppy
}

let dog = new Dog()

console.log('DOG', dog)
// {labrador: false, re: Window}
console.log(dog === puppy) // true
console.log(dog.labrador === puppy) // false
console.log('dog.re', dog.re) // empty { }
console.log('dog.func', dog.func()) // object
/*
{
  labrados: false,
  re: {},
  func: [Function: func],
  nestedFunc: [Function: nestedFunc],
  arrow: [Function: arrow]
}  
*/
console.log('dog.nestedFunc', dog.nestedFunc()()) // global
console.log('dog.nestedFunc2', dog.nestedFunc2()()) // object
console.log('dog.arrow', dog.arrow()) // empty object
console.log('dog.nestedArrow', dog.nestedArrow()()) //  empty object
console.log('dog.nestedArrow2', dog.nestedArrow2()()) // // global

/* 
when we return an object from a contractor function, that object ( puppy )
becomes the value of the whole new expression.

all the values/methods before return in the Dog function will be ignored 
in the constructor function. The constructor function will take only the 
object puppy properties which is returned.
*/

/* 
summary
- if a constructor returns an object, that object is returned as the value of whole
- new expression, the newly constructed object passed as this to the constructor is 
- discarded. 
 
- if, a non-object is returned from the constructor, the returned value is
 ignored
- and a newly created object is returned
*/

console.log('------Constructor ends------------')
// ------------------------------------------------------------------------------

// /////////////////////////
// apply and call method  //
// ////////////////////////

function Button() {
  this.clicked = false

  // this inside another function declaration ( nested function declaration )
  // refer to window object in non stict mode
  this.click = function () {
    this.clicked = true // this refer to window object when invoked with click
    console.log('BUTTON this', this)

    this.insider = function () {
      return this
    }
    return this
  }
}

// /////////////////////////////
// call with addEventListener //
// /////////////////////////////
/*
const button = new Button();

ele.addEventListener( "click", button.click ) 

after clicking the event you can see that this will refer to the window object

reason -> before dot, the thing that is calling the function is an HTML element attached to DOM
*/

// /////////////////
// call as method //
// /////////////////

let button = new Button()
console.log('button.click', button.click()) // Button object
console.log('button.clicked', button.clicked) // true
console.log('button.insider', button.insider()) // Button object
let ele = document.getElementById('test')
// ele.addEventListener("click", button.click) // HTML Element button

/* 
with bind you can bind the object button and send it with the event listner
so when ever click invoke the function, the function will
refer to object button
*/
ele.addEventListener('click', button.click.bind(button)) // true

function juggle() {
  let result = 0
  for (let n = 0; n < arguments.length; n++) {
    result += arguments[n]
  }
  this.result = result
  // return result
}

let ninja1 = {}
let ninja2 = {
  name: 'ninja2', // you can also use an object the already have property
  rank: 2,
}

/* 
'apply' have two paramenter
first is the object to be used as the function context -> this
second is an array of values to be used as the invocation argument

'call' method is similar to apply expect the second argument 
is passed directly in the argument list rather than as an array
*/
juggle.apply(ninja1, [1, 2, 3, 4, 5])
juggle.call(ninja2, 6, 7, 8, 9)

console.log('ninja1', ninja1) // {result: 15}
console.log('ninja2', ninja2) // {name: "ninja2", rank: 2, result: 30}

// ------------------------------------------------------------------
// ///////////////////////////////
// forcing context in call back //
// ///////////////////////////////

let weapons = [{ type: 'kusarigama' }, { type: 'katana' }, { type: 'odachi' }]
// console.log(weapons[0]) // { type: "kusarigama" } // typeof -> object
// console.log(typeof weapons) // typeof -> object

function foreach(list, callback) {
  for (let n = 0; n < list.length; n++) {
    /* 
    - using call to enforce this to be
    - the list element passed 
    */
    //              this,  arguments
    callback.call(list[n], n) // { type: "kusarigama" }, passing in 'n'
  }
}

//                callback
foreach(weapons, function (index) {
  // index will be our 'n'
  // this.result = index;
  console.log(this) // current entry will become current context
  console.log(this === weapons[index])
})

/* 
when to use call and when to use apply...?
Both do same thing. 
We use 'call' when we have bunch of unrelated values, call let us use them directly 
in its argument list.
We use 'apply' when we have values in array or when its convenient to collect them. 
*/

// ------------------------------------------------------------------------------
