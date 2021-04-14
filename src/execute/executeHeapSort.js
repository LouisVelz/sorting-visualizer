import heapSort from "./../sorting/heapSort";
import colors from "./../styles/colors";

const executeHeapSort = (arr, animationRate, colorResetTime) => {
  let animations = heapSort(arr);
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

export default executeHeapSort;
