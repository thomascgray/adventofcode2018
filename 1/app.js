const timeshifts = require('./timeshifts.json').map(v => parseInt(v));

let total = 0

timeshifts.forEach(ts => {
    total += ts;
});

console.log(total);