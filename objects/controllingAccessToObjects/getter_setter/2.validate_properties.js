/*
 * We can take advantage of setters to perform an action whenever code
 * attempts to update the value of a property.
 *
 * For example,
 * one of the things we can do is validate the passed-in value.
 * */

function Ninja1() {
  let _skillLevel = 0

  Object.defineProperty(this, 'skillLevel', {
    get: () => _skillLevel,

    set: (value) => {
      // Validate that the value being set is a number
      if (!Number.isInteger(value)) {
        throw new TypeError('Skill level should be a number')
      }
      _skillLevel = value
    },
  })
}

const ninja1 = new Ninja1()
// setting skillLevel to a number
ninja1.skillLevel = 10
console.log(ninja1.skillLevel) // 10

// setting skillLevel to a non-integer value
try {
  ninja1.skillLevel = 'Great'
} catch (e) {
  console.log('Setting skillLevel to a non-integer value throws an exception')
}
console.log(ninja1.skillLevel) // 10

/*
 * whenever a new value is assigned to the skillLevel property, we check
 * whether the passed-in value is an integer.
 *  */

// ----------------------------------------------------------------------

// Using getters and setters to define computed properties

/*
 * getters and setters can be used to define computed properties, properties
 * whose value is calculated per request. Computed properties don’t store a
 * value; they provide a get and/or a set method to retrieve and set other
 * properties indirectly.
 *  */

const shogun = {
  name: 'Yoshiaki',
  clan: 'Ashikaga',
  get fullTitle() {
    return this.name + ' ' + this.clan
  },
  set fullTitle(value) {
    const segments = value.split(' ')
    this.name = segments[0]
    this.clan = segments[1]
  },
}
console.log(shogun) // { name: 'Yoshiaki', clan: 'Ashikaga', fullTitle: [Getter/Setter] }

console.log(shogun.name) // Yoshiaki
console.log(shogun.clan) // Ashikaga
console.log(shogun.fullTitle) // Yoshiaki Ashikaga

shogun.fullTitle = 'Ichigo Quincy'
console.log(shogun.name) // Ichigo
console.log(shogun.clan) // Quincy
console.log(shogun.fullTitle) // Ichigo Quincy

/*
 * get method computes the value of the fullTitle property, by
 * concatenating the name and clan properties.
 * set method split the assigned string into segments
 *  */