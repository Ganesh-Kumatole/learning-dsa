const arr: number[] = [5, 2, 10, -11, 7, 1, -5];

function swap(brr: number[], pos: number): void {
  let dup = brr[pos];
  brr[pos] = brr[pos - 1]!;
  brr[pos - 1] = dup!;
}

const insertionSort = (arr: number[]): number[] => {
  // copy arr
  const brr = [...arr];

  // Sort sub-arrays one-by-one
  for (let i = 1; i < brr.length; i++) {
    // Insert right-extreme of sub-array at correct position
    for (let j = i; j > 0; j--) {
      if (brr[j]! < brr[j - 1]!) swap(brr, j);
      else break;
    }
  }

  return brr;
};

const sortedArr = insertionSort(arr);
console.log(sortedArr);
