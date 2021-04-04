const animateInsertionSort = (arr) => {
  let animations = [];
  insertionSort(arr, animations);
  return animations;
};

const insertionSort = (arr, animations) => {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      animations.push([j + 1, arr[j]]);
      arr[j + 1] = arr[j];

      j--;
    }
    animations.push([j + 1, currentVal]);
    arr[j + 1] = currentVal;
  }
  return arr;
};

export default animateInsertionSort;
