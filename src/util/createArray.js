const createArray = (number) => {
  let arr = Array.from({ length: number }, (_, i) =>
    Math.floor(Math.random() * i)
  );

  // let swap = (i, j) => {
  //   [arr[i], arr[j]] = [arr[j], arr[i]];
  // };

  // for (let i = arr.length - 1; i >= 1; i--) {
  //   let random = Math.floor(Math.random() * i);
  //   swap(random, i);
  // }

  return arr;
};

export default createArray;
