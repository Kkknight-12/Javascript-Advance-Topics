# Proxy

A **proxy** is a surrogate through which we control access to another object. 
It enables us to define custom actions that will be executed when an object 
is being interacted with—for example, when a property value is read or set, 
or when a method is called. You can think of **proxies** as almost a 
***generalization of getters and setters***; 
- but with each getter and setter, you control access to only a single object property, 
- whereas ***proxies enable you to generically handle all interactions with an 
  object, including even method calls***.

We can use proxies when we’d traditionally use getters and setters, such as 
for logging, data validation, and computed properties. But proxies are even more powerful. They allow us to easily add profiling and performance measurements to our code, auto populate object properties in order to avoid pesky null exceptions, and to wrap host objects such as the DOM in order to reduce cross-browser incompatibilities.

**Proxies** are introduced by _ES6_

## Proxies in JavaScript can be used in a variety of scenarios. Here are a few examples:

1. Data Validation: Proxies can be used to validate data before it's set on an 
object. For example, you can use a Proxy to ensure that only numbers are set on a particular property.

```javascript
let validator = {
  set: function(obj, prop, value) {
    if (typeof value !== 'number') {
      throw new TypeError('The value is not a number');
    }
    obj[prop] = value;
    return true;
  }
};

let obj = new Proxy({}, validator);

try {
  obj.age = 'test'; // Throws an exception
} catch (e) {
  console.log(e.message); // "The value is not a number"
}

obj.age = 25; // Works fine
```

2. Performance Measurement: Proxies can be used to measure the performance of function invocations, without even modifying the source code of a function.

```javascript
  function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

isPrime = new Proxy(isPrime, {
  apply(target, thisArg, args) {
    console.time('isPrime');
    const result = target.apply(thisArg, args);
    console.timeEnd('isPrime');
    return result;
  }
});

console.log(isPrime(1299827)); // Logs the time taken to execute isPrime function
```

3. Access Control: Proxies can be used to control access to certain 
   properties of an object
```javascript
let accessController = {
  get: function(obj, prop) {
    if (prop === 'password') {
      throw new Error('Access to password is not allowed');
    }
    return obj[prop];
  }
};

let user = new Proxy({username: 'John', password: 'secret'}, accessController);

console.log(user.username); // "John"
try {
  console.log(user.password); // Throws an exception
} catch (e) {
  console.log(e.message); // "Access to password is not allowed"
}
```
4. Auto-populating Properties: As shown in your code, Proxies can be used to auto-populate properties of an object
```javascript
function Folder() {
  return new Proxy({}, {
    get: (target, property) => {
      if (!(property in target)) {
        target[property] = new Folder();
      }
      return target[property];
    }
  });
}

const rootFolder = new Folder();
rootFolder.ninjaasDir.firstNinjaDir.ninjaFile = 'Yosh.txt';
console.log(rootFolder.ninjaasDir.firstNinjaDir.ninjaFile); // "Yosh.txt"
```