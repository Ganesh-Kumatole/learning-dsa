const arr = [5, 6, 2, 6, 5, 10, 5, -4];

// Hash: elements -> Frequcncies
const map = new Map();

for (let i = 0; i < arr.length; i++) {
  map.get(arr[i]) ? map.set(arr[i], map.get(arr[i]) + 1) : map.set(arr[i], 1);
}

// Element with maxFreq
let currentMaxFreq = -Infinity;
let currentMaxFreqEle = -Infinity;

for (let [ele, freq] of map) {
  if (freq > currentMaxFreq) {
    currentMaxFreq = freq;
    currentMaxFreqEle = ele;
  }
}

// Element with minFreq
let currentMinFreq = Infinity;
let currentMinFreqEle = Infinity;

map.forEach((freq, ele) => {
  if (freq < currentMinFreq) {
    currentMinFreq = freq;
    currentMinFreqEle = ele;
  }
});

console.log(`
    - Array: ${arr}
    - Element ${currentMaxFreqEle} has maximum frequency of ${currentMaxFreq}
    - Element ${currentMinFreqEle} has minimum frequency of ${currentMinFreq}
    `);
