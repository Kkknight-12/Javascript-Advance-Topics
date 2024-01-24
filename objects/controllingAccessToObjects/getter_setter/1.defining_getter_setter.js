// Controlling access to properties with getters and setters

// Object are collections of key-value pairs

function ninja1(level){
    this.level = level;
}

const ninjaLevel1 = new ninja1(10);
console.log(ninjaLevel1.level); // 10

ninjaLevel1.level = 'ten';
console.log(ninjaLevel1.level); // ten
// We want to safeguard against accidental mistakes like this

// We can handle all of these cases elegantly with getter and setter methods.

console.log("----------------------------")
// ---------------------------------------------------------------------------------------

// constructor function with getter and setter methods
function Ninja2(){
    let skillLevel;

    // getter method
    this.getSkillLevel = () => skillLevel;

    // setter method
    this.setSkillLevel = value => skillLevel = value;

}

const ninjaLevel2 = new Ninja2();

ninjaLevel2.setSkillLevel(10);
console.log(ninjaLevel2.getSkillLevel()); // 10


console.log("----------------------------")

/*
* NOTE:
* In Constructor Function we can't use get and set keywords
* */
// ---------------------------------------------------------------------------------------

// using Js built in get and set keywords
// in Object literals

/*
* getter and setter methods can be defined in two ways
* - By specifying them within object literals or within ES6 class definitions
* - By using built in object,defineProperty*/

const ninjaCollection1 = {
    ninjas: ['Yoshi', 'Kuma', 'Hattori'],

    // getter method
    // getting the ninjas property at index 1
    get firstNinja(){
        console.log('Getting firstNinja');
        return this.ninjas[0];
    },

    // setter method
    // setting the ninjas property at index 1
    set firstNinja(value){
        console.log('Setting firstNinja');
        this.ninjas[0] = value;
    }
}

console.log(ninjaCollection1.firstNinja); // Yoshi
/*
* Notice:
* getter property is accessed as if it were a standard object property
* (and not as the method that it is).
* */

// setting the ninjas property at index 1
console.log(ninjaCollection1.firstNinja = 'knight'); // Yoshi

/*
* getters and setters are not called like functions, they are used like properties.
* That's why ninjaCollection1.firstNinja = 'knight' works and
* ninjaCollection1.firstNinja('knight') does not.
* */

/*
* getter and a setter for the property firstNinja
* get method don't take any arguments
* set method takes one argument
* */

console.log("----------------------------")
// ---------------------------------------------------------------------------------------

// classes

class NinjaCollection2 {
    constructor(){
        this.ninjas = ['Yoshi', 'Kuma', 'Hattori'];
    }

    // getter method
    // getting the ninjas property at index 1
    get firstNinja(){
        console.log('Getting firstNinja');
        return this.ninjas[0];
    }

    // setter method
    // setting the ninjas property at index 1
    set firstNinja(value){
        console.log('Setting firstNinja');
        this.ninjas[0] = value;
    }
}

console.log("----------------------------")
// ---------------------------------------------------------------------------------------

/*
* NOTE:
* don’t always have to define both a getter and a setter
* when you define a getter without a setter, the property becomes read-only
*
* in strict mode, an error is thrown when you try to set a read-only property
* in non-strict mode, the assignment is ignored
* */

// ---------------------------------------------------------------------------------------

// something missing

/*
* Traditionally, getters and setters are used to control access to private object properties
* but JavaScript doesn’t have private properties.
*
* The underscore prefix is a common convention for properties that should be considered private
*
* We can mimic private properties by using closures,
* an alternative way would be using Object.defineProperty() method
* */

// ---------------------------------------------------------------------------------------


// using Object.defineProperty() method
/*
* Object.defineProperty method can be used to define new properties
* by passing in a property descriptor object. Among other things,
* the property descriptor can include a get and a set property that
* define the property’s getter and setter methods.
* */

function Ninja3(){
    //  _skillLevel variable is a private variable
    let _skillLevel;

    // using Object.defineProperty to define a skillLevel property
    Object.defineProperty(this, 'skillLevel', {
        get: () => {
            console.log('Getting skillLevel value');
            return _skillLevel;
        },
        set: value => {
            console.log('Setting skillLevel value');
            _skillLevel = value;
        }
    });
}

const ninjaLevel3 = new Ninja3();
console.log('ninjaLevel3 ', ninjaLevel3) // ninjaLevel3  Ninja3 {}

// getting the skillLevel property
console.log(ninjaLevel3._skillLevel === undefined); // true

// setting the skillLevel property
ninjaLevel3.skillLevel = 10;

// getting the skillLevel property
console.log(ninjaLevel3.skillLevel === 10); // true

/*
* Because we want the skillLevel property to control access to a private variable (_skillLevel),
* we specify a get and a set method that will be called whenever the property ( skillLevel ) is accessed. */

/*
* Notice:
* unlike getters and setters specified on object literals and classes,
* the get and set methods defined through Object.defineProperty are created
* in the same scope as the “private” skillLevel variable. Both methods create
* a closure around the private variable,
* */