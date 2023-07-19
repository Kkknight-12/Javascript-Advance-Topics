// ///////////////////////////////
// Back to fixing our click me  //
// //////////////////////////////

/*
we can use call and apply to get result.
But we will be using
- 'bind' and
- 'arrow function' which is 'more elegant' way to achieve same result
*/

//
// Arrow function
function Button2() {
  this.clicked = false;

  // arrow function
  this.click = () => {
    // this inside arrow function refer to the nearest scope
    // Button2 will become this
    this.clicked = true; //
    // console.log(this) // Button2 {clicked: true, click: ƒ}
    console.log("Button2 -> ", button2.clicked); // true
  };
}
let button2 = new Button2();
let elem2 = document.getElementById("test2");

// console.log("before click button2.click", button2.clicked) // false
// console.log("button2.click()", button2.click()) // undefined
// console.log("after click button2.click", button2.clicked) // true

elem2.addEventListener("click", button2.click); // Button2 {clicked: true, click: ƒ}

// ------------------------------------------------------------------------------

// ///////////////////////////
// strange behavior of this //
// ///////////////////////////

///////////////////////////////////////
// this in normal function in object  /
///////////////////////////////////////
const doggy = {
  // normal function
  bark: function () {
    console.log("Woof!");
  },
  clicked: false,
  barkTwice: function () {
    this.bark();
    // this.clicked = true
    console.log("THIS clicked", this.clicked);
  },
};

doggy.bark();
// Woof!
doggy.barkTwice();
// woof!
// THIS clicked false

///////////////////////////////////////
// this in arrow function in object  //
///////////////////////////////////////
let bt = {
  clicked: false,
  // arrow function
  click: () => {
    // this is global
    // so it won't change bt.clicked
    this.clicked = true;
    /*
    // global obj
    */
    console.log("bt.click", this);
  },
};

bt.click(); // global obj
console.log("bt.clicked", bt.clicked); // false

let elem3 = document.getElementById("test3");
elem3.addEventListener("click", bt.click); // window object

/**
 * Arrow function picks up the value of this parameter at the moment of
 * their creation. Because the click arrow function is created as a property
 * value on an object literal,
 * and the object literal is created in global code, this value of the arrow
 * function will be this value of the global code.
 */

// ------------------------------------------------------------------------------

// ///////////////
// Bind method  //
// ///////////////

/**
 * bind method is available to all functions, and is designed to create and
 * return a new function that’s bound to the passed-in object (in this case,
 * the button object). The value of this parameter is always set to that
 * object, regardless of the way the bound function was invoked
 */

let bindbt = {
  clicked: false,
  click: function () {
    this.clicked = true;
    console.log(this); // bindbt{clicked: true, click: ƒ}
    console.log(bindbt.clicked); // true
  },
};

let elem4 = document.getElementById("test4");
elem4.addEventListener("click", bindbt.click.bind(bindbt)); //{clicked: true, click: ƒ}
/**
 * Whenever the button is clicked, that bound function will be invoked with
 * the button object as its context,
 */

// ------------------------------------------------------