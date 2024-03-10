// /////////////////////
// Variable Mutability /
// /////////////////////

// **const**
// while initializing const, it should be given the value.

const firstConst = 'Knight'

function ChangeConst() {
  if (firstConst === 'Knight') {
    console.log('firstConst is a Knight')
  }

  try {
    firstConst = 'Samurai'
  } catch (error) {
    console.error('An exception has occurred.')
  }

  if (firstConst === 'Knight') {
    console.log('firstConst is still a Knight')
  }
}

ChangeConst()
/* can't assign a new value to const after it's initialization */

//
const secondConst = {}
secondConst.skills = 'Long Sword'
console.log(secondConst)
/*
- an object | array initialized with const can be modified later
*/

// **var**
/* var scope is either defined in global or function lexical environment

NOTE: blocks are ignored in case of var. With Es6 we have been give const,
- let to work with bock.
*/

// scope is global
var globalKnight = 'Sir Dot'

function reportActivity() {
  console.log(globalKnight)
  // functionActivity -> scope is within the function.
  var functionActivity = 'Strong Attacks'
}

reportActivity()

try {
  console.log(functionActivity)
} catch (error) {
  console.error(error) // ReferenceError: functionActivity is not defined
}

// var dont work in block scope
function checkVarBlockScope() {
  var functionScope = 'Fun'

  // i is defined in block scope
  // but i will find nearest function or global scope
  // scope -> checkVarBlockScope()
  for (var i = 1; i < 3; i++) {
    var forMessage = globalKnight + ' ' + functionScope

    if (forMessage === 'Sir Dot Fun') {
      console.log('JS is fun')
    }
  }

  // can access the block scope value ( i and forMessage ) outside the loop
  console.log(
    'variable  defined inside block socpe with var are accessible' +
      ' outside the' +
      ' loop',
  )
}

checkVarBlockScope()

// **const and let**
const globalKnightCL = 'Luffy'

function reportActivityCL() {
  const functionActivityCL = 'Jumping'

  // const let are blocked scope
  for (let i = 1; i < 3; i++) {
    let forMessage = globalKnightCL + ' ' + functionActivityCL

    if (forMessage === 'Luffy Jumping') {
      console.log('luffy is jumping within for block') // luffy is jumping within for block
    }
  }

  // you can't access varaible declared with let or const inside
  // the block scope | loop outiside the scope
  if (typeof i === 'undefined' && typeof forMessage === 'undefined') {
    console.log('loop varaible are not accessible outside the loop') // loop varaible are not accessible outiside the loop
  }
}

reportActivityCL()

if (
  typeof functionActivityCL === 'undefined' &&
  typeof i === 'undefined' &&
  typeof forMessage === 'undefined'
) {
  console.table("we can't see function varaibles outside of a function")
}

console.log('----------------------')
// -------------------------------------------------------------------------------------

// ///////////////////////////////////////////////////
// Registering Identifiers within lexical environment /
// ///////////////////////////////////////////////////

// -------------------------------------------------------------------------------------

// ///////////////////////////////////////////
// Mimicking private varaibles with closures /
// ///////////////////////////////////////////

// constructor function
function NinjaPR() {
  // variable declared inside function are
  // not accessible form outside the function
  // they act as private variable
  var feints = 0
  // methods are defined with this
  // as they will get attached to the
  // NinjaPR directly
  this.getFeints = function () {
    return feints
  }

  this.feint = function () {
    feints++
  }

  this.accesibleWithThis = 'I am Accessible'
}

var ninjaPR1 = new NinjaPR()

/*
console.log(ninjaPR1)

NinjaPR {
  getFeints: [Function (anonymous)],
  feint: [Function (anonymous)],
  accesibleWithThis: 'I am Accessible'
}

above mentioned properties are accessible with dot notation
*/

// not accessible directly
if (ninjaPR1.feints === undefined) {
  console.log('private data is inaccessible to us.')
}

// increment function
ninjaPR1.feint()

if (ninjaPR1.getFeints() === 1) {
  console.log("We're able to access the internal feint count.")
}

// new instance
var ninjaPR2 = new NinjaPR()

if (ninjaPR2.getFeints() === 0) {
  console.log('The second ninja object gets its own feints variable.')
}

/*
- everytime we invoke a construtor function,
- we create a new lexical environment
- which keeps track of variable local to
- contructor

- whenever function is created
- it keeps reference to the lexial environment
- in which it was created
- through internal [[Environment]] property
https://www.notion.so/Closure-and-Scope-b63161840b5d40388552499c2551ef4f

- Every object created with Ninja constructor gets its
- own methods that close around the variables
- defined when the constructor was invoked

- Private variables are only accessible
- through object methods created within
- constructor.
*/

console.log('-------Private Variable ENDS---------------')

// -------------------------------------------------------------------------------------

// //////////////////////////
// Private Variables Caveat /
/////////////////////////////

function superNinja() {
  var feints = 0

  // will output the value of "private" variable
  this.getFients = function () {
    return feints
  }

  // will increment "private" varaible by 1
  this.feints = function () {
    feints++
  }
}

var ninja1 = new superNinja()
// incrementing feints
ninja1.feints()

// creating an imposter { } 😅
var imposter = {}
// copying the method from ninja1 object
imposter.getFients = ninja1.getFients
imposter.feints = ninja1.feints

// imposter incrementing feints
imposter.feints()

function checkPrivate() {
  if (imposter.getFients() === 2) {
    console.log('The imposter has access and can manipulate feints value..!')
  }
}
checkPrivate() // The imposter......variables!

console.log('-------Private Variables Caveat ENDS-----------')
//
