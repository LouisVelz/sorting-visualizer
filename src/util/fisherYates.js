const fisherYatesShuffle = (arr) => {
  let swap = (i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  for (let i = arr.length - 1; i >= 1; i--) {
    let random = Math.floor(Math.random() * i + 1);
    swap(random, i);
  }

  return arr;
};
