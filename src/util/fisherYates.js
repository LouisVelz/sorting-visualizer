export const fisherYates = (number) => {
  let arr = Array.from({ length: number }, (_, i) => i + 1);

  let swap = (i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  for (let i = arr.length - 1; i >= 1; i--) {
    let random = Math.floor(Math.random() * i);
    swap(random, i);
  }

  return arr;
};

// console.log(fisherYates(5));
// console.log(fisherYates(7));
// console.log(fisherYates(8));
// console.log(fisherYates(10));
