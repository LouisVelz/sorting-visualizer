const animateQuickSort = (arr) => {
  let animations = [];
  quickSort(arr, 0, arr.length - 1, animations);
  return animations;
};

const quickSort = (arr, left, right, animations) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

const pivot = (arr, start, end, animations) => {
  const swap = (i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  const pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(swapIdx, i);
    }
  }
  swap(start, swapIdx);
  return swapIdx;
};

export default animateQuickSort;
