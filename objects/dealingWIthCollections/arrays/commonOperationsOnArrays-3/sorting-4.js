const ninjas = [{ name: 'Yoshi' }, { name: 'Yagyu' }, { name: 'Kuma' }]

// sorting in ascending order
ninjas.sort(function (ninja1, ninja2) {
  //  -1, it means the first item should come before the second item
  if (ninja1.name < ninja2.name) {
    return -1
  }
  // If you return 1, it means the first item should come after the second item
  if (ninja1.name > ninja2.name) {
    return 1
  }

  return 0
})

if (ninjas[0].name === 'Kuma') console.log('Kuma is first')
if (ninjas[1].name === 'Yagyu') console.log('Yagyu is second')
if (ninjas[2].name === 'Yoshi') console.log('Yoshi is third')

console.log(ninjas) // [ { name: 'Kuma' }, { name: 'Yagyu' }, { name: 'Yoshi' } ]

// If ninja1.name is less than ninja2.name, it returns -1 which means ninja1 should come before ninja2.
//  If ninja1.name is greater than ninja2.name, it returns 1 which means ninja1 should come after ninja2.

/*
 * -1 : The first item comes before the second (like 'a' before 'b')
 * 1 : The first item comes after the second (like 'b' after 'a')
 * 0 : The items are equal, their order doesn't change
 *
 * For descending order, you simply swap -1 and 1.
 * */