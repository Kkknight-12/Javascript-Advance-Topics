/*
 * In addition to simplifying logging, proxies can be used for auto-populating
 * properties. For example, imagine that you have to model your computer’s
 * folder structure, in which a folder object can have properties that can
 * also be folders. Now imagine that you have to model a file at the end of a
 * long path, such as this:
 *
 * rootFolder.ninjasDir.firstNinjaDir.ninjaFile = "yoshi.txt";
 *
 * To create this, you might write something along the following lines:
 * const rootFolder = new Folder();
 * rootFolder.ninjasDir = new Folder();
 * rootFolder.ninjasDir.firstNinjaDir = new Folder();
 * rootFolder.ninjasDir.firstNinjaDir.ninjaFile = "yoshi.txt";
 *
 * Seems a tad more tedious than necessary, doesn’t it? This is where
 * auto-populating properties comes into play; just take a look at the
 * following example.
 *  */

// Auto-populating properties with proxies
function Folder() {
  // creating proxy inside Folder function
  return new Proxy(
    {}, // target is an empty object
    {
      get: (target, property) => {
        console.log('Reading ' + property)

        if (!(property in target)) {
          target[property] = new Folder()
        }

        //
        return target[property]
      },
    },
  )
}

const rootFolder = new Folder()

console.log('rootFolder ', rootFolder)

try {
  rootFolder.ninjaasDir.firstNinjaDir.ninjaFile = 'Yosh.txt'
} catch (e) {
  console.log('An exceprtion has occured')
}

console.log('rootFolder ', rootFolder)

/**
 * The JavaScript Proxy object is used here to create a mechanism for
 * auto-populating properties. The get trap in the Proxy is triggered every
 * time a property is accessed on the object. If the property doesn't exist,
 * it is created on-the-fly.
 *
 * When you execute rootFolder.ninjaasDir.firstNinjaDir.ninjaFile =
 * 'Yosh.txt', the JavaScript engine tries to access the ninjaasDir property
 * on rootFolder. Since ninjaasDir doesn't exist, the get trap is triggered,
 * creating a new Folder instance and assigning it to ninjaasDir.
 *
 * Next, the engine tries to access firstNinjaDir on ninjaasDir. Again,
 * since firstNinjaDir doesn't exist, the get trap is triggered, creating a
 * new Folder instance and assigning it to firstNinjaDir.
 *
 * Finally, the engine tries to access ninjaFile on firstNinjaDir. Since
 * ninjaFile doesn't exist, the get trap is triggered, creating a new Folder
 * instance and assigning it to ninjaFile.
 *
 * Then, 'Yosh.txt' is assigned to ninjaFile, replacing the Folder instance.
 *
 * This process doesn't require a loop because the get trap is triggered for
 * each property access, not just once. This allows for the creation of
 * deeply nested properties with a single line of code.
 * */
