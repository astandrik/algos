module.exports.checkMaxHeap = function checkMaxHeap(heap, ex) {
  for(let i = 1; i < heap.length; i++) {
    if(heap.left(i) < heap.length && heap.byIndex(i) !==  heap.byIndex(heap.left(i)))
      ex(heap.byIndex(i)).toBeGreaterThan(heap.byIndex(heap.left(i)));
    if(heap.right(i) < heap.length && heap.byIndex(i) !==  heap.byIndex(heap.right(i)))
      ex(heap.byIndex(i)).toBeGreaterThan(heap.byIndex(heap.right(i)));
    if(heap.parent(i) >= 0 && heap.byIndex(i) !==  heap.byIndex(heap.parent(i)))
      ex(heap.byIndex(i)).toBeLessThan(heap.byIndex(heap.parent(i)));
  }
}

module.exports.randomNumber = function randomNumber(min, max) {
  return Math.floor(Math.random() *(max-min +1)) + min;
}

module.exports.randomArray = function randomArray(len) {
  return (new Array(len)).fill(1).map(x => module.exports.randomNumber(-1000,1000));
}
