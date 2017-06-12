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
}

module.exports = PQueue;
