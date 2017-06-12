class Heap {
  constructor(arr) {
    if(arr !== undefined && arr instanceof Array) {
      this.heap = arr;
      this.buildHeap();
    } else {
      this.heap = [];
    }
  }
  buildHeap() {
    if(this.heap.length > 1) {
      let start = Math.floor(this.heap.length/2) - 1;
      for(let i = start; i >= 0; i--) {
        this.maxHeapify(i);
      }
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
  maxHeapify(i) {
    let left = this.heap[this.left(i)];
    let right = this.heap[this.right(i)];
    let max = -1;
    if(this.left(i) < this.heap.length && left > this.heap[i]) {
      max = this.left(i);
    } else {
      max = i;
    }
    if(this.right(i) < this.heap.length && right > this.heap[max]) {
      max = this.right(i);
    }
    if(max !== i) {
      let c = this.heap[max];
      this.heap[max] = this.heap[i];
      this.heap[i] = c;
      this.maxHeapify(max);
    }
  }
  parent(i) {
    let ind = Math.floor((i-1)/2);;
    return ind < 0 ? undefined : ind;
  }
}

module.exports = Heap;
