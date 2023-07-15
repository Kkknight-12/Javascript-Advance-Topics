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

// Javascript objects
/*
 * They can be created via literals: {}
 * They can be assigned to
 *      - variables,
 *      - array entries, and
 *      - properties of other objects:
 * */

// Assigning new object to variable ninja;
var ninja = {};

// dynamically creating properties
ninja.clan = "samurai";

// adding object to an array
var ninjaArray = [];
ninjaArray.push({ name: "Knight" });
console.log(ninjaArray); //  [ { name: 'Knight' } ]

// adding new object as a property to another object
ninja.data = {};
console.log(ninja); //  { clan: 'samurai', data: {} }

// passing object as argument to a function
function hide(ninja) {
  ninja.visibility = false;
  return ninja;
}
console.log(hide({})); // {visibility: false}

// can be returned as values
function returnNewNinja() {
  return {};
}
console.log(returnNewNinja());

console.log("------------------------");

// ----------------------------------------------------------------------
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
var ninjaFn = function () {};
console.log(ninjaFn); // [Function: ninjaFn]

// adding function to array
var ninjaArray = [];

ninjaArray.push(function () {});
console.log(ninjaArray); // [Function: ninjaFn]

// can be assigned as a property of object
var ninja = {};
ninja.data = function () {};
console.log(ninja); // { data: [Function (anonymous)] }

// can be passed as an argument
function call(ninjafunction) {
  return ninjafunction();
}
console.log(
  call(function () {
    return "you passed function as an argument";
  })
);

//can be returned as value
var samurai = function () {
  return "Luffy";
};

// can be returned from a function
function returnSamuraiFun() {
  return samurai();
}
console.log(returnSamuraiFun()); // Luffy

// function can posses property that can be dynamically
// created and assigned;
var ninjafunction = function () {};
ninjafunction.ninja = "shadow clone jutsu";
console.log(ninjafunction.ninja); // shadow clone jutsu

// NOTE: properties must be assigned after you have
// created function, else they will return undefined
// when you call them

console.log("------------------------");

/*
 * Whatever we can do with objects, we can do with functions as well.
 * Functions are objects, just with an additional, special capability of
 * being invokable:
 *  */
// ----------------------------------------------------------------------

// ////////////
// callback  //
// ////////////

/*
- a function to be called at a later time  
*/
var text = "you reached call back";
function getText() {
  return text;
}

function useless(ninjaCallback) {
  return ninjaCallback();
}

console.log("useless", useless(getText)); // useless you reached call back

/*
 * As useless as this function is, it demonstrates the ability to pass a
 * function as an argument to another function, and to subsequently invoke
 * that function through the passed parameter.
 * */

// rewrite callback

var text2 = "you again reached call back";
function useless2(callback) {
  return callback();
}

// better approach for callback

/*  
- now when calling the HOF
- we are defining callback body
- inside annonymous function
*/

console.log(
  useless2(function () {
    return text2;
  })
);

/*
- arrow function
console.log(
  useless2( () => text2)
)  
*/

// sorting with callback
var values = [0, 3, 6, 7, 2, 1, 9, 3];

values.sort(function (val1, val2) {
  return val2 - val1; // val2 > val 1 ascending
  // return val1 - val2 // val1 > val 2 descending
});

console.log(values); // [9, 7, 6, 3, 3, 2, 1, 0]

console.log("-----------Callback--ends-------------");