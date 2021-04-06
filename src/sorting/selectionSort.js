const animateSelectionSort = (arr) => {
  let animations = [];
  debugger;
  selectionSort(arr, animations);
  debugger;
  console.log(animations);
  debugger;
  return animations;
};

const selectionSort = (arr, animations) => {
  let min;
  const swap = (i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      animations.push([j, arr[j]]);
      if (arr[j] < arr[min]) {
        animations.push([j, arr[j]]);
        min = j;
      }
    }

    animations.push([i, arr[min]]);
    animations.push([min, arr[i]]);
    swap(min, i);
  }
  console.log(animations);
};

export default animateSelectionSort;
