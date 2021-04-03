import mergeSort from "./../sorting/mergeSort";
import colors from "./../styles/colors";

const executeMergeSort = (data) => {
  const animationRate = 30;
  const colorResetTime = 20;
  let animations = mergeSort(data);
  let columns = document.querySelectorAll(".column");

  for (let i = 0; i < animations.length; i++) {
    let [first, second, index, height] = animations[i];

    setTimeout(() => {
      columns[first].style.backgroundColor = colors.switch;
      columns[second].style.backgroundColor = colors.switch;
    }, animationRate * i);

    setTimeout(() => {
      columns[first].style.backgroundColor = colors.primary;
      columns[second].style.backgroundColor = colors.primary;
      columns[index].style.height = `${height * 5}px`;
    }, animationRate * i + colorResetTime);
  }
};

export default executeMergeSort;
