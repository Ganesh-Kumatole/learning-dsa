const arr: number[] = [5, 2, 10, -11, 7, 1, -5];

function swap(brr: number[], pos: number): void {
  let dup = brr[pos];
  brr[pos] = brr[pos + 1]!;
  brr[pos + 1] = dup!;
}

function bubbleSort(arr: number[]): number[] {
  // copy arr
  const brr = [...arr];

  // Shrink sub-arrays from end
  for (let i = brr.length - 1; i > 0; i--) {
    // Place maxEle at the end of sub-array
    for (let j = 0; j <= i; j++) {
      if (brr[j]! > brr[j + 1]!) {
        swap(brr, j);
      }
    }
  }

  return brr;
}

const sortedArr = bubbleSort(arr);
console.log(sortedArr);
