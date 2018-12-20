const ids = require('./ids.json');

let twos = 0
let threes = 0

ids.forEach(id => {
    const chars = {}

    // count all the chars up
    id.split('').forEach(char => {
        if (chars[char] == undefined) {
            chars[char] = 1;
        } else {
            chars[char]++;
        }
    });

    if (Object.values(chars).includes(2)) {
        twos++;
    }
    if (Object.values(chars).includes(3)) {
        threes++;
    }
});

console.log(twos * threes);