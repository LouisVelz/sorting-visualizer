const animateHeapSort = (arr) => {
  let animations = [];
  heapSort(arr, animations);
  console.log(animations);
  return animations;
};

const heapSort = (arr, animations) => {
  let heap = new MinHeap(animations);

  arr.forEach((val) => {
    heap.insert(val);
  });

  while (heap.values.length) {
    heap.remove();
  }
};
class MinHeap {
  constructor(animations) {
    this.values = [];
    this.animations = animations;
    this.count = 0;
  }

  insert(value) {
    this.values.push(value);
    this.animations.push([this.values.length - 1, value]);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element >= parent) break;
      else {
        this.animations.push([parentIdx, element]);
        this.animations.push([idx, parent]);
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
      }
    }
  }

  remove() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    this.animations.push([this.count, min]);
    this.count++;
    return min;
  }

  sinkDown() {
    let idx = 0;
    const element = this.values[idx];
    const length = this.values.length;
    while (true) {
      let swap = null;
      let leftChildIdx = 2 * idx + 1;
      let rigthChildIdx = 2 * idx + 2;
      let rigthChild, leftChild;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }
      if (rigthChildIdx < length) {
        rigthChild = this.values[rigthChildIdx];
        if (
          (swap === null && rigthChild < element) ||
          (swap !== null && rigthChild < leftChild)
        ) {
          swap = rigthChildIdx;
        }
      }

      if (swap === null) break;
      this.animations.push([this.count + idx, this.values[swap]]);
      this.animations.push([this.count + swap, element]);
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

export default animateHeapSort;
