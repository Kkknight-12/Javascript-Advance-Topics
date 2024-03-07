// ///////////////////////
// Arguments parameters //
// ///////////////////////

/*
- A parameter is a variable that we list as part of a function definition.
- An argument is a value that we pass to the function when we invoke it.
*/

//              parameter
function assassin(name) {
  return `${name}, "hidden blade"`
}

//                  arguments
console.log(assassin('Ezio'))

let performAction = function (person, action) {
  return `${person} ${action}`
}
console.log(performAction('shot', 'fire arrow'))

let longBow = (range) => `${range} meter`

console.log(longBow(300))

/*
- When a list of arguments is supplied as a part of
- a function invocation, these arguments are assigned
- to the parameters in the function definition in the
- order specified. The first argument gets assigned to
- the first parameter, the second argument to the
- second parameter, and so on.
*/

function practice(language, IDE, source) {
  console.log(`I am practicing ${language} on ${IDE} from ${source}`)
}

practice('Javascript')
// I am practicing Javascript on undefined from undefined

console.log('-----Arguments parameters ends-------')
// --------------------------------------------------

// ////////////////
// rest parameter /
// ////////////////

function multiMax(first, ...remainingNumbers) {
  console.log(`first ${first}`)
  console.log(`remainingNumbers ${remainingNumbers}`)
}
multiMax(193, 1, 2, 3)

/*
- Only the last function parameter can be a rest parameter
*/

console.log('-----rest parameter ends-------')
// --------------------------------------------------

// ///////////////////
// default parameter /
// ///////////////////

// taking default parameter before es6
function performActionB(ninja, action) {
  action = typeof action === 'undefined' ? 'sneak' : action
  return ninja + ' ' + action
}

console.log(performActionB('hattori'))

// ES6 added support for default parameters
function performActionD(ninja, action = 'sneak') {
  return ninja + ' ' + action
}

console.log(performActionD('Hanzo'))
// if we specify value, default value is overridden
console.log(performActionD('Hanzo', 'super ninja'))

// //////////////////////////////
// implicit function parameters /
// //////////////////////////////
/*
- function invocations are usually passed two implicit
parameters: arguments and this
implicit means that these parameters aren't explicitly
listed in the function signature, but are silently passed to the function
and accessible within the function

- arguments is collection of all parameters passed to a function, usefully as it allow us to access all function parameter.

- 'arguments' object have property name 'length' indicates the exact number of argument. value can be obtained by using array indexing notation.
 */

function abc(a, b, b) {
  console.log(`argument 1 is ${arguments[0]}`) // argument 1 is a
  console.log(`argument 2 is ${arguments[1]}`) // argument 2 is b
  console.log(`argument 3 is ${arguments[2]}`) // argument 3 is c
  console.log('arguments', arguments)
  // { '0': 'a', '1': 'b', '2': 'c' }
  console.log('typeof arguments', typeof arguments)
  // object
}

abc('a', 'b', 'c')

// checking the length of arguments passed
// with arguments.length
function agrLength(a, b, c, d) {
  console.log('arguments length', arguments.length)
}
agrLength('a', 'b', 'c', 'd') // // 4

// ------------------------------------------------------------------------------------

/*
arguments parameter is not an array, array method won't
work on it
*/

function sum() {
  var sum = 0
  console.log('typeof sum args', typeof arguments)
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sum(1, 2, 34)) // 37
console.log(sum(1, 2)) // 3
console.log(sum(1, 2, 3, 4)) // 10

// ------------------------------------------------------------------------------------

/*
in sum function we are not explicitly listing parameters. Still
we are accessing all the function arguments through arguments object
*/

/*
we can use Rest parameter instead of arguments parameter.
rest parameter is a real array so we can use array methods
which gives us advantage over arguments.
*/

function resSum(...a) {
  var sum = 0
  a.forEach((item) => {
    sum += item
  })
  return sum
}
console.log(resSum(1, 2, 3, 4, 5)) // 15

// ------------------------------------------------------------------------------------

// //////////////////////////////////////////////////////
// Arguments object is an alias to function parameters  /
// //////////////////////////////////////////////////////
function infiltrate(person) {
  // accessing value 'Mali Bhaia' through parameter person
  // and also through arguments object.
  if (person === 'Kaido Fortress') {
    console.log(person) // Kaido Fortress
  }
  if (arguments[0] === 'Kaido Fortress') {
    console.log('Luffy will penetrate through the defence') // Bingo
  }

  /*
    arguments parameter aliases function parameter. So if
    we set arguments[0] to some value, first paramter will be
    changed.

    changing parameter
  */
  arguments[0] = 'Luffy, Zoro, Kid, Yamato'
  console.log(person) // Luffy, Zoro, Kid, Yamato

  /*
    same is true if we change parameter, the changes can be observed in paramter and arguments
  */
  person = 'Sanji, Nami, Yoho Ho ho, Samurai, Ussop, Chopper are on there way'
  console.log(arguments[0]) // Sanji, Nami, Yoho Ho ho, Samurai, Ussop, Chopper are on there way
}

infiltrate('Kaido Fortress')
/*
- arguments object is an alias for the function parameters, if we change the arguments object, the change is also reflected in the matching function parameter.

- same holds true in the other direction. If we change a parameter, the change can be observed in both the parameter and the arguments object:
*/
