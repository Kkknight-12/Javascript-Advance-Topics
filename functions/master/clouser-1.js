/**
 * Closures allow function to access and manipulate variables that are
 * external to that function. It Allows a function to access all the
 * variables, as well as other functions
 *
 * Scope is part of the program in which a certain name is bound to a
 * certain variable.
 *
 * using closure with callbacks
 * - Closure isn't a snapshot of the state of scope at the time of creation, but
 * - an active encapsulation of that start that we can
 * - modify as long as the closure exists.
 */

// global variables
var outerValue = 'Knight';
var later; // innerFunction()

function outerFunction() {
  // local variable
  var innerValue = 'ninja';

  function innerFunction() {
    if (outerValue === 'Knight') {
      // global variable is accessible
      console.log('i can see Knight');
    }
    if (innerValue === 'ninja') {
      // local variable is accessible
      console.log('i can see ninja');
    }
  }
  // creating refernce to global variable
  // which will allow us to call the function later
  later = innerFunction;
  // innerFunction();
}

outerFunction(); // -> local innerFunction, innervalue: 'ninja', this- window
later(); // local -> this - window | Closure(outerFunction)-> innervalue: 'ninja'

/*
- later is a variable which we are using to form a refrence to Func innerFunction()
- outerFunction() runs an registeres variable innerValue
- and create link later = innerFunction
- later() is then used to call innerFunction()
- when innerFunction() runs it needs  var innerValue which is
- inside outerFunction()
- its is kept alive with closure which is formed when outerFunction() ran
*/

/*
we are executing 'innerFunction' after 'outerFunction' has been executed via
trick-> copying a referencing to the function to global variable 'later'.
When innerFunction executes, scope inside outerfunction is long gone. But because we have 'closure' the 'innervalue' variable will be available when we execute inner function.

When we declare innerFunction inside the outer function, not only is the function
declaration defined, but the closure is created that encompasses the function
definition as we as all variables in scope at the point of function definition.
*/

console.log('-----------------');

// -------------------------------------------------------------------------------------

// ///////////////////
// private variable //
// ///////////////////

console.log('PRIVATE VARIABLES');
/*
- private variables — properties of an object that are hidden from outside parties.
- JavaScript doesn’t have native support for private variables.
- But by using a closure, we can achieve an acceptable approximation,
  - as demonstrated by the following code
*/

function Football() {
  // private variable - which can't be accessed directly from outside, which prevents us from being able to make uncontrolled changes to the value of the variable
  let goals = 0;

  // getter method
  // accessor method -> use to obtain value of private variable
  this.getGoals = function () {
    return goals;
  };

  // setter method
  this.goal = function () {
    goals++;
  };
}

// creating instance of Football object
let TeamA = new Football();
// incrementing
TeamA.goal();

console.log('goals', TeamA.goals); //undefined
// private data is inaccessible to us

console.log('getGoals', TeamA.getGoals()); // 1
// we are able to access internal goals count

// creating new Team
// new will have there number of goals
let TeamB = new Football();
console.log(TeamB.getGoals()); // 0
//  second ninja will get its own goals varaible

/*
using closure allows the state of Football to be maintained within a method,
without letting it be directly accessed by a user of the method - because variable is available to inner methods via their closures, but not to code that lies outside the constructor.
*/

console.log('----PRIVATE VARIABLES INTRO ENDS-----');

// -------------------------------------------------------------------------------------

// //////////////////////////////
// using closure with callbacks /
// //////////////////////////////

function animateIt(elementID) {
  var elem = document.getElementById(elementID);
  var tick = 0;
  /*
  - every 300 milisecond this timer function will be called
  - which will increase the tick count
  - the count will increase till 100 then the
  - clear function will run

  https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript

  - setInterval is an async function
  - so it will run after the main thread is complete,
  - will run at last, after all the functions have been executed

  - closure can be seen here as the timer function needs to remember
  - and access variable tick, elem, timer
  */
  //                       callback
  var timer = setInterval(function () {
    if (tick < 10) {
      elem.style.left = elem.style.top = tick + 'px';
      console.log('tick', tick); // increment by 1 every time till reach 100
      tick++;
    } else {
      clearInterval(timer);

      if (tick === 10) {
        console.log('tick accessed via a colsure.');
      }
      if (elem) {
        console.log('Element also accessed via a closure');
      }
      if (timer) {
        console.log('Timer reference also obtained via a closure');
      }
    }
  }, 300);
}

// animateIt("box1")

