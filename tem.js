/*
 * JavaScript, functions are first-class objects, or first-class citizens
 *
 * functions coexist with, and can be treated like, any other JavaScript
 * object.
 *
 * Just like the more mundane JavaScript data types, they can be referenced
 * by variables, declared with literals, and even passed as function
 * parameters.
 */

// Functions as first-class objects

// //////////////////////////////////////////////////
// functions posses all the capabilities of object  /
// can be treated like object                       /
// called first-class object                        /
// //////////////////////////////////////////////////

/*
 * Created via literals
 *       - function ninjaFunction() {}
 * Assigned to
 *       - variables,
 *       - array entries,
 *       - and properties of other objects
 * */

// Assignment

// assigned to a variable
var ninjaFn = function () {
  return "nnn"
}
// console.log(ninjaFn) // [Function: ninjaFn]

// adding function to array
var ninjaArray = []

ninjaArray.push(function () {
  return "random function"
})
console.log(ninjaArray[0]()) // [Function: ninjaFn]
ninjaArray.push(99)
console.log(ninjaArray)

// can be assigned as a property of object
var ninja = {}
ninja.data = function () {}
// console.log(ninja) // { data: [Function (anonymous)] }

// can be passed as an argument
function call(ninjafunction) {
  return ninjafunction()
}
// console.log(
//   call(function () {
//     return "you passed function as an argument"
//   })
// )

//can be returned as value
var samurai = function () {
  return "Luffy"
}

// can be returned from a function
function returnSamuraiFun() {
  return samurai()
}
console.log(returnSamuraiFun()) // Luffy

// function can posses property that can be dynamically
// created and assigned;
var ninjafunction = function () {}
ninjafunction.ninja = "shadow clone jutsu"
console.log(ninjafunction.ninja) // shadow clone jutsu

// NOTE: properties must be assigned after you have
// created function, else they will return undefined
// when you call them

console.log("------------------------")

/*
 * Whatever we can do with objects, we can do with functions as well.
 * Functions are objects, just with an additional, special capability of
 * being invokable:
 *  */
//

function greet() {
  console.log("Hello, world!")
}

greet.customProperty = "Custom Greeting"

console.log(greet.customProperty) // Outputs: "Custom Greeting"