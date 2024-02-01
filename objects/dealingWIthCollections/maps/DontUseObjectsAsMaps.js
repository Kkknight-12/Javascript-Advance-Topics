// Objects have access to properties that weren’t explicitly defined

const dictionary = {
    "ja":{
        "Ninjas for hire": "レンタル忍者",
    },
    "zh":{
        "Ninjas for hire": "忍者出租",
    },
    "ko":{
        "Ninjas for hire": "고용 닌자",
    }
}

console.log(dictionary.ja["Ninjas for hire"]); // レンタル忍者

/*
* In JavaScript, both objects and maps can be used to store key-value pairs.
* However, there are several reasons why you might want to use a Map over
* an Object:
*
* Key Types: In an object, keys can only be strings or symbols, but a map
* can have keys of any type, including functions, objects, or any primitive.
*
* Order of Elements: The Map object holds key-value pairs and remembers the
* original insertion order of the keys. This is not the case with Object,
* where the order of keys can be inconsistent.
*
* Size: With an object, you have to manually keep track of the size by
* iterating over the properties. The Map object has a size property which
* gives the number of entries in the map.
*
* Performance: If you're performing frequent additions and removals, a Map
* could perform better than an Object because it doesn't need to rehash the
* entire object whenever a change is made.
*
* Iteration: A Map is iterable, so you can directly iterate over it, whereas
* with an Object, you have to obtain the keys or values and iterate over those.
*
* You should consider using a Map when:
*
* You have keys of different types or keys that are objects.
* You need to keep track of the insertion order of keys.
* You require direct size access.
* You're performing frequent additions or removals of key-value pairs.
* You want to be able to directly iterate over the key-value pairs.
* */

const firstElement = {id: 'firstElement'};
const secondElement = {id: 'secondElement'};

const map = {};
map[firstElement] = { data: "firstElement"}

map[secondElement] = { data: "secondElement"};

console.log(map[firstElement]); // { data: 'secondElement' }
console.log(map[secondElement]); // { data: 'secondElement' }

// The second element overwrites the first element because both keys are converted to the same string.
// This is because the default toString() method of an object returns [object Object].
// To avoid this, you can use a Map instead:
console.log(map)