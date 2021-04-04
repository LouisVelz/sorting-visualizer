const animateQuickSort = (arr) => {
  let animations = [];
  quickSort(arr, 0, arr.length - 1, animations);
  return animations;
};

const quickSort = (arr, start, end, animations) => {
  if (start < end) {
    let pivotIndex = pivot(arr, start, end, animations);

    quickSort(arr, start, pivotIndex - 1, animations);

    quickSort(arr, pivotIndex + 1, end, animations);
  }
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
      animations.push([i, swapIdx, arr[i], arr[swapIdx]]);
      swap(swapIdx, i);
    }
  }

  animations.push([start, swapIdx, arr[start], arr[swapIdx]]);
  swap(start, swapIdx);

  return swapIdx;
};

export default animateQuickSort;
