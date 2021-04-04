import heapSort from "./../sorting/heapSort";
import colors from "./../styles/colors";

const executeHeapSort = (arr) => {
  let animations = heapSort(arr);
  const animationRate = 30;
  const colorResetTime = 20;
  let columns = document.querySelectorAll(".column");
  debugger;
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