// webpack uses a concept known as the Dependency Graph
// webpack will parse the entry point file first
// at every import/require keyword, it will mark those paths as a dependency
// webpack will go through each dependency and treat them as modules, and
// repeat throughout app

import fooString from "./foo.js";
console.log('Azula Rat');
