let Heap = require("./heap");
class PQueue extends Heap{
  constructor(arr) {
    super(arr);
  }
  get max() {
    return this.byIndex(0);
  }
  extractMax() {
    if(this.length > 0) {
      let max = this.byIndex(0);
      this.heap[0] = this.heap[this.length -1];
      this.hlength--;
      this.maxHeapify(0);
      return max;
    } else {
      return undefined;
    }
  }
  increaseBy(i, by) {
    this.heap[i] += by;
    while(i > 0 && this.byIndex(this.parent(i)) < this.heap[i]) {
      let c = this.heap[i];
      this.heap[i] = this.byIndex(this.parent(i));
      this.heap[this.parent(i)] = c;
      i = this.parent(i);
    }
  }
  insertKey(key) {
    this.hlength++;
    this.heap[this.hlength-1] = 0;
    this.increaseBy(this.hlength-1, key);
  }
}

module.exports = PQueue;
