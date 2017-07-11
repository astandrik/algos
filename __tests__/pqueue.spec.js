let PQueue = require('../priorityQueue');

let helpers = require('./helpers');
let randomArray = helpers.randomArray;
let randomNumber = helpers.randomNumber;
let checkMaxHeap = helpers.checkMaxHeap;

describe("priority queue tests", () => {
  it("get max", () => {
    for(let i = 0; i < 10; i++) {
      let arr = randomArray(randomNumber(1,100)),
          pqueue = new PQueue(arr);
      expect(pqueue.max).toEqual(Math.max.apply(this, arr));
    }
  });
  it("extract max", () => {
    for(let i = 0; i < 10; i++) {
      let arr = randomArray(randomNumber(2,100)),
          pqueue = new PQueue(arr),
          max = pqueue.extractMax();
      arr.sort((a,b) => b-a);
      expect(max).toEqual(arr[0]);
      expect(pqueue.length).toEqual(arr.length-1);
      max = pqueue.extractMax();
      expect(max).toEqual(arr[1]);
      expect(pqueue.length).toEqual(arr.length-2);
    }
  });
  it("extract sort", () => {
    for(let i = 0; i < 10; i++) {
      let arr = randomArray(randomNumber(2,100)),
          pqueue = new PQueue(arr);
      arr.sort((a,b) => b-a);
      let heapSorted = [];
      while (pqueue.length > 0) {
        heapSorted.push(pqueue.extractMax());
      }
      expect(heapSorted).toEqual(arr);
    }
  });
  it("increase keys test", () => {
    let arr = randomArray(99);
    let arr2 = randomArray(120);
    let q1 = new PQueue(arr);
    let q2 = new PQueue(arr2);
    for(let i = 0; i < 10; i++) {
      let randomIndex = randomNumber(0,arr.length -1);
      let randomIndex2 = randomNumber(0,arr2.length -1);
      q1.increaseBy(randomIndex,randomNumber(1,1000));
      q2.increaseBy(randomIndex2,randomNumber(1,1000));
      checkMaxHeap(q1, expect);
      checkMaxHeap(q2, expect);
    }
  });
  it("insertion test", () => {
    for(let i = 0; i < 10; i++) {
      let arr = randomArray(randomNumber(0,200)),
          pqueue = new PQueue(arr),
          inserts = randomNumber(1, 100);
      for(let j = 0; j < inserts; j++) {
        pqueue.insertKey(randomNumber(-500,500));
      }
      checkMaxHeap(pqueue, expect);
    }
  });
  it("create heap by inserts", () => {
    for(let j = 0; j < 10; j++) {
      let pqueue = new PQueue([]),
          arr = [];
      for(let i = 0; i < randomNumber(2,300); i++) {
        let n = randomNumber(-1000,1000);
        pqueue.insertKey(n);
        arr.push(n);
      }
      arr.sort((a,b) => a-b);
      pqueue.heapSort();
      expect(pqueue.heap).toEqual(arr);
    }
  });
})
