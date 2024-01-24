/**
 * we can create proxies by using the built-in Proxy constructor. Let’s
 * start simple, with a proxy that intercepts all attempts to read and write
 * to properties of an object.
 * */

const emperor = { name: "Komei" };
// The emperor is our target object.

// Creates a proxy with the Proxy constructor that takes in the object the
// proxy wraps...
const representative = new Proxy(emperor, {
  get: (target, key) => {
    if ("Reading " + key + " through a proxy") {
      return key in target ? target[key] : "Don't bother the emperor!";
    }

    // ...and an object with traps that will be called when reading
    // (get) and writing (set) to properties.
  },
  set: (target, key, value) => {
    if ("Writing " + key + " through a proxy") {
      target[key] = value;
      return true;
    }
  },
});

/*
 * Accesses the name property both through the emperor object and through the
 * proxy object
 * */
console.log("The emperor's name is Komei", emperor.name === "Komei");
//  true

console.log(representative.name);
// Komei

console.log(
  representative.name === "Komei",
  "We can get the name property through a proxy"
); // true

/*
 * Accessing a non existing property directly on the object returns
 * undefined.  */
console.log(
  emperor.nickname === undefined,
  "The emperor doesn’t have a nickname "
);
// true

/*
 * Accessing a property through a proxy detects that the object doesn’t exist
 * in our target object, so a warning message is returned.
 *  */
console.log(
  representative.nickname === "Don't bother the emperor!",
  "The" + " proxy jumps in when we make in proper requests"
);
// true

/*
 * Adds a property through the proxy. The property is accessible both through
 * the target object and through the proxy.
 *  */
representative.nickname = "Tenno";
console.log(emperor.nickname === "Tenno", "The emperor now has a nickname");
// true

console.log(
  representative.nickname === "Tenno",
  "The nickname is also accessible through the proxy"
);
// true

/*
 * - We first create our base emperor object that has only a name property.
 *
 * - Next, by using the built-in Proxy constructor, we wrap our emperor object
 *  (or target object, as it’s commonly called) into a proxy object named
 *  representative.
 *
 * - During proxy construction, as a second argument,
 *  we also send an object that specifies traps, functions that will be
 *  called when certain actions are performed on an object:
 *
 * const representative = new Proxy(emperor, {
 *  get: (target, key) => {
 *    report("Reading " + key + " through a proxy");
 *    return key in target ? target[key] : "Don't bother the emperor!";
 * },
 *  set: (target, key, value) => {
 *    report("Writing " + key + " through a proxy");
 *    target[key] = value;
 * },
 * });
 *
 * In this case we have specified two traps:
 *  - get trap ->  called whenever we try to read a value of a property
 *                 through the proxy.
 *  - set trap ->  will be called whenever we set a property value
 *                 through the proxy.
 *
 * **get trap** performs the following functionality:
 *    - If the target object has a property, that property is returned;
 *    - and if the object doesn’t have a property, we return a message
 *      warning our user not to bother the emperor with frivolous details.
 * get: (target, key) => {
 *    report("Reading " + key + " through a proxy");
 *    return key in target ? target[key] : "Don't bother the emperor!"
 * }
 *
 * we test that we can access the name property both directly through the
 * target emperor object and through our proxy object:
 *
 * If we access the name property directly through the emperor object, the
 * value Komei is returned.
 * But if we access the name property through the proxy object, the get trap
 * is implicitly called. Because the name property is found in the target
 * emperor object, the value Komei is also returned.
 *
 * On the other hand, if we access a non existing nickname property directly
 * on the target emperor object, we’ll get, unsurprisingly, an undefined
 * value. But if we try to access it through our proxy object, the get
 * handler will be activated. Because the target emperor object doesn’t have
 * a nickname property, the proxy’s get trap will return the Don't bother
 * the emperor! message.
 *
 *
 * This is the gist of how to use proxies: Through the Proxy constructor, we
 * create a proxy object that controls access to the target object by
 * activating certain traps, whenever an operation is performed directly
 * on a proxy.
 *
 * In this example, we’ve used the get and set traps, but many other
 * built-in traps allow us to define handlers for various object actions
 * (see http://mng.bz/ba55). For example:
 *
 * - The **apply trap** will be activated when calling a function,
 *
 * - **construct trap** will be activated  when using the new operator.
 *
 * - The **get** and **set** traps will be activated when reading/writing to a
 *  property.
 *
 * - The **enumerate trap** will be activated for for-in statements.
 *
 * - **getPrototypeOf** and **setPrototypeOf** will be activated for getting and
 *  setting the prototype value.
 *
 *  */

// ------------------------------------------------------------------------------------