// tick accessed via a colsure.
// Element also accessed via a closure
// Timer reference also obtained via a closure
/*
- If we keep the variable in the global scope, we need new set of varaibles
- for each function we needed to run.
- By defining the variable inside function
- relying on closures to make them available to the
- timer callback invocations, each animation gets its own
- private 'bubble' of variables
*/

console.log('-------using closure with callbacks ENDS-------');
// -------------------------------------------------------------------------------------

// ///////////////////
// Execution Context /
// ///////////////////

/**
- Two main types of Javascript code
- global code, function code

- When a code is executed in Js engine, each statement is executed
- in a certain EXECUTION CONTEXT.

Two types of EXECUTION CONTEXT
- global execution context
- function execution context

- only one GLOBAL EXECUTION CONTEXT which is created when the JS program starts
- executing
- whereas a new FUNCTION EXECUTION CONTEXT is created on each function invocation

WARNING: Dont confuse FUNCTION EXECUTION CONTEXT with FUNCTION CONTEXT.
FUNCTION CONTEXT is the object on which the function is invoked, which can be accessed through "this" keyword.

- Js is single-threaded. One piece of code is executed at a time.
- Everytime a function is invoked. current execution context is stopped
- new function context is created. After function perform its task
- function execution context is discarded. And Caller ( the function which called it )
- execution context is restored.

- EXECUTION CONTEXT STACK | STACK is used to keep track of all these execution contexts- both
- one that's executing and one that is waiting.

- STACK is a Data Structure in which you can put new items only to top and can
- take existing items only from top.
- This is why it is called LIFO (Last In First Out) data structure.
*/

function sneak(ninja) {
  crouch(ninja + ' time running'); // calling another function
}

function crouch(message) {
  console.log(message); // logging message to console
}

// funciton call from global code
sneak('first');
sneak('second');

// -------------------------------------------------------------------------------------

// /////////////////////
// Lexical Environment /
// /////////////////////

/**
- LEXICAL ENVIRONMENT keep track of mapping from identifiers to
- specific varaibles.
 ------------------------------------------------------------------
|- All JavaScript variables must be identified with unique names.  |
|- These unique names are called identifiers.                      |
 ------------------------------------------------------------------
*/

/**
- Execution Context is vital in IDENTIFIER RESOLUTION
- ( process of figuring out which variable a certain identifier refers to eg:
- const | var | let naam = "champak lal"
- function Bhide() { } ).
- Execution context do this via LEXICAL ENVIRONMENT.
- */

// identifier      value
// variable
var ninjaLE = 'Hattori Hanzo';
console.log(ninjaLE);

// -------------------------------------------------------------------------------------

// //////////////
// Code Nesting /
// //////////////

/**
- Lexical Environemnt is heavily based on code nesting.
- Enable One code structure to be contained within another

- nesting () is contained within gloabal code
- report is nested within nesting function
- loop is nested within report function
*/

// global variable and function
var ninjaN = 'Misashi';

function nesting() {
  /*
  scope - https://www.w3schools.com/js/js_scope.asp */
  // function scope
  var action = 'Sneak';

  function report() {
    var reportNum = 3;

    // block scope
    for (var i = 0; i < reportNum; i++) {
      console.log(`${ninjaN} ${action} level ${i}`);
    }
  }
  report();
}

nesting();
/**
- each of these code structure gets an associated lexical environment
- everytime code is evaluated.
- inner code structure has access to varaibles defined in outer code
*/

// -------------------------------------------------------------------------------------

// /////////////////////////////////////
// Code Nesting and Lexical Environment/
// /////////////////////////////////////

/**
- In addition to keeping track of local variables, function declarations,
- function parameters, each lexical env has to keep track of its outer
- lexical environment.

- If the identifier is not found in the current environment, outer
- environment is searched.
*/

// global variable
var ninjaNLE = 'Yamamoto';

function sneakNLE() {
  // have access to local action and global ninjaNLE
  var action = 'Skulking';

  function report() {
    // have access to local intro and outer action and global ninjaNLE
    var intro = 'Aye Aye..!';

    if (intro === 'Aye Aye..!') {
      console.log('local');
    }
    if (action === 'Skulking') {
      console.log('Outer');
    }
    if (ninjaNLE === 'Yamamoto') {
      console.log('Global');
    }
  }
  report();
}
sneakNLE();

/**
- sneakNLE will keep a reference to global environment,
- report function will keep a reference to sneakNLE environment
*/

// -----------------------------------------------------------------------
