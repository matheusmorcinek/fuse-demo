const Fuse = require('fuse.js');
const ITEMS = require('./items.json');

const fuseOptions = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0.3,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: [
        "name",
        "description",
        "searchTokens"
    ]
};

const fuse = new Fuse(ITEMS, fuseOptions);

const searchText = "aple"

console.log(fuse.search(searchText));