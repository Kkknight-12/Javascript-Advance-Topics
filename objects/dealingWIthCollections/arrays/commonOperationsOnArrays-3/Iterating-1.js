const ninjas = ['Kuma', 'Hattori', 'Yagyu']

// for loop
for (let i = 0; i < ninjas.length; i++) {
  console.log(ninjas[i])
}
// for loop is very verbose

//  forEach
// To make life easier, all JavaScript arrays have a built-in forEach
const ninjas2 = ['Yagyu', 'Kuma', 'Hattori']

ninjas2.forEach((ninja) => {
  console.log(ninja !== null, ninja)
})