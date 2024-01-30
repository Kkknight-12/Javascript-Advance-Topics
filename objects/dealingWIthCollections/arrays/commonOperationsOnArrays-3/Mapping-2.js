const ninjas = [
  { name: 'Yagyu', weapon: 'shuriken' },
  { name: 'Yoshi', weapon: 'katana' },
  { name: 'Kuma', weapon: 'wakizashi' },
]

// We create a new, empty array
const weapons = []

// and use the forEach method to iterate over the ninjas array
ninjas.forEach((ninja) => {
  // add the current weapon to the weapons array
  weapons.push(ninja.weapon)
})

if (
  weapons[0] === 'shuriken' &&
  weapons[1] === 'katana' &&
  weapons[2] === 'wakizashi' &&
  weapons.length === 3
)
  console.log('The new array contains all weapons')

// map method constructs a completely new array and then iterates over the
// input array.
const weapons2 = ninjas.map((ninja) => {
  return ninja.weapon
})
console.log(weapons2)