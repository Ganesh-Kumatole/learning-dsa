const fs = require('fs');
const key = fs.readFileSync(0, 'utf-8');

const arr = [2, 4, 5, 8, 2, 5, 1, 2];

// Object to hash frequencies
const freq = {};

for (let ele of arr) {
  freq[ele] ? freq[ele]++ : (freq[ele] = 1);
}

if (freq[key]) console.log(freq[key]);
else console.log(0);
