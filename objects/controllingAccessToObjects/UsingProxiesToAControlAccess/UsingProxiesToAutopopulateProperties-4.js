/*
 * In addition to simplifying logging, proxies can be used for autopopulating
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
 * autopopulating properties comes into play; just take a look at the
 * following example.
 *  */

// Autopopulating properties with proxies
function Folder() {
  // creating proxy inside Folder function
  return new Proxy(
    {},
    {
      get: (target, property) => {
        console.log("Reading " + property);

        if (!(property in target)) {
          target[property] = new Folder();
        }

        //
        return target[property];
      },
    }
  );
}

const rootFolder = new Folder();

console.log("rootFolder ", rootFolder);

try {
  rootFolder.ninjaasDir.firstNinjaDir.ninjaFile = "Yosh.txt";
} catch (e) {
  console.log("An exceprtion has occured");
}

console.log("rootFolder ", rootFolder);

/*
 * We’re accessing a property, firstNinja- Dir, of an undefined property,
 * ninjas- Dir, of the rootFolder object. But if we run the code, you see
 * that all is well. This happens because we’re using proxies. Every time we
 * access a property, the proxy get trap is activated. If our folder object
 * already contains the requested property, its value is returned, and if it
 * doesn’t, a new folder is created and assigned to the property. This is how
 * two of our properties, ninjasDir and firstNinjaDir, are created.
 * Requesting a value of an uninitialized property triggers its creation.
 *  */