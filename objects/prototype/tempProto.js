function Ninja() {}

Ninja.prototype.swingSword = false

Ninja.prototype.getSwingSword = function () {
  return Ninja.prototype.swingSword
}
Ninja.prototype.setSwingSword = function () {
  return (Ninja.prototype.swingSword = true)
}

ninja1 = new Ninja()
console.log("ninja 1 swingSword", ninja1.swingSword)
ninja1.setSwingSword()
console.log("ninja 1 swingSword after reset", ninja1.swingSword)

ninja2 = new Ninja()
console.log("ninja 2 swingSword", ninja2.swingSword)
