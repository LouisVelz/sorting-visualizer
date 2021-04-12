import bubbleSort from "./../sorting/bubbleSort";
import colors from "./../styles/colors";

const execBubbleSort = (data, animationRate, colorResetTime) => {
  // const animationRate = 30;
  // const colorResetTime = 20;
  let animations = bubbleSort(data);
  let columns = document.querySelectorAll(".column");

  for (let i = 0; i < animations.length; i++) {
    let [first, second, firstVal, secondVal] = animations[i];

    setTimeout(() => {
      columns[first].style.backgroundColor = colors.switch;
      columns[second].style.backgroundColor = colors.switch;

      columns[second].style.height = `${firstVal * 5}px`;
      columns[first].style.height = `${secondVal * 5}px`;
    }, animationRate * i);

    setTimeout(() => {
      columns[first].style.backgroundColor = colors.primary;
      columns[second].style.backgroundColor = colors.primary;
    }, animationRate * i + colorResetTime);
  }
};

export default execBubbleSort;
