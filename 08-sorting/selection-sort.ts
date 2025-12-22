const arr: number[] = [5, 11, -23, 0, 2, 10];

function swap(brr: number[], pos: number): void {
  let dup = brr[pos];
  brr[pos] = brr[pos - 1]!;
  brr[pos - 1] = dup!;
}

const selectionSort = (arr: number[]): number[] => {
  // copy arr
  const brr: number[] = [...arr];
  const n = brr.length;

  // Shrink sub-arrays from start
  for (let i = n - 1, k = 0; k < n; k++) {
    // Place the minEle at the start of sub-array
    for (let j = i; j > k; j--) {
      if (brr[j]! < brr[j - 1]!) swap(brr, j);
    }
  }

  return brr;
};

const sortedArr: number[] = selectionSort(arr);
console.log(sortedArr);
