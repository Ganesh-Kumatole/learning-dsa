# Sorting Algorithms

## Bubble Sort

1. Start with an unsorted array.
2. Compare adjacent elements and if they are in the wrong order, swap them.
3. Repeat step 2 for all elements in the array until no more swaps are needed.
4. Repeat steps 2 and 3 until the entire array is sorted.

- Time complexity: O(n^2) in all cases.
- Space complexity: O(1).
- Stability: Stable.
- Description: Bubble sort is a simple sorting algorithm that repeatedly iterates through the array and compares adjacent elements. If they are in the wrong order, they are swapped. It's a good choice for small arrays or when the array is already partially sorted.

## Insertion Sort

1. Start with an unsorted array.
2. Consider the second element of the array and insert it into the correct position within the sorted portion of the array.
3. Move to the next element and repeat step 2 until the entire array is sorted.

- Time complexity: O(n^2) in all cases.
- Space complexity: O(1).
- Stability: Stable.
- Description: Insertion sort improves upon bubble sort by only comparing and swapping elements within a certain range. It starts by considering the second element and inserts it into the correct position within the sorted portion of the array. It's efficient for small arrays or when the array is already partially sorted.

## Selection Sort

1. Start with an unsorted array.
2. Find the smallest (or largest) element in the unsorted portion of the array.
3. Swap the smallest (or largest) element with the first element in the unsorted portion.
4. Move to the next element and repeat steps 2 and 3 until the entire array is sorted.

- Time complexity: O(n^2) in all cases.
- Space complexity: O(1).
- Stability: Unstable.
- Description: Selection sort works by repeatedly finding the smallest (or largest) element in the unsorted portion of the array and moving it to the beginning of the unsorted portion. It's simple to implement but has poor performance for large arrays.

## Merge Sort

1. Start with an unsorted array.
2. Divide the array into two halves and recursively sort each half.
3. Merge the two sorted halves into a single sorted array.
4. Repeat steps 2 and 3 until the entire array is sorted.

- Time complexity: O(n log n) in all cases.
- Space complexity: O(n).
- Stability: Stable.
- Description: Merge sort is a divide-and-conquer algorithm that recursively divides the array into smaller subarrays, sorts them individually, and then merges them back together. It's efficient for large arrays and has a stable sorting order.

## Quick Sort

1. Start with an unsorted array.
2. Select a pivot element from the array.
3. Partition the array around the pivot element, with elements smaller than the pivot on the left and elements larger on the right.
4. Recursively sort the subarrays on the left and right of the pivot.
5. Repeat steps 2 to 4 until the entire array is sorted.

- Time complexity: O(n log n) on average, O(n^2) in the worst case.
- Space complexity: O(log n) on average, O(n) in the worst case.
- Stability: Unstable.
- Description: Quick sort is another divide-and-conquer algorithm that selects a pivot element, partitions the array around the pivot, and recursively sorts the subarrays. It's generally faster than merge sort but can have poor performance for certain input data.
