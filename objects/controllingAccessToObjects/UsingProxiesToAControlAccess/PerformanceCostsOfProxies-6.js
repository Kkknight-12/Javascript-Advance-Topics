// Performance Cost of Proxies

/*
 * a proxy is a surrogate object through which we control access to another
 * object.
 * - A proxy can define traps, functions that will be executed whenever a
 *   certain operation is performed on a proxy.
 *   And, as you’ve also seen, we can use these traps to implement useful
 *   functionalities such as logging, performance measurements,
 *   autopopulating properties, negative array indexes, and so on.
 *
 * - Unfortunately, there’s also a downside. The fact that all our
 *   operations have to pass in through the proxy adds a layer of
 *   indirection that enables us to implement all these cool features, but
 *   at the same time it introduces a significant amount of additional
 *   processing that impacts performance
 *  */

// Checking the performance limitations of proxies

function createNegativeArrayProxy(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array");
  }

  return new Proxy(array, {
    get: (target, index) => {
      index = +index;
      return target[index < 0 ? target.length + index : index];
    },
    set: (target, index, val) => {
      index = +index;
      return (target[index < 0 ? target.length + index : index] = val);
    },
  });
}

function measure(items) {
  const startTime = new Date().getTime();

  for (let i = 0; i < 500000; i++) {
    items[0] = "Yoshi";
    items[1] = "Kuma";
    items[2] = "Hattori";
  }
  return new Date().getTime() - startTime;
}

const ninjas = ["Yoshi", "Kuma", "Hattori"];
const proxiesNinjas = createNegativeArrayProxy(ninjas);
console.log("proxiesNinjas ", proxiesNinjas);
// proxiesNinjas  [ 'Yoshi', 'Kuma', 'Hattori' ]

console.log(
  "Proxies are around ",
  Math.round(measure(proxiesNinjas) / measure(ninjas)),
  "times slower"
);
// Proxies are around  16 times slower