let findMaxSubarray = require("../maximum-subarray");

let helpers = require('./helpers');
let randomArray = helpers.randomArray;
let randomNumber = helpers.randomNumber;

function bruteForce(arr) {
  let maxSum = null, val = 0, left = -1, right = -1;
  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
      let sum = 0;
      for(let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if(maxSum === null || sum > maxSum) {
        maxSum = sum;
        left = i;
        right = j;
        val = maxSum;
      }
    }
  }
  return {val, left, right};
}

describe("Max subarray tests", () => {
  describe("simple tests", ()=> {
    it("1,2,3,4 test",() => {
      let expected = {
        val: 10,
        left: 0,
        right: 3
      }
      let arr = [1,2,3,4];
      let answer = findMaxSubarray(arr);
      expect(answer).toEqual(expected);
    });
    it("-1,1,2,3,-1 test", () => {
      let arr = [-1,1,2,3,-1];
      let expected = bruteForce(arr);
      let answer = findMaxSubarray(arr);
      expect(answer).toEqual(expected);
    });
    it("kormen test brute", () => {
      let arr = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7];
      let expected = {
        val: 43,
        left: 7,
        right: 10
      }
      let answer = bruteForce(arr);
      expect(answer).toEqual(expected);
    });
    it("kormen test algo", () => {
      let arr = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7];
      let expected = {
        val: 43,
        left: 7,
        right: 10
      }
      let answer = findMaxSubarray(arr);
      expect(answer).toEqual(expected);
    });
    it("small random test 1", () => {
      let arr = randomArray(10);
      let answer = findMaxSubarray(arr);
      let expected = bruteForce(arr);
      if(answer.val !== expected.val) console.log(arr);
      expect(answer).toEqual(expected);
    });
    it("small random test 2", () => {
      let arr = randomArray(9);
      let answer = findMaxSubarray(arr);
      let expected = bruteForce(arr);
      if(answer.val !== expected.val) console.log(arr);
      expect(answer).toEqual(expected);
    });
  });
  describe("random tests", () => {
    it("large random test 1", () => {
      let arr = randomArray(100);
      let answer = findMaxSubarray(arr);
      let expected = bruteForce(arr);
      expect(answer).toEqual(expected);
    });
    it("large random test 2", () => {
      let arr = randomArray(99);
      let answer = findMaxSubarray(arr);
      let expected = bruteForce(arr);
      expect(answer).toEqual(expected);
    });
    it("test time", () => {
      let arr = randomArray(300);
      let start = new Date();
      bruteForce(arr);
      let finish = new Date();
      let bruteTime = finish.getTime() - start.getTime();
      start = new Date();
      findMaxSubarray(arr);
      finish = new Date();
      let subarrayTime = finish.getTime() - start.getTime();
      console.log("brute: ", bruteTime, "algo: ", subarrayTime);
      expect(subarrayTime).toBeLessThan(bruteTime);
    })
  })
})