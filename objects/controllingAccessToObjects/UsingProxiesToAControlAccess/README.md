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