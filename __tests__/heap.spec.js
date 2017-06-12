let Heap = require('../heap');
jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));
function checkMaxHeap(heap, ex) {
  for(let i = 1; i < heap.length; i++) {
    if(heap.left(i) < heap.length && heap.byIndex(i) !==  heap.byIndex(heap.left(i)))
      ex(heap.byIndex(i)).toBeGreaterThan(heap.byIndex(heap.left(i)));
    if(heap.right(i) < heap.length && heap.byIndex(i) !==  heap.byIndex(heap.right(i)))
      ex(heap.byIndex(i)).toBeGreaterThan(heap.byIndex(heap.right(i)));
    if(heap.parent(i) >= 0 && heap.byIndex(i) !==  heap.byIndex(heap.parent(i)))
      ex(heap.byIndex(i)).toBeLessThan(heap.byIndex(heap.parent(i)));
  }
}

describe("left, right, parent simple tests", () => {
  let test = [16,14,10,8,7,9,3,2,4,1];
  let heap = new Heap(test);
  it("lefts chosen ok", () => {
    expect(heap.left(0)).toEqual(1);
    expect(heap.left(1)).toEqual(3);
    expect(heap.left(2)).toEqual(5);
    expect(heap.left(3)).toEqual(7);
    expect(heap.left(4)).toEqual(9);
  });
  it("rights chosen ok", () => {
    expect(heap.right(0)).toEqual(2);
    expect(heap.right(1)).toEqual(4);
    expect(heap.right(2)).toEqual(6);
    expect(heap.right(3)).toEqual(8);
  });
  it("parents chosen ok", () => {
    expect(heap.parent(0)).toEqual(undefined);
    expect(heap.parent(1)).toEqual(0);
    expect(heap.parent(2)).toEqual(0);
    expect(heap.parent(3)).toEqual(1);
    expect(heap.parent(4)).toEqual(1);
    expect(heap.parent(5)).toEqual(2);
    expect(heap.parent(6)).toEqual(2);
    expect(heap.parent(7)).toEqual(3);
    expect(heap.parent(8)).toEqual(3);
    expect(heap.parent(9)).toEqual(4);
  });
  it("check max-heap property", () => {
    checkMaxHeap(heap, expect);
  });
  it("max-heapify test", () => {
    let arr = [16,4,10,14,7,9,3,2,8,1];
    let expectedArr = [16,14,10,8,7,9,3,2,4,1];
    nHeap = new Heap(arr);
    nHeap.maxHeapify(1);
    expect(nHeap.heap).toEqual(expectedArr);
    checkMaxHeap(nHeap, expect);
  })
})
