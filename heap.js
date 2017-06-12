class Heap {
  constructor(arr) {
    if(arr !== undefined && arr instanceof Array) {
      this.heap = arr;
    } else {
      this.heap = [];
    }
  }
  left(i) {
    return 2*i+1;
  }
  right(i) {
    return 2*i + 2;
  }
  byIndex(i) {
    return this.heap[i];
  }
  get length() {
    return this.heap.length;
  }
  parent(i) {
    let ind = Math.floor((i-1)/2);;
    return ind < 0 ? undefined : ind;
  }
}

module.exports = Heap;
