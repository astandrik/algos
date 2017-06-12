let PQueue = require('../priorityQueue');

jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));

function randomNumber(min, max) {
  return Math.floor(Math.random() *(max-min +1)) + min;
}

function randomArray(len) {
  return (new Array(len)).fill(1).map(x => randomNumber(-1000,1000));
}

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
})
