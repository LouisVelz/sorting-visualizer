const animateMergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let arrayCopy = Array.from(arr);
  let animations = [];
  mergeSort(arr, 0, arr.length - 1, arrayCopy, animations);

  return animations;
};

const mergeSort = (arr, startIdx, endIdx, arrayCopy, animations) => {
  if (startIdx === endIdx) return;
  let midIdx = Math.floor((startIdx + endIdx) / 2);

  mergeSort(arrayCopy, startIdx, midIdx, arr, animations);
  mergeSort(arrayCopy, midIdx + 1, endIdx, arr, animations);

  merge(arr, startIdx, midIdx, endIdx, arrayCopy, animations);
};
const merge = (arr, startIdx, midIdx, endIdx, arrayCopy, animations) => {
  let k = startIdx;
  let i = startIdx;
  let j = midIdx + 1;

  while (i <= midIdx && j <= endIdx) {
    if (arrayCopy[i] <= arrayCopy[j]) {
      animations.push([i, j, k, arrayCopy[i]]);
      arr[k++] = arrayCopy[i++];
    } else {
      animations.push([i, j, k, arrayCopy[j]]);
      arr[k++] = arrayCopy[j++];
    }
    console.log(arr, arrayCopy);
  }

  while (i <= midIdx) {
    animations.push([i, i, k, arrayCopy[i]]);
    arr[k++] = arrayCopy[i++];
    console.log(arr, arrayCopy);
  }

  while (j <= endIdx) {
    animations.push([j, j, k, arrayCopy[j]]);
    arr[k++] = arrayCopy[j++];
    console.log(arr, arrayCopy);
  }
};

export default animateMergeSort;
