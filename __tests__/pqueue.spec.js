let PQueue = require('../priorityQueue');

jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));
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
  })
})
