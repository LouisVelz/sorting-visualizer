import quickSort from "./../sorting/insertionSort";
import colors from "./../styles/colors";

const executeInsertionSort = (arr, animationRate) => {
  let animations = quickSort(arr);
  // const animationRate = 50;
  const colorResetTime = 20;
  let columns = document.querySelectorAll(".column");

  for (let i = 0; i < animations.length; i++) {
    const [first, firstVal] = animations[i];

    setTimeout(() => {
      columns[first].style.backgroundColor = colors.switch;
      columns[first].style.height = `${firstVal * 5}px`;
    }, animationRate * i);

    setTimeout(() => {
      columns[first].style.backgroundColor = colors.primary;
    }, animationRate * i + colorResetTime);
  }
};

export default executeInsertionSort;
