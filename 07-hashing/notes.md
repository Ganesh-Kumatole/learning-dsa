# Hashing - Revision Notes

## What is Hashing?

Hashing is a technique that converts data of any size into a fixed-size value (hash code) using a mathematical function called a hash function. In programming, hashing typically refers to using hash tables or hash maps for efficient data storage and retrieval.

## Key Concepts

### Hash Table/Map

- A data structure that implements an associative array abstract data type
- Uses a hash function to compute an index into an array of buckets or slots
- Allows O(1) average time complexity for insertions, deletions, and lookups

### Hash Function

- A function that maps input data to a fixed-size value
- Should be deterministic (same input always produces same output)
- Should minimize collisions (different inputs producing same output)

## When to Use Hashing

1. **Frequency Counting**: Track how many times elements appear
2. **Duplicate Detection**: Check if elements exist in a collection
3. **Two Sum Problems**: Find pairs that sum to a target
4. **Cache Implementation**: Store frequently accessed data
5. **Unique Element Counting**: Count distinct elements

## Common Patterns & Examples

### Pattern 1: Frequency Counting (Object Literal)

```javascript
const arr = [2, 4, 5, 8, 2, 5, 1, 2];
const freq = {};

for (let ele of arr) {
  freq[ele] ? freq[ele]++ : (freq[ele] = 1);
}
// freq = { 2: 3, 4: 1, 5: 2, 8: 1, 1: 1 }
```

### Pattern 2: Frequency Counting (Map)

```javascript
const arr = [5, 6, 2, 6, 5, 10, 5, -4];
const map = new Map();

for (let i = 0; i < arr.length; i++) {
  map.get(arr[i]) ? map.set(arr[i], map.get(arr[i]) + 1) : map.set(arr[i], 1);
}
```

### Pattern 3: Finding Max/Min Frequency Element

```javascript
let currentMaxFreq = -Infinity;
let currentMaxFreqEle = -Infinity;

for (let [ele, freq] of map) {
  if (freq > currentMaxFreq) {
    currentMaxFreq = freq;
    currentMaxFreqEle = ele;
  }
}
```

## Implementation Details

### Object vs Map

- **Object**:
  - Pros: Familiar syntax, faster for small datasets
  - Cons: Can have prototype chain issues, keys are strings/symbols only
- **Map**:
  - Pros: Preserves insertion order, any type of keys, built-in methods
  - Cons: Slightly more memory overhead

## Time Complexity Analysis

| Operation | Average Case | Worst Case |
| --------- | ------------ | ---------- |
| Insertion | O(1)         | O(n)       |
| Deletion  | O(1)         | O(n)       |
| Lookup    | O(1)         | O(n)       |

_Note: O(n) worst case occurs due to hash collisions_

## Best Practices

1. **Choose appropriate hash function**: For integers, the number itself can be the key
2. **Handle collisions**: Use techniques like chaining or open addressing
3. **Consider space complexity**: Hash maps use extra space for buckets
4. **Reset counters**: Initialize properly to avoid undefined behavior
5. **Use Map for complex keys**: When keys aren't strings or need ordering

## Common Mistakes

1. **Not initializing counters**:

   ```javascript
   // Wrong
   freq[ele]++; // undefined++ = NaN

   // Correct
   freq[ele] = (freq[ele] || 0) + 1;
   ```

2. **Using == instead of ===**:

   ```javascript
   // Can cause issues with type coercion
   if (freq[key]) // may not work as expected
   ```

3. **Not handling edge cases**:
   - Empty arrays
   - Single element arrays
   - All elements same
