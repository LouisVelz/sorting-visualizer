import selectionSort from "./../sorting/selectionSort";
import colors from "./../styles/colors";

const executeSelectionSort = (arr, animationRate) => {
  let animations = selectionSort(arr);
  // const animationRate = 30;
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

export default executeSelectionSort;
