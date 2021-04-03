const bubbleSort = (data, animation = []) => {
  let arr = Array.from(data);
  let sorted = false;
  const swap = (i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  while (!sorted) {
    sorted = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        animation.push([i - 1, i, arr[i - 1], arr[i]]);
        swap(i - 1, i);
        sorted = false;
      }
    }
  }
  console.log(arr);
  return animation;
};

export default bubbleSort;
