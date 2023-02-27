/*
Solution for jest testing .mjs files.
Found original post on stackoverflow,
and modified the original solution to my own needs.
This was implemented 27. Feb 2023.

https://stackoverflow.com/questions/63114333/how-to-import-mjs-modules-in-jests-xyz-test-js
*/

module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.mjs$": "babel-jest",
  },
  moduleFileExtensions: ["js", "mjs"],
};
