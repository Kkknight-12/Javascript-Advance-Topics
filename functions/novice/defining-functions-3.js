// ////////////////////////
// function declarations //
// ////////////////////////

/*
- most basic way of defining a function in JavaScript
function myFunc( arg1, arg2 ) {
}
*/

function samuraiDec() {
  return "samurai is here";
}

console.log(samuraiDec());

console.log("--------function declaration ends-----------");
/*
 * Function declaration must have name defined because they stand on their
 * own. Because one of the basic requirement for a function is that it has
 * to be invoked, we have to have a way to reference it, and the only way to
 * do this is through its name. */
// -----------------------------------------------------

// function within function
// Example 1
function ninjaDec1() {
  return function hiddenLeaf() {
    console.log("you found us...1");
  };
}

ninjaDec1()();

// Example 2
function ninjaDec3() {
  return function hiddenLeaf() {
    return "you found us...3";
  };
}

console.log(ninjaDec3()());

// Example 3
function ninjaDec2() {
  function hiddenLeaf() {
    return "you found us...2";
  }

  return hiddenLeaf(); // invoking
}

console.log(ninjaDec2());

/*
- number of invocation "()" is equivalent to
- number of function declared
*/

console.log("--------function within function ends----------------");

// -----------------------------------------------------
// //////////////////////
// function expression //
// //////////////////////
/*
 * Function which are always part of another statement ( for example, as the
 * right side of expression, or as argument to another function ) are called
 * function expressions.
 */

// example 1
var a = function () {};

// example 2
// function expression as part of variable declaration
var myFuncDec = function (callback) {
  return callback()();
};

// expression as an argument of function call
myFuncDec(function () {
  // function expression as a function return value
  return function () {
    console.log("I am running");
  };
});

// function expression as Immediately invoked function
(function namedFuncExp() {
  console.log("iife");
})();
// myFuncDec()

console.log("--------function expression ends----------------");

/*
 * Function expressions are part of other javascript expression, so we have
 * alternative ways to invoke them. For example, if a function expression is
 * assigned to a variable, we can use that variable to invoke the function,
 * or if is an argument to another function, we can invoke it within that
 * function through matching parameter name */
// -----------------------------------------------------
// /////////////////////
// immediate function //
// /////////////////////

//   (function namedFunctionExpression(returnWhatYouGet) {
//     return returnWhatYouGet
//   }
// )(1)

// ((value) => {
//   var greet = "Hello"
//   console.log(greet + " " + value)
// })("IIFEs")

// + | - | ! | ~
// can be used in place of ( )
// +function (val) {console.log(val)}(1)

console.log("--------immediate function ends----------------");
// -----------------------------------------------------

// //////////////////
// Arrow function  //
// //////////////////
/*
- arrow functions are a simplification
- of function expressions.
*/

// callback
// using callback function expression
var valuesA = [0, 3, 2, 5, 7, 4, 8, 1];

//             param => expression
valuesA.sort((value1, value2) => value1 - value2);

console.log("-----Arrow function ends-------");